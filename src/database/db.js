import { tools } from "./tools";
import { categories } from "./categories";

export const getTools = () => {
    return tools;
};

export const getToolById = (id) => {
    return tools.find((tool) => tool.id === id);
};

export const getNewReleases = () => {
    return tools.filter((tool) => tool.newRelease);
};

export const getCategories = () => {
    return Object.values(categories);
};
