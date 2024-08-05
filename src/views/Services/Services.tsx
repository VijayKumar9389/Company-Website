import './Services.scss';
import React, {useEffect, useState} from 'react';
import {workData, WorkSectionData} from "./data.ts";
import Header from "../../components/Header/Header.tsx";
import Slideshow from "./SlideShow.tsx";

const Services: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState(0);
    const project = workData[0]; // Example: Using the first project, you can change this as needed
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseEnter = (index: number) => {
        setSelectedSection(index);
    };

    return (
        <div className="service-container">
            <Header heading="Sleek, Responsive Interface for Seamless Data Management"
                    desc="Our web applications are deployed to the cloud, ensuring that they are developed once and accessible from any device with an internet connection. This allows you to effortlessly visualize and manage your business data from anywhere, at any time."
            />
            {isMobile ? (
                <Slideshow/>
            ) : (
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
            )}
        </div>
    );
};

// A separate component to handle individual sections
const ServiceContent: React.FC<{
    section: WorkSectionData;
    isSelected: boolean;
    onMouseEnter: () => void;
}> = ({section, isSelected, onMouseEnter}) => (
    <div
        onMouseEnter={onMouseEnter}
        className={`service-card ${isSelected ? 'selected' : ''}`}
    >
        <p>{section.description}</p>
    </div>
);

export default Services;
