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
            "Evaluate your operations and business processes to identify inefficiencies.",
            "Recommend improvements to optimize workflows and enhance overall efficiency.",
            "Develop a technology roadmap that aligns with your business goals.",
            "Ensure clear communication and effective management throughout project lifecycles."
        ],
        icon: FaListUl,
        img: svgOne,
    },
    {
        title: "Design",
        description: [
            "Create user-friendly interfaces that enhance the user experience (UX).",
            "Implement modern responsive design techniques for seamless access across all devices.",
            "Design custom web components that present data clearly and effectively.",
            "Develop precise data models that accurately reflect your business operations."
        ],
        icon: FaPencilAlt,
        img: svgTwo,
    },
    {
        title: "Development",
        description: [
            "Build REST APIs for seamless communication and integration with other systems.",
            "Implement error-checking and validation mechanisms to ensure system reliability.",
            "Maintain a clean, robust codebase that allows for easy updates and future feature additions.",
            "Develop scalable, secure cloud-based applications."
        ],
        icon: FaCode,
        img: svgThree,
    },
    {
        title: "Deployment",
        description: [
            "Apply cutting-edge security measures in compliance with industry standards.",
            "Configure cloud environments for reliable hosting.",
            "Ensure scalable storage for images and files.",
            "Provide continuous support and monitoring."
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
                desc="From Concept to Deployment I Oversee Every Stage of the Application Development Lifecycle"
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