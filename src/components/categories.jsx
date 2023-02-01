import { Section } from "./section";
import { CategoryGrid } from "./categoryGrid";
import { CategoryCard } from "./categoryCard";

export const Categories = ({ categories }) => {
    return (
        <Section>
            <h3>Categories</h3>
            <CategoryGrid>
                {categories &&
                    categories.length > 0 &&
                    categories.map((category) => (
                        <CategoryCard key={category} content={category} />
                    ))}
            </CategoryGrid>
        </Section>
    );
};
