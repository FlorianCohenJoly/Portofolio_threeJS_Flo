import {
    site,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: html
    },
    {
        title: "React  Developer",
        icon: reactjs,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Git Developer",
        icon: git,
    },
    {
        title: "Three JS Developer",
        icon: threejs,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },

];

const experiences = [
    {
        title: "System and Network technician",
        company_name: "Mairie du Plessis-Bouchard, 95",
        icon: web,
        iconBg: "#E6DEDD",
        date: "february 2024 - May 2024",
        points: [
            "Monitoring the computer network of all town hall facilities ",
            "Troubleshooting in the form of a ticket whenever an agent has a technical problem",

        ],
    },
    {
        title: "Flutter / FlutterFlow Developer in internship",
        company_name: "Buddy, 78",
        icon: mobile,
        iconBg: "#E6DEDD",
        date: "December 2022 - March 2023",
        points: [
            "Development of a mobile application for a start-up called Buddy. ",
            "The language of this project was Flutter.",
            "I also saw FlutterFlow which is a low-code tool to develop a mobile application.",
            "Apart from the code, I learned a lot about the Start-Up world",
        ],
    },

    {
        title: "FullStack Developer in internship",
        company_name: "Mairie du Plessis-Bouchard, 95",
        icon: web,
        iconBg: "#E6DEDD",
        date: "April 2022 - June 2022",
        points: [
            "Development of an intranet site in Html/Css at first then we had to switch to WorPress for back-end problemse",
            "I was under the direction of the head of the IT department and with the collaboration of the director of communications and the general manager.",

        ],
    },
    {
        title: "Postman",
        company_name: "La Poste, 95",
        icon: creator,
        iconBg: "#E6DEDD",
        date: "January 2019 - September 2021",
        points: [
            "Autonomous delivery of mail and parcels ",
            "This job has taught me to work independently, to have good interpersonal skills, and to know how to manage real human problems.",
            "I also learned to be patient and to be able to adapt to the situation.",

        ],
    },


];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Flo Portfolio",
        description:
            "Portfolio website for me. Built with React.js and Tailwind CSS and ThreeJs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: site,
        source_code_link: "https://github.com/FlorianCohenJoly/Portofolio_threeJS_Flo",
    },
    // {
    //     name: "Job IT",
    //     description:
    //         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { services, technologies, experiences, testimonials, projects };