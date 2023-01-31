import { ExternalLink } from "@/components/ExternalLink";
import { ColorBox } from "@/components/colorBox";
import { Footer } from "@/components/footer";
import { PrimaryButton } from "@/components/primaryButton";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/toolPage.module.css";

export default function About() {
    return (
        <>
            <Topbar />
            <Section className={styles.section}>
                <ColorBox />
                <div>
                    <h1>Awesome tool</h1>
                    <small className="text-muted">
                        by{" "}
                        <ExternalLink className={styles.autor}>
                            Devenapuros
                        </ExternalLink>
                    </small>
                </div>
                <div className={styles.row}>
                    <PrimaryButton>Github</PrimaryButton>
                    <PrimaryButton>Website</PrimaryButton>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, in eaque blanditiis tempore officiis, labore nihil
                    placeat adipisci voluptatibus veniam dolorem? Labore, at
                    explicabo. Vero magni porro ad eaque quos!
                </p>
                <h2>Categories</h2>
                <ul className={styles.row}>
                    <li className={styles.category}>Osint</li>
                    <li className={styles.category}>Backdoors</li>
                </ul>
            </Section>
            <Footer />
        </>
    );
}
