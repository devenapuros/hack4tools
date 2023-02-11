import styles from "@/styles/hero.module.css";
import { SearchInput } from "@/components/searchInput";
import { ImageBox } from "./imageBox";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/router";

const initialForm = { search: "" };

export const Hero = ({ importantTool }) => {
    const form = useForm(initialForm);
    const router = useRouter();

    const handleInputChange = (event) => {
        form.setField(event.target.name, event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.fields.search) {
            router.push(`/tools?search=${form.fields.search}`);
        }
    };

    const handleReset = () => {
        form.reset();
    };

    return (
        <header className={styles.container}>
            {importantTool && (
                <>
                    <ImageBox
                        size={100}
                        color={importantTool.color}
                        alt={importantTool.name}
                        corner={18}
                    />
                    <div>
                        <h1>{importantTool.name}</h1>
                        <small>By {importantTool.autor}</small>
                    </div>
                    <p>{importantTool.slogan || importantTool.description}</p>
                </>
            )}
            <form
                className={styles.form}
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <SearchInput
                    name="search"
                    value={form.fields.search}
                    handleChange={handleInputChange}
                    placeholder="Search tools here by name, category or keywords"
                />
            </form>
        </header>
    );
};
