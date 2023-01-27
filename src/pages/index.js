import { Hero } from "@/components/Hero";
import { Categories } from "@/components/categories";
import { Footer } from "@/components/footer";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <Hero />
            <RecentlyAdded />
            <Categories />
            <Footer />
        </>
    );
}
