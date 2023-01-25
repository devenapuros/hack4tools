import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
const INITIAL_THEME = "light";

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem("hack4tools-color-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    const [theme, setTheme] = useState(
        storedTheme || systemTheme || INITIAL_THEME
    );

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("hack4tools-color-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Missing ThemeProvider to use theme");
    return context;
};
