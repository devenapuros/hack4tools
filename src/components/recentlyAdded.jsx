import { ToolCard } from "./toolCard";
import { ToolsGrid } from "./toolsGrid";
import { Section } from "./section";

export const RecentlyAdded = () => {
    return (
        <Section>
            <h3>Recently added</h3>
            <ToolsGrid>
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
            </ToolsGrid>
        </Section>
    );
};
