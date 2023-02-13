import { Section } from "./section";
import { CategoryGrid } from "./categoryGrid";
import { CategoryCard } from "./categoryCard";
import { ModuleError } from "./ModuleError";

export const Categories = ({ categories }) => {
    return (
        <Section>
            <h3>Categories</h3>
            {categories && categories.length > 0 && (
                <CategoryGrid>
                    {categories.map((category) => (
                        <CategoryCard key={category} content={category} />
                    ))}
                </CategoryGrid>
            )}
            {(!categories || categories.length == 0) && <ModuleError />}
        </Section>
    );
};
