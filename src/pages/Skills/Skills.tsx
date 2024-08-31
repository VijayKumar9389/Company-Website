import './Skills.scss';
import React, { useState } from 'react';
import { FaCode, FaListUl, FaCloudUploadAlt, FaPencilAlt } from 'react-icons/fa';
import Header from "../../components/Header/Header";
import svgOne from '../../assets/Media/requirements.svg';
import svgTwo from '../../assets/Media/design.svg';
import svgThree from '../../assets/Media/develop.svg';
import svgFour from '../../assets/Media/deploy.svg';

type Competency = {
    title: string;
    description: string[];
    icon: React.ElementType; // Updated this line
    img: string;
};

export const competenciesData: Competency[] = [
    {
        title: "Consulting",
        description: [
            "In-depth analysis of business needs and goals.",
            "Comprehensive process evaluations.",
            "Precise data models representing operations."
        ],
        icon: FaListUl,
        img: svgOne,
    },
    {
        title: "Design",
        description: [
            "User-centric interfaces for optimal UX.",
            "Adaptable web components for data visualization.",
            "Manage databases for accurate mapping and navigation."
        ],
        icon: FaPencilAlt,
        img: svgTwo,
    },
    {
        title: "Development",
        description: [
            "REST APIs for seamless communication.",
            "Automated data processing with advanced algorithms.",
            "Robust error-checking mechanisms.",
            "Scalable, secure cloud-based applications."
        ],
        icon: FaCode,
        img: svgThree,
    },
    {
        title: "Deployment",
        description: [
            "Scalability aligned with business growth.",
            "Reliable hosting and deployment solutions.",
            "Secure storage for images and files.",
            "Continuous support and monitoring."
        ],
        icon: FaCloudUploadAlt,
        img: svgFour,
    }
];

const Skills: React.FC = () => {
    const [selectedCompetency, setSelectedCompetency] = useState<Competency>(competenciesData[0]);

    const handleClick = (competency: Competency) => {
        setSelectedCompetency(competency);
    };

    return (
        <div className="skills-container">
            <Header
                heading="Bring Your Digital Solution to Life"
                desc="We Oversee Every Stage of the Application Development Lifecycle"
            />
            <div className="competency-section">
                <div className="competency-list" data-aos="fade-right">
                    {competenciesData.map((competency, index) => (
                        <div
                            key={index}
                            className={`competency-item ${selectedCompetency.title === competency.title ? 'active' : ''}`}
                            onMouseEnter={() => handleClick(competency)}
                        >
                            <competency.icon className="icon" />
                            <span className="title"><h5>{competency.title}</h5></span>
                        </div>
                    ))}
                </div>

                <div className="competency-details" >
                    <div className="image-container" data-aos="fade-up">
                        <img src={selectedCompetency.img} alt={selectedCompetency.title} />
                    </div>
                    <div className="description"  data-aos="fade-left">
                        <ul>
                            {selectedCompetency.description.map((item, index) => (
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;