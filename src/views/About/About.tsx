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
        description: "We work closely with you to uncover and thoroughly understand your unique business needs, ensuring our solutions align perfectly with your operations, processes, and strategic objectives by conducting in-depth systems analysis, developing accurate data models, designing streamlined processes, and managing projects with clear communication and timely delivery.",
        delay: "000",
        items: [
            {
                img: FaChartBar,
                alt: "Systems Analysis",
                title: "Systems Analysis",
                description: "Conduct in-depth systems analysis to identify and map operational events.",
                delay: "000"
            },
            {
                img: AiOutlineRise,
                alt: "Data Modeling",
                title: "Data Modeling",
                description: "Develop data models that accurately represent your business operations.",
                delay: "300"
            },
            {
                img: FaReact,
                alt: "Project Management",
                title: "Project Management",
                description: "Oversee projects with a focus on clear communication and delivering high-quality results.",
                delay: "600"
            },
            {
                img: FaAngular,
                alt: "Consulting",
                title: "Solutions Consulting",
                description: "Providing design, development and strategy consulting services.",
                delay: "900"
            }
        ]
    },
    {
        img: svgTwo,
        alt: "Design",
        title: "Design",
        description: "We create intuitive user flows and visually engaging designs that enhance user experience and reflect your brand’s identity by developing dynamic web applications with React, crafting efficient user journeys, implementing clean navigation architecture, and designing scalable RESTful APIs with data visualization tools.",
        delay: "300",
        items: [
            {
                img: FaDatabase,
                alt: "Database Architecture",
                title: "Database Architecture",
                description: "Design and manage relational databases like MySQL and PostgreSQL to efficiently handle your data.",
                delay: "000"
            },
            {
                img: SiTypescript,
                alt: "User Flow",
                title: "User Flow",
                description: "Craft user journeys that are both intuitive and efficient, guiding users through a coherent and satisfying experience.",
                delay: "300"
            },
            {
                img: FaCodeBranch,
                alt: "Seamless Navigation",
                title: "Seamless Navigation",
                description: "Implement clean architecture principles to ensure easy navigation and maintainability of your web application.",
                delay: "600"
            },
            {
                img: FaServer,
                alt: "Data Analytics and Visualization",
                title: "Data Analytics and Visualization",
                description: "Create components to visualize and manab.",
                delay: "900"
            }
        ]
    },
    {
        img: svgThree,
        alt: "Development",
        title: "Development",
        description: "We build robust web applications with cutting-edge technologies to ensure performance, security, and scalability by employing agile development practices for continuous improvement, designing reliable database solutions, integrating advanced security measures, and developing flexible RESTful APIs for smooth data integration.",
        delay: "600",
        items: [
            {
                img: FaCloud,
                alt: "Cloud Deployment",
                title: "Cloud Deployment",
                description: "Configure and deploy applications on cloud platforms like AWS, ensuring seamless and reliable access.",
                delay: "000"
            },
            {
                img: SiGithub,
                alt: "Version Control",
                title: "Version Control",
                description: "Leverage Git for version control and code pipelines to enhance collaboration and maintain code integrity.",
                delay: "300"
            },
            {
                img: FaShieldAlt,
                alt: "Security-First Approach",
                title: "Security-First Approach",
                description: "Implement advanced security measures including encryption and Web Tokens to protect your applications.",
                delay: "600"
            },
            {
                img: SiGraphql,
                alt: "RESTful API Development",
                title: "RESTful API Development",
                description: "Develop flexible and efficient data-fetching solutions with GraphQL APIs and Apollo Server.",
                delay: "1200"
            }
        ]
    },
    {
        img: svgFour,
        alt: "Deployment",
        title: "Deployment",
        description: "We manage the entire deployment process to ensure your application is securely hosted, easily accessible, and scalable by overseeing secure and reliable hosting, implementing robust image and file storage solutions, utilizing advanced web hosting technologies, and continuously monitoring and optimizing application performance.",
        delay: "900",
        items: [
            {
                img: FaServer,
                alt: "Deployment Management",
                title: "Deployment Management",
                description: "Oversee the deployment process to ensure secure and scalable application hosting.",
                delay: "000"
            },
            {
                img: FaJava,
                alt: "Image and File Storage",
                title: "Image and File Storage",
                description: "Implement robust storage solutions for managing and securing images and files associated with your application.",
                delay: "300"
            },
            {
                img: FaPython,
                alt: "Web Hosting",
                title: "Web Hosting",
                description: "Utilize advanced web hosting technologies to ensure high availability and performance of your application.",
                delay: "600"
            },
            {
                img: FaCog,
                alt: "Scaling",
                title: "Scaling",
                description: "Continuously monitor and optimize application performance to handle increased user loads and evolving business requirements.",
                delay: "900"
            }
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
                            <h2>{competency.title}</h2>
                        </div>
                        <div className="card-body">
                        <div className="card-info">
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