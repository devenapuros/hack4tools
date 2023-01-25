import styles from "@/styles/menu.module.css";
import { MenuLink } from "./menuLink";
import { ExternalLink } from "./ExternalLink";

export const Menu = () => {
    return (
        <ul className={styles.ul}>
            <MenuLink href="/tools">All tools</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <ExternalLink href="https://github.com/devenapuros/hack4tools">
                Github
            </ExternalLink>
        </ul>
    );
};
