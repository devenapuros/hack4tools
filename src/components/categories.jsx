import React from "react";
import { Section } from "./section";
import { CategoryGrid } from "./categoryGrid";
import { CategoryCard } from "./categoryCard";

export const Categories = () => {
    return (
        <Section>
            <h3>Categories</h3>
            <CategoryGrid>
                <CategoryCard>Osint</CategoryCard>
                <CategoryCard>Backdoor</CategoryCard>
                <CategoryCard>Automation</CategoryCard>
                <CategoryCard>Reports</CategoryCard>
                <CategoryCard>Pwn</CategoryCard>
                <CategoryCard>Scanners</CategoryCard>
                <CategoryCard>Dictionaries</CategoryCard>
                <CategoryCard>Enumeration</CategoryCard>
                <CategoryCard>Exploitation</CategoryCard>
            </CategoryGrid>
        </Section>
    );
};
