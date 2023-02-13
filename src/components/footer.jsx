import styles from "@/styles/footer.module.css";
import { Logo } from "./logo";
import { MenuLink } from "./menuLink";
import { ExternalLink } from "./ExternalLink";
import { Github } from "@/icons/github";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerSection}>
                <Logo />
                <p className={`text-muted ${styles.slogan}`}>
                    Awesome hacking and cybersecurity tools
                </p>
            </section>
            <section className={styles.footerSection}>
                <ul className={styles.footerLinks}>
                    <MenuLink href="/">Home</MenuLink>
                    <MenuLink href="/tools">All tools</MenuLink>
                    <MenuLink href="/about">About</MenuLink>
                    <MenuLink href="/contribute">Contribute</MenuLink>
                    <ExternalLink href="https://github.com/devenapuros/hack4tools">
                        <Github size={21} />
                    </ExternalLink>
                </ul>
            </section>
        </footer>
    );
};
