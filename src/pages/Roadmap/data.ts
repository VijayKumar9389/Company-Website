import React from "react";
import {FaCloudUploadAlt, FaCode, FaListUl, FaPencilAlt} from "react-icons/fa";
import {FaLifeRing} from "react-icons/fa6";

export type Competency = {
    title: string;
    description: string;
    icon: React.ElementType; // Updated this line
};

export const competenciesData: Competency[] = [
    {
        title: "Plan",
        description:
            "I evaluate your business operations to identify inefficiencies and opportunities for growth. My recommendations focus on streamlining workflows, enhancing productivity, and saving resources. With a customized technology roadmap and transparent communication, I guide you toward achieving operational excellence.",
        icon: FaListUl,
    },
    {
        title: "Design",
        description:
            "I design user-friendly interfaces that prioritize accessibility and simplicity. My responsive designs ensure seamless functionality across all devices. By translating your processes into accurate data models and automating repetitive tasks, I help you optimize efficiency and usability.",
        icon: FaPencilAlt,
    },
    {
        title: "Develop",
        description:
            "I develop secure and scalable servers tailored to manage your data effectively. Leveraging tools like React and Node.js, I deliver robust applications with the latest security protocols, thorough validation, and reliable performance for smooth operations.",
        icon: FaCode,
    },
    {
        title: "Release",
        description:
            "My continuous integration practices enable seamless updates and feature additions. With scalable cloud hosting and storage solutions, I ensure your system remains reliable and future-ready. Ongoing support minimizes downtime and ensures peak performance.",
        icon: FaCloudUploadAlt,
    },
    {
        title: "Support",
        description:
            "I provide ongoing technical support to address any issues and maintain system stability. My team ensures timely troubleshooting, performance monitoring, and updates to keep your application running smoothly. I’m committed to helping you adapt to changing needs and technologies.",
        icon: FaLifeRing,
    },
];