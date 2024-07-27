import React, { useState } from 'react';
import './ProjectSection.scss';
import { WorkData, WorkSectionData} from "../../data.ts";
import Dialog from "../../../../components/Dialog/Dialog.tsx";
import './ProjectSection.scss'; // Use CSS Modules for scoped styles

interface ProjectSectionProps {
    project: WorkData;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const firstImage = project.sections[0].imageUrl;

    const handleToggle = (): void => {
        setIsDialogOpen(prevState => !prevState);
    };

    return (
        <>
            <div
                className="project-section"
                onClick={handleToggle}
            >
                <img
                    src={firstImage}
                    alt={project.title}
                    className="project-image"
                    data-aos="fade-right"
                />
                <div className="project-content" data-aos="fade-left">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-desc"></p>
                </div>
            </div>
            <Dialog
                isOpen={isDialogOpen}
                toggle={handleToggle}
                element={
                    <div className="project-wrapper">
                        <div className="project-content" >
                            <div className="project-info" data-aos="fade-up-left">
                                <p>{project.desc}</p>
                            </div>
                            <div className="project-details">
                                {project.sections.map((section: WorkSectionData, sectionIndex: number) => (
                                    <div key={sectionIndex} className="project-description"  data-aos="fade-down" data-aos-delay={sectionIndex * 200}>
                                        <h3>{section.description}</h3>
                                        <img
                                            src={section.imageUrl}
                                            alt={section.description}
                                            className="project-img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                heading={project.title}
            />
        </>
    );
};

export default ProjectSection;