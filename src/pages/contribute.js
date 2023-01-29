import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/contribute.module.css";

export default function Contribute() {
    return (
        <>
            <Topbar />
            <Section className={styles.contributeSection}>
                <h1>Contribute</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, in eaque blanditiis tempore officiis, labore nihil
                    placeat adipisci voluptatibus veniam dolorem? Labore, at
                    explicabo. Vero magni porro ad eaque quos!
                </p>
                <h2>Add a new tool</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                    delectus reprehenderit iure corporis quas animi suscipit
                    obcaecati quisquam soluta debitis natus facilis praesentium
                    eaque alias iusto tempora sed nemo. Rem.
                </p>
                <h2>Report bugs</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, dolorem unde. Neque, odit perferendis commodi
                    eligendi, iusto ipsum autem reprehenderit eos officiis
                    corporis, ex saepe porro quo molestiae ratione in!
                </p>
                <h2>Develop a new feature</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, esse et? Quo aut repellendus soluta corporis ipsum
                    eum, harum quas temporibus sint voluptatem, debitis
                    reprehenderit omnis culpa ipsam eaque perferendis!
                </p>
            </Section>
            <Footer />
        </>
    );
}
