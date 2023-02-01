import { Footer } from "@/components/footer";
import { SearchInput } from "@/components/searchInput";
import { Section } from "@/components/section";
import { ToolCard } from "@/components/toolCard";
import { ToolsGrid } from "@/components/toolsGrid";
import { Topbar } from "@/components/topbar";

export default function Tools() {
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
                    <ToolCard allowTag />
                    <ToolCard allowTag />
                    <ToolCard allowTag />
                    <ToolCard allowTag />
                    <ToolCard allowTag />
                    <ToolCard allowTag />
                </ToolsGrid>
            </Section>
            <Footer />
        </>
    );
}
