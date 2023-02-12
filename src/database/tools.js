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
    {
        id: "cervantes",
        name: "Cervantes",
        newRelease: false,
        autor: "CervantesSec",
        autorWebsite: "https://github.com/CervantesSec",
        repo: "https://github.com/CervantesSec/cervantes",
        website: "https://www.cervantessec.org/",
        logo: "",
        color: "#023047",
        description:
            "Open source collaborative platform for pentesters or red teams who want to save time to manage their projects, clients, vulnerabilities and reports in one place.",
        slogan: "Open source collaborative platform for pentesters.",
        categories: [categories.OTHER],
    },
    {
        id: "mosint",
        name: "Mosint",
        newRelease: false,
        autor: "alpkeskin",
        autorWebsite: "https://github.com/alpkeskin",
        repo: "https://github.com/alpkeskin/mosint",
        website: "",
        logo: "",
        color: "black",
        description:
            "MOSINT is a fastest OSINT Tool for emails. It helps you gather information about the target email. Features: email validation, check social accounts, Check data breaches and password leaks, Find related emails and domains, Scan Pastebin Dumps, Google Search, DNS/IP Lookup",
        slogan: "An automated e-mail OSINT tool",
        categories: [categories.OSINT],
    },
    {
        id: "smap",
        name: "Smap",
        newRelease: false,
        autor: "s0md3v",
        autorWebsite: "https://github.com/s0md3v",
        repo: "https://github.com/s0md3v/Smap",
        website: "",
        logo: "",
        color: "#780116",
        description:
            "Smap is a port scanner built with shodan.io's free API. It takes same command line arguments as Nmap and produces the same output which makes it a drop-in replacament for Nmap.",
        slogan: "passive Nmap like scanner built with shodan.io.",
        categories: [categories.SCANNERS, categories.ENUMERATION],
    },
    {
        id: "lfienum",
        name: "Lfienum",
        newRelease: false,
        autor: "0bfxgh0st",
        autorWebsite: "https://github.com/0bfxgh0st",
        repo: "https://github.com/0bfxgh0st/lfienum",
        website: "",
        logo: "",
        color: "#80a1d4",
        description:
            "Local File Inclusion Enumeration (PoC). Almost whole system enumeration when target is vulnerable to LFI.",
        slogan: "Local File Inclusion Enumeration (PoC)",
        categories: [categories.SCANNERS, categories.ENUMERATION],
    },
];
