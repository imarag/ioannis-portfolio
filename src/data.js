import { Github, Linkedin, Mail } from "lucide-astro"

export const socials = [
    {
        href: "https://github.com/you",
        label: "GitHub",
        icon: Github,
    },
    {
        href: "https://linkedin.com/in/you",
        label: "LinkedIn",
        icon: Linkedin,
    },
    {
        href: "mailto:you@email.com",
        label: "Email",
        icon: Mail,
    },
]

export const projects = [
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        alt: "Seismic Watch",
        title: "Seismic Watch",
        description:
            "A website aggregating seismic articles and providing tools for earthquake monitoring and analysis.",
        demo: "https://your-demo-link.com",
        github: "https://github.com/you/seismic-watch",
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        alt: "GeoJSON Issue Tracker",
        title: "GeoJSON Issue Tracker",
        description:
            "Users upload GeoJSON objects and a FastAPI backend automatically parses them and generates structured issues.",
        demo: "https://your-demo-link.com",
        github: "https://github.com/you/geojson-issue-tracker",
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        alt: "Hazard Map",
        title: "Hazard Map",
        description:
            "Users report hazards by creating posts that are instantly visualized as markers on an interactive map.",
        demo: "https://your-demo-link.com",
        github: "https://github.com/you/hazard-map",
    },
]

export const techStackIcons = [
    { name: "React", icon: "simple-icons:react" },
    { name: "FastAPI", icon: "simple-icons:fastapi" },
    { name: "Express.js", icon: "simple-icons:express" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
]
