import { ToolCard } from "./toolCard";
import { ToolsGrid } from "./toolsGrid";
import { Section } from "./section";
import { ModuleError } from "./ModuleError";

export const RecentlyAdded = ({ newReleases }) => {
    return (
        <Section>
            <h3>Recently added</h3>
            {newReleases && newReleases.length > 0 && (
                <ToolsGrid>
                    {newReleases.map((release) => (
                        <ToolCard key={release.id} {...release} />
                    ))}
                </ToolsGrid>
            )}
            {(!newReleases || newReleases.length == 0) && <ModuleError />}
        </Section>
    );
};
