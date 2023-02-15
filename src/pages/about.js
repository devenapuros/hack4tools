import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";
import styles from "@/styles/about.module.css";
import Link from "next/link";

export default function About({ contributors }) {
    return (
        <>
            <Topbar />
            <Section>
                <article className={styles.aboutSection}>
                    <h1>About</h1>
                    <p>
                        This project was created to collect and share hacking
                        and cybersecurity tools with the{" "}
                        <strong>S4vitar</strong> community.
                        <br /> It is developed with Next.js, styled with CSS
                        Modules and deployed on Vercel services.
                    </p>
                    <p>
                        If you want to contribute to this project, please review
                        the{" "}
                        <Link href="/contribute" className={styles.link}>
                            Contribute
                        </Link>{" "}
                        section.
                    </p>
                    <h2>Resources to learn hacking and cybersecurity:</h2>
                    <ul>
                        <li>
                            S4vitar&apos;s twitch channel:{" "}
                            <a
                                className={styles.link}
                                href="https://twitch.tv/s4vitaar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                twitch.tv/s4vitaar
                            </a>
                        </li>
                        <li>
                            Hack4u Academy:{" "}
                            <a
                                className={styles.link}
                                href="https://hack4u.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                hack4u.io
                            </a>
                        </li>
                    </ul>
                </article>
                <article className={styles.aboutSection}>
                    <h2>Contributors</h2>
                    <ul className={styles.contributors}>
                        {contributors &&
                            contributors.length > 0 &&
                            contributors.map((item) => (
                                <li key={item.login}>
                                    <a
                                        href={item.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <figure>
                                            <img
                                                src={item.avatar_url}
                                                alt={item.login}
                                            />
                                            <figcaption>
                                                {item.login}
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                            ))}
                    </ul>
                </article>
            </Section>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    try {
        const response = await fetch(
            "https://api.github.com/repos/devenapuros/hack4tools/contributors"
        );
        const contributors = await response.json();
        return { props: { contributors } };
    } catch (error) {
        return { props: { contributors: [] } };
    }
}
