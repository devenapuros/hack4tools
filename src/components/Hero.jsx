import styles from "@/styles/hero.module.css";
import { SearchInput } from "@/components/searchInput";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/router";
import { Carousel } from "./Carousel";

const initialForm = { search: "" };

export const Hero = ({ importantTools }) => {
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
            <Carousel totalSlides={3} tools={importantTools} />
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
