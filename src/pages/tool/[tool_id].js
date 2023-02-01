import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/footer";
import { ImageBox } from "@/components/imageBox";
import { PrimaryButton } from "@/components/primaryButton";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";
import { Github } from "@/icons/github";
import { Globe } from "@/icons/globe";
import styles from "@/styles/toolPage.module.css";
import buttonStyle from "@/styles/primaryButton.module.css";

export default function About() {
    return (
        <>
            <Topbar />
            <Section className={styles.section}>
                <ImageBox size={96} />
                <div>
                    <h1>Awesome tool</h1>
                    <small className="text-muted">
                        by{" "}
                        <ExternalLink
                            className={styles.autor}
                            href="https://github.com/devenapuros"
                        >
                            Devenapuros
                        </ExternalLink>
                    </small>
                </div>
                <div className={styles.row}>
                    <a className={buttonStyle.button}>
                        <Github size={20} />
                        Github
                    </a>
                    {/* <a className={buttonStyle.button}>
                        <Globe size={20} />
                        Website
                    </a> */}
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
