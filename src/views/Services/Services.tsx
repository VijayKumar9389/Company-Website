import './Services.scss';
import React, { useState } from 'react';
import { workData, WorkSectionData } from "./data.ts";
import Header from "../../components/Header/Header.tsx";

// A separate component to handle individual sections
const ServiceContent: React.FC<{
    section: WorkSectionData;
    isSelected: boolean;
    onMouseEnter: () => void;
}> = ({ section, isSelected, onMouseEnter }) => (
    <div
        onMouseEnter={onMouseEnter}
        className={`service-card ${isSelected ? 'selected' : ''}`}
    >
        <p>{section.description}</p>
    </div>
);

const Services: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState(0);
    const project = workData[0]; // Example: Using the first project, you can change this as needed

    const handleMouseEnter = (index: number) => {
        setSelectedSection(index);
    };

    return (
        <div className="service-container">
            <Header heading={project.title} desc={project.desc || ''} />
            <div className="content-wrapper">
                <img
                    src={project.sections?.[selectedSection]?.imageUrl}
                    alt={project.title}
                    className="section-image"
                    data-aos="fade-right"
                />
                <div className="section-content" data-aos="fade-left">
                    {project.sections.map((section: WorkSectionData, sectionIndex: number) => (
                        <ServiceContent
                            key={sectionIndex}
                            section={section}
                            isSelected={selectedSection === sectionIndex}
                            onMouseEnter={() => handleMouseEnter(sectionIndex)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
