import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/searchInput";
import { Section } from "@/components/section";
import { ToolCard } from "@/components/toolCard";
import { ToolsGrid } from "@/components/toolsGrid";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/searchPage.module.css";

const searchOptions = {
    includeScore: false,
    includeMatches: true,
    threshold: 0.3,
    keys: ["name", "author", "description", "categories"],
};

export default function Tools({ allTools }) {
    const [tools, setTools] = useState(allTools);
    const [searchQuery, setSearchQuery] = useState("");
    const fuse = new Fuse(allTools, searchOptions);

    useEffect(() => {
        if (!searchQuery) {
            setTools(allTools);
            return;
        }

        const filteredTools = fuse.search(searchQuery);
        setTools(
            filteredTools.map((tool) => {
                console.log(tool.matches);
                return tool.item;
            })
        );
    }, [searchQuery]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fields = new FormData(event.target);
        const search = fields.get("search");
        if (search) setSearchQuery(search);
    };

    return (
        <>
            <Topbar />
            <Section>
                <form onSubmit={handleSubmit}>
                    <SearchInput
                        name="search"
                        handleSubmit={handleSubmit}
                        placeholder="Search tools here by name, category or keywords"
                    />
                </form>
                <div>
                    {searchQuery && (
                        <span className={styles.searchPill}>
                            Current search: {searchQuery}
                        </span>
                    )}
                </div>
                <div>
                    <h3>All tools</h3>
                    <small className="text-muted">432 results</small>
                </div>
                <ToolsGrid>
                    {tools &&
                        tools.length > 0 &&
                        tools.map((tool) => (
                            <ToolCard allowTag key={tool.id} {...tool} />
                        ))}
                </ToolsGrid>
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
