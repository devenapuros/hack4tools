import { Footer } from "@/components/footer";
import { PrimaryButton } from "@/components/primaryButton";
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
                    We are happy to receive your contributions to improve this
                    website or add more cybersecurity tools and share them with
                    the community. Before you start contributing please note the
                    following guidelines:
                </p>
                <h2>Report bugs or request a new feature</h2>
                <p>
                    If you want to report a bug, typo errors, wrong information
                    or even request a new feature you can do it in the{" "}
                    <a
                        href="https://github.com/devenapuros/hack4tools/issues"
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Issues
                    </a>{" "}
                    section of the repository of this project.
                </p>
                <p>
                    Try to be as detailed and concise as possible. If necessary,
                    include screenshots or videos to give more context to your
                    request.
                </p>
                <h2>Contribute with coding</h2>
                <p>
                    Great! We love to receive code contributions, but before you
                    start, you will need to install a couple of dependencies and
                    follow the steps below:
                </p>
                <h4>Dependencies</h4>
                <ul>
                    <li>
                        Node.js 18.13.0 (We recommend using{" "}
                        <a
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                            href=""
                        >
                            NVM
                        </a>{" "}
                        or{" "}
                        <a
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                            href=""
                        >
                            FNM
                        </a>
                        )
                    </li>
                    <li>Visual Studio Code Editor</li>
                    <li>
                        <a
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                            href=""
                        >
                            Eslint
                        </a>{" "}
                        VS Code Extension
                    </li>
                    <li>
                        <a
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                            href=""
                        >
                            Prettier
                        </a>{" "}
                        VS Code Extension
                    </li>
                    <li>Git 2.3 or latest</li>
                </ul>
                <h4>Steps to contribute with coding</h4>
                <ol>
                    <li>
                        Fork the{" "}
                        <a
                            className={styles.link}
                            target="_blank"
                            rel="noreferrer"
                            href=""
                        >
                            project repository
                        </a>
                    </li>
                    <li>
                        Make a <code className={styles.code}>git clone</code> of
                        the project
                    </li>
                    <li>
                        Install the project dependencies with{" "}
                        <code className={styles.code}>npm install</code>{" "}
                    </li>
                    <li>
                        Make your changes and upload them to the forked repo on
                        Github.
                    </li>
                    <li>
                        Open a Pull Request in the original repository. Include
                        a detailed description of the changes you have made. If
                        necessary, include screenshots or videos to give more
                        context to your changes.
                    </li>
                </ol>
            </Section>
            <Footer />
        </>
    );
}
