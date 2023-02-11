import { Hero } from "@/components/Hero";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";

export default function Home({ categories, newReleases, importantTool }) {
    return (
        <>
            <Topbar />
            <Hero importantTool={importantTool} />
            <RecentlyAdded newReleases={newReleases} />
            <Categories categories={categories} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const IMPORTANT_TOOL_ID = "villian";

    try {
        const response1 = await fetch("http://localhost:3000/api/categories");
        const categories = await response1.json();

        const response2 = await fetch("http://localhost:3000/api/new-releases");
        const newReleases = await response2.json();

        const response3 = await fetch(
            `http://localhost:3000/api/tool/${IMPORTANT_TOOL_ID}`
        );
        const importantTool = await response3.json();
        return { props: { categories, newReleases, importantTool } };
    } catch (error) {
        return { props: {} };
    }
}
