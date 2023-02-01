import { Hero } from "@/components/Hero";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";

export default function Home({ categories, newReleases }) {
    return (
        <>
            <Topbar />
            <Hero />
            <RecentlyAdded newReleases={newReleases} />
            <Categories categories={categories} />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    try {
        const response1 = await fetch("http://localhost:3000/api/categories");
        const categories = await response1.json();

        const response2 = await fetch("http://localhost:3000/api/new-releases");
        const newReleases = await response2.json();
        return { props: { categories, newReleases } };
    } catch (error) {
        return { props: {} };
    }
}
