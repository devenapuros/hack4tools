import "@/styles/global.css";
import { NprogressProvider } from "@/context/nprogressContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <NprogressProvider>
            <Head>
                <meta
                    name="description"
                    content="The best cybersecurity and hacking tools used by pentesters around the world."
                />
                <meta
                    name="keywords"
                    content="hacking,cybersecurity,tools,s4vitar,s4vitaar,hack4u,hack4tools,omar,Omar"
                />
                <meta name="author" content="Devenapuros" />

                <meta
                    name="og:title"
                    content="Hack4tools - Hacking and cybersecurity tools"
                />
                <meta name="og:image" content="/board.png" />
                <meta name="og:url" content="https://hack4tools.vercel.app" />
                <meta
                    name="og:description"
                    content="The best cybersecurity and hacking tools used by pentesters around the world."
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="color-scheme" content="dark light"></meta>
                <title>Hack4tools - Hacking and cybersecurity tools</title>
            </Head>
            <Component {...pageProps} />
        </NprogressProvider>
    );
}
