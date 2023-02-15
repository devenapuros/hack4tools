import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/footer";
import { ImageBox } from "@/components/imageBox";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";
import { Github } from "@/icons/github";
import { Globe } from "@/icons/globe";
import styles from "@/styles/toolPage.module.css";
import buttonStyle from "@/styles/primaryButton.module.css";
import { getTools, getToolById } from "@/database/db";

export default function About({ tool }) {
    return (
        <>
            <Topbar />
            <Section className={styles.section}>
                <ImageBox
                    src={tool.logo}
                    size={96}
                    color={tool.color}
                    alt={tool.name}
                    corner={16}
                />
                <div>
                    <h1>{tool.name}</h1>
                    <small className="text-muted">
                        by{" "}
                        <ExternalLink
                            className={styles.autor}
                            href={tool.autorWebsite}
                        >
                            {tool.autor}
                        </ExternalLink>
                    </small>
                </div>
                <div className={styles.row}>
                    {tool.repo && (
                        <a
                            className={buttonStyle.button}
                            href={tool.repo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github size={20} />
                            Github
                        </a>
                    )}
                    {tool.website && (
                        <a className={buttonStyle.button} href={tool.website}>
                            <Globe size={20} />
                            Website
                        </a>
                    )}
                </div>
                <p>{tool.description}</p>
                <h2>Categories</h2>
                <ul className={styles.row}>
                    {tool.categories &&
                        tool.categories.length > 0 &&
                        tool.categories.map((category) => (
                            <li key={category} className={styles.category}>
                                {category}
                            </li>
                        ))}
                </ul>
            </Section>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const tools = getTools();
    const paths = tools.map((tool) => ({ params: { id: tool.id } }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({ params }) => {
    try {
        const tool = getToolById(params?.id);
        return { props: { tool } };
    } catch (error) {
        return { props: {} };
    }
};
