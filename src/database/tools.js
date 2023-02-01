import { categories } from "./categories";
export const tools = [
    {
        id: "villian",
        name: "Villian",
        newRelease: true,
        autor: "t3l3machus",
        autorWebsite: "https://github.com/t3l3machus",
        repo: "https://github.com/t3l3machus/Villain",
        website: "",
        logo: "",
        color: "black",
        description:
            "Windows & Linux backdoor generator and multi-session handler that allows users to connect with sibling servers (other machines running Villain) and share their backdoor sessions, handy for working as a team.",
        slogan: "",
        categories: [categories.BACKDOORS, categories.PWNERS],
    },
    {
        id: "waymore",
        name: "Waymore",
        newRelease: true,
        autor: "xnl-h4ck3r",
        autorWebsite: "https://github.com/xnl-h4ck3r",
        repo: "https://github.com/xnl-h4ck3r/waymore",
        website: "",
        logo: "",
        color: "#d62828",
        description:
            "The idea behind waymore is to find even more links from the Wayback Machine than other existing tools.\nThe biggest difference between waymore and other tools is that it can also download the archived responses for URLs on wayback machine so that you can then search these for even more links, developer comments, extra parameters, etc. etc.",
        slogan: "Find way more from the Wayback Machine!",
        categories: [categories.OSINT],
    },
];
