import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/searchInput";
import { Section } from "@/components/section";
import { ToolCard } from "@/components/toolCard";
import { ToolsGrid } from "@/components/toolsGrid";
import { Topbar } from "@/components/topbar";

export default function Tools({ tools }) {
    return (
        <>
            <Topbar />
            <Section>
                <SearchInput />
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
        const tools = await response.json();

        return { props: { tools } };
    } catch (error) {
        return { props: {} };
    }
}
