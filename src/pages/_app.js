import Head from "next/head";
import "@/styles/global.css";
import { NprogressProvider } from "@/context/nprogressContext";

export default function App({ Component, pageProps }) {
    return (
        <NprogressProvider>
            <Head>
                <title>Hack4tools - Hacking and cybersecurity tools</title>
            </Head>
            <Component {...pageProps} />
        </NprogressProvider>
    );
}
