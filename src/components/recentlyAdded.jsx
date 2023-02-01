import { ToolCard } from "./toolCard";
import { ToolsGrid } from "./toolsGrid";
import { Section } from "./section";

export const RecentlyAdded = ({ newReleases }) => {
    return (
        <Section>
            <h3>Recently added</h3>
            <ToolsGrid>
                {newReleases &&
                    newReleases.length > 0 &&
                    newReleases.map((release) => (
                        <ToolCard key={release.id} {...release} />
                    ))}
            </ToolsGrid>
        </Section>
    );
};
