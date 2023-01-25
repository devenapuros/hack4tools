import Head from "next/head";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Hack4tools - Hacking and cybersecurity tools</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
