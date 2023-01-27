import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";

export default function About() {
    return (
        <>
            <Topbar />
            <Section>
                <h1>Awesome tool</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, in eaque blanditiis tempore officiis, labore nihil
                    placeat adipisci voluptatibus veniam dolorem? Labore, at
                    explicabo. Vero magni porro ad eaque quos!
                </p>
            </Section>
            <Footer />
        </>
    );
}
