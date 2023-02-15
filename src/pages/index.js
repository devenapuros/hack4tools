import { Hero } from "@/components/Hero";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";
import { getCategories, getToolById, getNewReleases } from "@/database/db";

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
        const categories = getCategories();
        const newReleases = getNewReleases();

        let importantTools = IMPORTANT_TOOLS.map((tool) => getToolById(tool));
        return { props: { categories, newReleases, importantTools } };
    } catch (error) {
        return { props: {} };
    }
}
