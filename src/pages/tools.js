import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/searchInput";
import { Section } from "@/components/section";
import { ToolCard } from "@/components/toolCard";
import { ToolsGrid } from "@/components/toolsGrid";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/searchPage.module.css";
import { useForm } from "@/hooks/useForm";
import { NotFoundTool } from "@/components/NotFoundTool";
import { useRouter } from "next/router";
import { ChevronLeft } from "@/icons/ChevronLeft";
import Link from "next/link";

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
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleInputChange = (event) => {
        form.setField(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.fields.search) {
            router.push(`tools?search=${form.fields.search}`);
            setSearchQuery(form.fields.search);
        }
    };

    const handleFormReset = () => {
        form.reset();
    };

    useEffect(() => {
        if (searchQuery) {
            const filteredTools = fuse.search(searchQuery);
            setTools(filteredTools.map((tool) => tool.item));
        } else {
            setTools(allTools);
        }
    }, [searchQuery]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const search = params.get("search");
        if (search) {
            form.setField("search", search);
            setSearchQuery(search);
        } else {
            setSearchQuery("");
            form.setField("search", "");
        }
    }, [router.asPath]);

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
                <div className={styles.row}>
                    <div>
                        <h1>
                            {searchQuery
                                ? `Results for "${searchQuery}"`
                                : "All tools"}
                        </h1>
                        <small className="text-muted">
                            {tools.length} results
                        </small>
                    </div>
                    {searchQuery && (
                        <Link href="/tools" className={styles.showToolsBtn}>
                            <ChevronLeft size={18} />
                            All tools
                        </Link>
                    )}
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
