import { Search } from "@/icons/search";
import styles from "@/styles/searchInput.module.css";
import { PrimaryButton } from "./primaryButton";
import { Close } from "@/icons/Close";

export const SearchInput = ({
    className = "",
    name,
    value,
    handleChange,
    handleBlur,
    placeholder,
}) => {
    return (
        <div className={`${className} ${styles.container}`}>
            <input
                className={styles.input}
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
            {value && (
                <>
                    <button className={styles.reset} type="reset">
                        <Close size={18} />
                    </button>
                    <span className={styles.divider}></span>
                </>
            )}
            <PrimaryButton type="submit">
                <Search size={20} />
            </PrimaryButton>
        </div>
    );
};
