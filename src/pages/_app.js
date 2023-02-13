import "@/styles/global.css";
import { NprogressProvider } from "@/context/nprogressContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <NprogressProvider>
            <Head>
                <meta
                    name="description"
                    content="Awesome hacking and cybersecurity tools"
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
