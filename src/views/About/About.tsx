import './About.scss';
import svgOne from "../../assets/Media/requirements.svg";
import svgTwo from "../../assets/Media/design.svg";
import svgThree from "../../assets/Media/develop.svg";
import svgFour from "../../assets/Media/deploy.svg";
import Header from "../../components/Header/Header.tsx";

import {
    FaDatabase,
    FaCloud,
    FaCog, FaTasks, FaCheckCircle
} from 'react-icons/fa';
import {
    FaArrowRight, FaCode,
    FaCube,
    FaDiagramProject,
    FaHeart, FaImage,
    FaLightbulb, FaLock,
    FaNetworkWired, FaRocket,
    FaTable
} from "react-icons/fa6";

const competencies = [
    {
        img: svgOne,
        alt: "Requirements Gathering",
        title: "Requirements Gathering",
        description: "Deeply understand your business processes to create tailored solutions that align with your goals.",
        delay: "000",
        items: [
            {
                img: FaLightbulb,
                alt: "Technical Consultation",
                title: "Technical Consultation",
                description: "Expert advice on selecting and implementing technologies suited to your project's needs.",
                delay: "900"
            },
            {
                img: FaTasks,
                alt: "Project Management",
                title: "Project Management",
                description: "Manage projects with clear communication, strategic planning, and high-quality delivery.",
                delay: "600"
            },
            {
                img: FaDiagramProject,
                alt: "Systems Analysis",
                title: "Systems Analysis",
                description: "Analyze processes to identify business needs for effective solution design.",
                delay: "000"
            },
            {
                img: FaTable,
                alt: "Data Modeling",
                title: "Data Modeling",
                description: "Create data models to represent and manage business operations accurately.",
                delay: "300"
            }
        ]
    },
    {
        img: svgTwo,
        alt: "Design",
        title: "Design",
        description: "Craft intuitive interfaces and designs to enhance user experience and streamline operations, and increase productivity.",
        delay: "300",
        items: [
            {
                img: FaDatabase,
                alt: "Database Architecture",
                title: "Database Architecture",
                description: "Design and manage databases for efficient data mapping and handling.",
                delay: "000"
            },
            {
                img: FaArrowRight,
                alt: "Optimized User Flows",
                title: "Optimized User Flows",
                description: "Develop user flows to guide users seamlessly through applications.",
                delay: "300"
            },
            {
                img: FaCheckCircle,
                alt: "Data Validation",
                title: "Data Validation",
                description: "Implement error-checking methods to ensure data integrity.",
                delay: "600"
            },
            {
                img: FaCube,
                alt: "Custom Components",
                title: "Custom Components",
                description: "Design adaptable web components for effective data visualization and management.",
                delay: "900"
            }
        ]
    },
    {
        img: svgThree,
        alt: "Development",
        title: "Development",
        description: "Create scalable, secure, and high-performance solutions for a seamless user experience across all platforms.",
        delay: "600",
        items: [
            {
                img: FaCloud,
                alt: "Clean Architecture",
                title: "Clean Architecture",
                description: "Architect and deploy applications on cloud platforms like AWS for reliability and scalability.",
                delay: "000"
            },
            {
                img: FaCog,
                alt: "Automate",
                title: "Automate",
                description: "Develop algorithms to automate data processing and generate insightful reports.",
                delay: "300"
            },
            {
                img: FaLock,
                alt: "Security-First Approach",
                title: "Security-First Approach",
                description: "Integrate advanced security measures to protect applications from threats.",
                delay: "600"
            },
            {
                img: FaCode,
                alt: "Restful API Development",
                title: "Restful API Development",
                description: "Create efficient APIs to manage data and business logic, ensuring smooth communication.",
                delay: "1200"
            }
        ]
    },
    {
        img: svgFour,
        alt: "Deployment",
        title: "Deployment",
        description: "Manage the entire deployment lifecycle to ensure secure, accessible, and scalable applications.",
        delay: "900",
        items: [
            {
                img: FaRocket,
                alt: "Deployment Management",
                title: "Deployment Management",
                description: "Oversee deployment to ensure secure hosting and scalability.",
                delay: "000"
            },
            {
                img: FaImage,
                alt: "Image and File Storage",
                title: "Image and File Storage",
                description: "Implement robust storage solutions for images and files, ensuring availability and integrity.",
                delay: "300"
            },
            {
                img: FaNetworkWired,
                alt: "Web Hosting",
                title: "Web Hosting",
                description: "Utilize advanced web hosting technologies for high availability and performance.",
                delay: "600"
            },
            {
                img: FaHeart,
                alt: "Support & Monitoring",
                title: "Support & Monitoring",
                description: "Monitor applications continuously and provide ongoing support to meet evolving needs.",
                delay: "900"
            }
        ]
    }
];

const About = () => {

    const headerData = {
        heading: "I Handle All Aspects of Full Stack Development to Launch Your Digital Solutions.",
        desc: "From initial design through development, deployment, and scaling, I expertly manage every aspect to ensure your digital solutions are successful."
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