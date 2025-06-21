import { meta, shopify, starbucks, tesla, aaa, R, textron,codepath,girlswhocode, UB} from "../../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    azure,
    db,
    apache,
    dbeaver,
    c,
    py,
    mss

} from "../../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
        {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    },
    {
        imageUrl: db,
        name: "Databricks",
        type: "Data",
    },
    {
        imageUrl: dbeaver,
        name: "DBeaver",
        type: "Data",
    },
    {

        imageUrl: apache,
        name: "Apache Spark",
        type: "Data"

    },
    {

        imageUrl: c,
        name: "C++",
        type: "Language"

    }
    ,
    {

        imageUrl: py,
        name: "Python",
        type: "Language"

    },
    {

        imageUrl: mss,
        name: "Microsoft Sql Sever",
        type: "Data"

    }
];
export const experiences = [
    {
        title: "IT Leadership Development Program Intern",
        company_name: "Textron Inc",
        icon: textron,
        iconBg: "#f8f8ff",
        date: "June 2025 - Present",
        points: [
            "Executed enterprise-scale migration from Azure Synapse Analytics to Databricks, transitioning from traditional MPP data warehouse to unified lakehouse architecture for enhanced data science and ML capabilities",
        "Implemented data governance protocols and security measures during the migration, ensuring 100% compliance with enterprise standards while maintaining zero data loss throughout the transition",  ]
    },
    {
        title: "Technical Interview Prep 102 - Tech Fellow",
        company_name: "CodePath",
        icon: codepath,
        iconBg: "#f8f8ff",
        date: "Jan 2025 - Present",
        points: [
            "Taught data structures and algorithms to 20-30 underrepresented students across 5 cohorts, achieving 85% average improvement on technical assessments",
            "Collaborated with leadership to refine course structure, impacting 900+ summer 2025 cohort students"
        ]
    },
    {
        company_name: "Michigan State University - Broadening Participation",
        icon: girlswhocode,
        iconBg: "#f8f8ff",
        date: "Sep 2023 - Present", // Overall date range for the company
        roles: [
            {
                title: "Admin",
                date: "Jan 2025 - Present",
                points: [
    ,
                    " Coordinated with curriculum lead to develop learning plans that enabled all students to successfully complete their final tech projects",
                    " Monitored student progress and identified at-risk learners, implementing targeted intervention strategies",
                ]
            },
            {
                title: "Cohort Lead",
                date: "Sep 2024 - Dec 2024",
                points: [
                    "Led K-12 outreach initiatives impacting over 20 students, including Technovation and Girls Who Code, targeting middle and high school students in historically underrepresented communities to foster interest in STEM fields.",

                ]
            },
            
            
            {
                title: "Mentor",
                date: "Sep 2023 - Sep 2024",
                points: [
                    " Instructed students in coding languages such as Python, HTML, CSS, JavaScript resulting in increased interest in engineering careers among participants",
                    "Guided 45 students through programming fundamentals and career development across Technovation (15 students) and Ghana international programs (30 students)",
                ]
            }
        ]
    },

    {
        title: "Peer Mentor",
        company_name: "Trio SSS",
        icon: R,
        iconBg: "#f8f8ff",
        date: "June 2023 - Present",
        points: [
            " Provided personal and academic support to 12 diverse college students, achieving 95% positive academic standing and 92% retention rate",  
            " Conducted bi-weekly meetings, both in-person and via Zoom, to track and assess students’ academic progress, with a focus on achieving a 95% positive academic standing and a 92% retention",
        ]
    },
    {
        company_name: "AAA Life Insurance",
        icon: aaa,
        iconBg: "#f8f8ff",
        date: "May 2024 - Aug 2024", // Overall date range for the company
        roles: [
            {
                title: "Automation Software Engineer",
                date: "July 2024 - Aug 2024",
                points: [
                    " Engineered Python script with REST APIs to extract UiPath Orchestrator data, reducing collection time by 75% while processing 200+ daily records",
                    " Built PowerBI dashboard providing real-time insights for executives, eliminating 85% of manual processing and saving 20 hours weekly",
                    " Integrated and managed processed data in DBeaver using SQL, ensuring seamless data management and accessibility.",
                ]
            },
            {
                title: "Project Manager (Salesforce Team):",
                date: "May 2024 - June 2024",
                points: [
                    " Managed project timelines, coordinated team efforts, and led stand-ups, contributing to the successful delivery of key projects.",
                    " Led daily stand-ups, sprint planning, and retrospectives resulting in reduced call selector slowness by 75% on the Salesforce platform and boosted task completion rates through agile process improvements"
                ]
            },
        ]
    },
    {
        company_name: "Michigan State University - Upward Bound",
        icon: UB,
        iconBg: "#f8f8ff",
        date: "June 2022 - Aug 2024", // Overall date range for the company
        roles: [
            {
                title: "Assistant Program Director",
                date: "June 2023 - Aug 2024",
                points: [
                    " Managed scheduling, budgeting, and records to maintain 70% student participation in weekly academic sessions",
                    " Led cross-functional team of 8 staff members through mentoring and evaluations to improve teaching effectiveness",
                    " Directed college prep initiatives for underrepresented students through academic enrichment and admissions counseling",
                ]
            },
            {
                title: "Teaching Assistant",
                date: "June 2022 - June 2023",
                points: [
                    " Mentored 40+ students across Math, Science, English, and History, achieving 83% college admission rate among seniors",
                    " Collaborated with instructors on classroom instruction and curriculum development to deliver high-quality education and mentorship to students"

                ]
            },
        ]
    },
    
];