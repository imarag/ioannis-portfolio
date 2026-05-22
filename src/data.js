import SeismoExplorer from "./assets/seismo-explorer.png"
import HazardWatch from "./assets/hazard-watch.png"
import GeoJSONValidator from "./assets/hazard-watch.png"

export const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
]

export const socials = {
    github: {
        href: "https://github.com/imarag",
        label: "GitHub",
        icon: "mdi:github",
    },
    linkedin: {
        href: "https://www.linkedin.com/in/ioannis-maragkakis-1ba2851a9/",
        label: "LinkedIn",
        icon: "mdi:linkedin",
    },
    email: {
        href: "mailto:giannis.marar@hotmail.com",
        label: "Email",
        icon: "ic:baseline-email",
    },
}

export const techStackIcons = [
    { name: "React", icon: "simple-icons:react" },
    { name: "FastAPI", icon: "simple-icons:fastapi" },
    { name: "Express.js", icon: "simple-icons:express" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
]

export const experience = [
    {
        role: "Software Developer / Data Scientist",
        company: "VODA.ai",
        location: "Boston, United States (Remote)",
        period: "Jun 2025 — Present",
        bullets: [
            "Built a data retrieval system integrating with NASA's CMR API to query and ingest satellite datasets.",
            "Set up CI/CD pipelines using GitHub Actions with automated linting (Ruff) and test execution.",
            "Implemented unit and integration tests across application and data pipelines, reducing deployment risk and improving production reliability.",
        ],
    },
    {
        role: "Backend Developer / Python Developer",
        company: "emendSys",
        location: "Thessaloniki, Greece",
        period: "Oct 2024 — Mar 2025",
        bullets: [
            "Designed and implemented RESTful APIs using FastAPI with asynchronous request handling.",
            "Developed and deployed event-driven serverless services on Azure Functions for asynchronous data processing.",
            "Architected type-safe backend pipelines using dataclasses, enums, and Pydantic to enforce strict data validation.",
            "Implemented centralized logging and error handling to improve debugging and system reliability.",
        ],
    },
    {
        role: "Data Scientist",
        company: "Accenture",
        location: "Thessaloniki, Greece",
        period: "Jul 2022 — Jul 2024",
        bullets: [
            "Designed and implemented ETL pipelines for large-scale data processing workflows.",
            "Optimized SQL-based data transformations and automated recurring workflows to reduce manual overhead.",
            "Built analytical tools leveraging satellite datasets for environmental monitoring.",
            "Developed an internal web platform using React and Tailwind CSS for visualizing GeoTIFF and GeoJSON data on interactive Leaflet maps.",
        ],
    },
    {
        role: "Applied Geophysicist / Data Scientist",
        company: "Institute of Engineering Seismology & Earthquake Engineering",
        location: "Thessaloniki, Greece",
        period: "Apr 2021 — Jun 2022",
        bullets: [
            "Built Python scripts for parsing and processing seismic record files.",
            "Designed and developed a GUI application for interactive body wave arrival selection.",
            "Aggregated and structured multi-source station data to generate a comprehensive earthquake catalogue.",
        ],
    },
]

export const education = [
    {
        degree: "MSc — Environmental and Applied Geology",
        school: "Aristotle University of Thessaloniki",
        period: "2019 — 2022",
    },
    {
        degree: "BSc / MSc — Mineral Resources Engineering",
        school: "Technical University of Crete",
        period: "2013 — 2018",
    },
]

export const skills = {
    Frontend: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Leaflet"],
    Backend: ["Node.js", "Express", "FastAPI", "JWT"],
    Databases: ["MongoDB (Mongoose)", "SQL"],
    "Tools & DevOps": ["Docker", "GitHub Actions (CI/CD)", "Azure Functions"],
    Other: ["Python", "JavaScript", "Bash", "Git/GitHub"],
}

export const languages = ["English", "French", "Spanish", "Greek (native)"]

export const intro = [
    "Hi, I'm Ioannis Maragkakis — a full-stack developer based in Thessaloniki, Greece, with over 3 years of experience building web applications and data-driven systems.",
    "My background is in geophysics and data science. I worked with satellite imagery, seismic data, and large-scale ETL pipelines, and along the way I realized what I enjoyed most was building the tools themselves — the interfaces, the APIs, the systems that turn raw data into something people can actually use. That pulled me into full-stack development, where I now work across the stack with React, Node.js, TypeScript, and Python.",
    "I care about clean, type-safe code, thoughtful UX, and shipping things that work reliably in production. Outside of work, I'm usually building side projects — lately around interactive maps and educational web tools.",
]

export const certifications = [
    {
        title: "Full Stack Open (6 ECTS) — University of Helsinki",
        grade: "Grade: 5/5",
        bullets: [
            "Built full-stack applications using React, Redux, Node.js, and MongoDB.",
            "Developed REST APIs with Express and implemented authentication.",
            "Applied testing practices (Jest, Cypress) and CI/CD pipelines.",
            "Designed and deployed production-ready web applications.",
        ],
    },
]

export const achievements = [
    {
        title: "Award of Academic Excellence",
        issuer: "Limmat Stiftung",
    },
]

export const projectsDetailed = [
    {
        title: "Hazard-Watch",
        subtitle: "Web application for hazard reporting on an interactive map",
        description:
            "A full-stack web app where users can report hazards (earthquakes, fires, etc.) and view them on a live map. Includes authentication and infinite scrolling for the report feed. Built end-to-end as a study of production-grade patterns — JWT auth, protected routes, optimistic UI, and proper error boundaries.",
        image: HazardWatch,
        alt: "Hazard-Watch map view with reported incidents",
        period: "2026",
        role: "Solo developer",
        status: "Live",
        highlights: [
            "JWT-based authentication with refresh/access-token flow",
            "Infinite scrolling feed of reports backed by paginated MongoDB queries",
            "Interactive Leaflet map with clustering for dense areas",
            "User login/register forms with client and server-side validation",
            "React Query for data fetching, caching, and optimistic UI updates",
            "Zustand for global state management of auth and UI state",
        ],
        technologies: {
            Frontend: [
                "React",
                "TypeScript",
                "Material UI",
                "Leaflet",
                "Zustand",
            ],
            Backend: ["Node.js", "Express", "JWT"],
            Database: ["MongoDB (Mongoose)"],
        },
        links: {
            live: "https://hazard-watch.onrender.com/",
            github: "https://github.com/imarag/hazard-watch",
        },
    },
    {
        title: "GeoJSON Validator",
        subtitle: "Web tool for validating and debugging GeoJSON files",
        description:
            "A focused utility that takes GeoJSON uploads and surfaces structural issues — invalid geometry types, missing required fields, malformed coordinates, and spec violations. Errors are listed with line references and shown visually on a map where possible. Built after repeatedly running into the same validation problems while working with geospatial data.",
        image: GeoJSONValidator,
        alt: "GeoJSON Validator showing error highlights",
        period: "2024",
        role: "Solo developer",
        status: "Live",
        highlights: [
            "Server-side validation via FastAPI orchestration",
            "Client-side checks for immediate feedback on common issues",
            "Detailed server-side error messages with line numbers and descriptions",
            "GeoJSON validation according to the official specification, including geometry and feature collection rules",
        ],
        technologies: {
            Frontend: ["React", "Tailwind CSS"],
            Backend: ["FastAPI", "Python"],
        },
        links: {
            live: "",
            github: "https://github.com/imarag/geo-hazards/tree/production/geo-server",
        },
    },
    {
        title: "A Journey Into Seismology",
        subtitle:
            "Educational platform with articles and interactive visualizations",
        description:
            "An educational site that walks readers through seismology fundamentals using articles paired with interactive demos — wave propagation animations, frequency-domain explorers, and arrival-time pickers. Built with Astro for fast content delivery and React islands for the interactive components.",
        image: SeismoExplorer,
        alt: "A Journey Into Seismology article page",
        period: "2023 — 2024",
        role: "Solo developer",
        status: "Live",
        highlights: [
            "Seismic articles created with Astro's Markdown support for fast static content",
            "React islands for interactive seismic visualizations",
            "Interactive tools for exploring seismic waveforms and arrival times",
            "FastAPI backend serving processed seismic datasets",
        ],
        technologies: {
            Frontend: ["Astro", "React", "Tailwind CSS"],
            Backend: ["FastAPI", "Python"],
        },
        links: {
            live: "https://seismoexplorer.com/",
            github: "https://github.com/imarag/seismo-website",
        },
    },
]
