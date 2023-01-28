import { Search } from "@/icons/search";
import styles from "@/styles/searchInput.module.css";
import { PrimaryButton } from "./primaryButton";

export const SearchInput = ({ className = "" }) => {
    return (
        <div className={`${className} ${styles.container}`}>
            <input
                className={styles.input}
                type="text"
                placeholder="Search tools here by name, category or keywords"
            />
            <PrimaryButton>
                <Search size={20} />
            </PrimaryButton>
        </div>
    );
};
