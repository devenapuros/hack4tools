import { Hero } from "@/components/Hero";
import { RecentlyAdded } from "@/components/recentlyAdded";
import { Topbar } from "@/components/topbar";

export default function Home() {
    return (
        <>
            <Topbar />
            <Hero />
            <RecentlyAdded />
        </>
    );
}
