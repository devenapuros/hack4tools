import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { Topbar } from "@/components/topbar";

export default function About() {
    return (
        <>
            <Topbar />
            <Section>
                <div>
                    <h1>About</h1>
                    <p>
                        This project was created to collect and share hacking
                        and cybersecurity tools with the S4vitar community.
                    </p>
                    <p>
                        It is developed with Next.js and deployed on Vercel
                        services.
                    </p>
                    <strong>
                        Resources to learn hacking and cybersecurity:
                    </strong>
                    <ul>
                        <li>
                            S4vitar&apos;s twitch channel:{" "}
                            <a
                                href="https://twitch.tv/s4vitaar"
                                target="_blank"
                                rel="noreferrer"
                            >
                                twitch.tv/s4vitaar
                            </a>
                        </li>
                        <li>
                            Hack4u Academy:{" "}
                            <a href="https//hack4u.io">hack4u.io</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contributors</h3>
                </div>
            </Section>
            <Footer />
        </>
    );
}
