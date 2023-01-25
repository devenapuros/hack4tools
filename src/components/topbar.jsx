import React from "react";
import styles from "@/styles/topbar.module.css";
import { Logo } from "./logo";

export const Topbar = () => {
    return (
        <nav className={styles.topbar}>
            <Logo />
            <div>
                <a>All tools</a>
                <a>About</a>
            </div>
        </nav>
    );
};
