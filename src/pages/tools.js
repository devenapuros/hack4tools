import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/searchInput";
import { Section } from "@/components/section";
import { ToolCard } from "@/components/toolCard";
import { ToolsGrid } from "@/components/toolsGrid";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/searchPage.module.css";
import { Close } from "@/icons/Close";
import { useForm } from "@/hooks/useForm";
import { NotFoundTool } from "@/components/NotFoundTool";
import { useRouter } from "next/router";

const searchOptions = {
    includeScore: false,
    includeMatches: true,
    threshold: 0.4,
    keys: ["name", "author", "description", "categories"],
};

const initialForm = {
    search: "",
};

export default function Tools({ allTools }) {
    const [tools, setTools] = useState(allTools);
    const form = useForm(initialForm);
    const fuse = new Fuse(allTools, searchOptions);
    const router = useRouter();

    const handleInputChange = (event) => {
        form.setField(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push(`tools?search=${form.fields.search}`);
    };

    const handleFormReset = () => {
        form.reset();
    };

    return (
        <>
            <Topbar />
            <Section>
                <form onSubmit={handleSubmit} onReset={handleFormReset}>
                    <SearchInput
                        name="search"
                        value={form.fields.search}
                        handleChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        placeholder="Search tools here by name, category or keywords"
                    />
                </form>
                <div className={styles.pillsContainer}>
                    {form.fields.search && (
                        <div className={styles.searchPill}>
                            Search:
                            <span>{form.fields.search}</span>
                            <button className={styles.reset}>
                                <Close size={18} />
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    <h1>
                        {form.fields.search
                            ? `Results for "${form.fields.search}"`
                            : "All tools"}
                    </h1>
                    <small className="text-muted">432 results</small>
                </div>
                <ToolsGrid>
                    {tools &&
                        tools.length > 0 &&
                        tools.map((tool) => (
                            <ToolCard allowTag key={tool.id} {...tool} />
                        ))}
                </ToolsGrid>
                {!tools || (tools.length === 0 && <NotFoundTool />)}
            </Section>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    try {
        const response = await fetch("http://localhost:3000/api/tools");
        const allTools = await response.json();

        return { props: { allTools } };
    } catch (error) {
        return { props: {} };
    }
}
