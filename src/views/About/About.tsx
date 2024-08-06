import './About.scss';
import svgOne from "../../assets/Media/requirements.svg";
import svgTwo from "../../assets/Media/design.svg";
import svgThree from "../../assets/Media/develop.svg";
import svgFour from "../../assets/Media/deploy.svg";
import Header from "../../components/Header/Header.tsx";

import { AiOutlineRise } from 'react-icons/ai';
import {
    FaDatabase,
    FaCloud,
    FaJava,
    FaPython,
    FaServer,
    FaChartBar,
    FaReact,
    FaAngular,
    FaShieldAlt,
    FaCodeBranch,
    FaCog
} from 'react-icons/fa';
import { SiTypescript, SiGithub, SiGraphql } from 'react-icons/si';

const competencies = [
    {
        img: svgOne,
        alt: "Requirements Gathering",
        title: "Requirements Gathering",
        description: "We collaborate closely with you to uncover and understand your unique business needs. This thorough analysis ensures that the final solution aligns perfectly with your operations, processes, and strategic goals.",
        delay: "000",
        items: [
            {
                img: FaChartBar,
                alt: "Security-First Approach",
                title: "Security-First Approach",
                description: "Develop comprehensive dashboards and visualization tools that provide actionable insights, enabling your business to make informed, data-driven decisions.",
                delay: "000",
            },
            {
                img: AiOutlineRise,
                alt: "Systems Analysis",
                title: "Systems Analysis",
                description: "Conduct thorough systems analysis to identify and resolve operational inefficiencies.",
                delay: "300",
            },
            {
                img: FaReact,
                alt: "Project Management",
                title: "Project Management",
                description: "Oversee projects with a focus on clear communication and delivering high-quality results on time and within budget.",
                delay: "600",
            },
            {
                img: FaAngular,
                alt: "Optimized Operations",
                title: "Optimized Operations",
                description: "Enhance and streamline your operations with tailored solutions that address specific business needs. We focus on creating efficient processes that boost productivity and drive growth.",
                delay: "900",
            },
        ]
    },
    {
        img: svgTwo,
        alt: "Design",
        title: "Design",
        description: "Craft intuitive user flows and visually compelling designs to enhance user experience and reflect your brand’s identity.",
        delay: "300",
        items: [
            {
                img: FaDatabase,
                alt: "Database Architecture",
                title: "Database Architecture",
                description: "Design and manage relational databases like MySQL and PostgreSQL to efficiently handle your data.",
                delay: "000",
            },
            {
                img: SiTypescript,
                alt: "Type Safety with TypeScript",
                title: "Type Safety with TypeScript",
                description: "Ensure code reliability and scalability with TypeScript, adding robustness to your development process.",
                delay: "300",
            },
            {
                img: FaCodeBranch,
                alt: "Scalable Systems",
                title: "Scalable Systems",
                description: "Implement clean architecture principles to build systems that are both scalable and maintainable.",
                delay: "600",
            },
            {
                img: FaServer,
                alt: "RESTful API Development",
                title: "Data Analytics and Visualization",
                description: "Create scalable RESTful APIs with a focus on clean architecture and efficient data handling.",
                delay: "900",
            },
        ]
    },
    {
        img: svgThree,
        alt: "Development",
        title: "Development",
        description: "Develop robust web applications using the latest technologies to ensure performance, security, and scalability for your business.",
        delay: "600",
        items: [
            {
                img: FaCloud,
                alt: "Cloud Deployment",
                title: "Cloud Deployment",
                description: "Configure and deploy applications on cloud platforms like AWS, ensuring seamless and reliable access.",
                delay: "000",
            },
            {
                img: SiGithub,
                alt: "Version Control",
                title: "Version Control",
                description: "Leverage Git for version control and code pipelines to enhance collaboration and maintain code integrity.",
                delay: "300",
            },
            {
                img: FaShieldAlt,
                alt: "Security-First Approach",
                title: "Security-First Approach",
                description: "Implement advanced security measures including encryption and Web Tokens to protect your applications.",
                delay: "600",
            },
            {
                img: SiGraphql,
                alt: "RESTful API Development",
                title: "RESTful API Development",
                description: "Develop flexible and efficient data-fetching solutions with GraphQL APIs and Apollo Server.",
                delay: "1200",
            },
        ]
    },
    {
        img: svgFour,
        alt: "Deployment",
        title: "Deployment",
        description: "Manage the entire deployment process, ensuring that your application is securely hosted and easily accessible while guaranteeing scalability.",
        delay: "900",
        items: [
            {
                img: FaServer,
                alt: "Deployment Management",
                title: "Deployment Management",
                description: "Oversee the deployment process to ensure secure and scalable application hosting.",
                delay: "000",
            },
            {
                img: FaJava,
                alt: "Java Development Background",
                title: "Java Development Background",
                description: "Utilize a strong foundation in Java programming to support diverse application needs.",
                delay: "300",
            },
            {
                img: FaPython,
                alt: "Python Development",
                title: "Python Development",
                description: "Develop Python applications for automating tasks and processing data efficiently.",
                delay: "600",
            },
            {
                img: FaCog,
                alt: "Systems Analysis",
                title: "Systems Analysis",
                description: "Identify and resolve potential user errors through thorough business logic mapping and analysis.",
                delay: "900",
            },
        ]
    }
];

const About = () => {

    const headerData = {
        heading: "Transform Your Business with Custom Information Systems.",
        desc: "Partner with us throughout your digital transformation journey, from concept to implementation, to craft tailored technology solutions."
    };

    return (
        <div className="about-container">
            <Header heading={headerData.heading} desc={headerData.desc} />
            <div className="core-competencies">
                {competencies.map((competency, index) => (
                    <div className="competency-card" data-aos="fade-up" data-aos-delay={competency.delay} key={index}>
                        <div className="card-header">
                            <h1>{index + 1}</h1>
                        </div>
                        <div className="card-body">
                            <div className="card-info">
                                <h2>{competency.title}</h2>
                                <img src={competency.img} alt={competency.alt} className="competency-icon" />
                                <p>{competency.description}</p>
                            </div>
                            <ul className="competency-items">
                                {competency.items.map((item, itemIndex) => (
                                    <li className="detail-item" data-aos="fade-down" data-aos-delay={item.delay} key={itemIndex}>
                                        <item.img className="detail-icon" />
                                        <div className="detail-info">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;