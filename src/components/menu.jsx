import styles from "@/styles/menu.module.css";
import { MenuLink } from "./menuLink";
import { ExternalLink } from "./ExternalLink";
import { Github } from "@/icons/github";

export const Menu = () => {
    return (
        <ul className={styles.ul}>
            <MenuLink href="/tools">All tools</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/about">Contribute</MenuLink>
            <ExternalLink href="https://github.com/devenapuros/hack4tools">
                <Github size={20} />
            </ExternalLink>
        </ul>
    );
};
