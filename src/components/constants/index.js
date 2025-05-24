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
    typescript
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
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
            "Coming Soon",  
            "Coming Soon",
            "Coming Soon"
        ]
    },
    {
        title: "Technical Interview Prep 101 - Tech Fellow",
        company_name: "CodePath",
        icon: codepath,
        iconBg: "#f8f8ff",
        date: "Jan 2025 - Present",
        points: [
            "Mentored over 500+ underrepresented students to ultimately expand their access to computer science education",  
            "Taught data structures, algorithms, and problem-solving techniques to 20-30 students across 5 cohorts, resulting in an 85% average improvement on technical assessments",
            "Collaborated with CodePath leadership to refine course structure, enhancing learning experience for the next cohort of 900+ students"
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
                    "Led K-12 outreach initiatives for over 20 students through Technovation and Girls Who Code programs, fostering STEM interest among historically underrepresented middle and high school students",
                    "Coordinated with curriculum lead to develop learning plans that enabled all students to successfully complete their final tech projects"
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
                    "Guided a cohort of 15 students through programming fundamentals and career development.",
                    "Instructed students in coding languages such as Python, HTML, CSS, JavaScript resulting in increased interest in engineering careers among participants.",
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
            "Mentored over 500+ underrepresented students to ultimately expand their access to computer science education",  
            "Managed and mentored 4-5 cohorts of 4-6 students each, providing guidance on fundamental data structures and algorithms concepts and problem-solving techniques.",
            "Collaborated with the course instructor to enhance the quality and interactivity of course materials, ensuring an engaging learning experience for participants."
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
                    "Engineered a data pipeline by developing a Python script to automate data extraction from UiPath Orchestrator via REST API calls, efficiently retrieving bucket data for various automations.",
                    "Integrated and managed processed data in DBeaver using SQL, ensuring seamless data management and accessibility.",
                    "Built a fully automated PowerBI dashboard, delivering real-time insights and reducing manual processing by 75%."
                ]
            },
            {
                title: "Project Manager (Salesforce Team):",
                date: "May 2024 - June 2024",
                points: [
                    "Managed project timelines, coordinated team efforts, and led stand-ups, contributing to the successful delivery of key projects.",
                    "Conducted retrospective meetings to evaluate project performance and implemented process improvements."

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
                    "Directed initiatives preparing underrepresented high school students for college through academic enrichment, admissions counseling, and financial aid workshops, enhancing college readiness.",
                    "Managed administrative tasks, such as scheduling, budgeting, and record keeping, to ensure efficient program operation and maintain a 70% student participation in weekly academic sessions."
                ]
            },
            {
                title: "Teaching Assistant",
                date: "June 2022 - June 2023",
                points: [
                    "Provided academic support to students in various subjects, including math, science, English, and history.",
                    "Assisted instructors with classroom instruction and curriculum development, helping to ensure that students were receiving high-quality education and mentorship."

                ]
            },
        ]
    },
    
];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];