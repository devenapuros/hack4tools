import { Hero } from "@/components/Hero";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";

export default function Home({ categories, newReleases, importantTools }) {
    return (
        <>
            <Topbar />
            <Hero importantTools={importantTools} />
            <RecentlyAdded newReleases={newReleases} />
            <Categories categories={categories} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const IMPORTANT_TOOLS = ["villian", "smap", "mosint"];
    try {
        const response1 = await fetch(`${process.env.API_URL}/api/categories`);
        const categories = await response1.json();

        const response2 = await fetch(
            `${process.env.API_URL}/api/new-releases`
        );
        const newReleases = await response2.json();

        let importantTools = await Promise.all(
            IMPORTANT_TOOLS.map((tool) =>
                fetch(`${process.env.API_URL}/api/tool/${tool}`).then(
                    (response) => response.json()
                )
            )
        );
        return { props: { categories, newReleases, importantTools } };
    } catch (error) {
        return { props: {} };
    }
}
