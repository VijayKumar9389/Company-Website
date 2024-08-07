import './ProjectSection.scss';

import Dialog from "../../../../components/Dialog/Dialog.tsx";
import {BsArrowRight} from "react-icons/bs";
import {WorkData} from "../../data.ts";
import {useState} from "react";

const ProjectSection: React.FC<{ project: WorkData }> = ({project}) => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setSelectedSectionIndex(index);
        setIsDialogOpen(true);
    };

    const handleClose = (): void => {
        setIsDialogOpen(false);
        setSelectedSectionIndex(null);
    };

    const selectedSection = selectedSectionIndex !== null ? project.sections[selectedSectionIndex] : null;

    return (
        <>
            <div className="work-section">
                <div className="work-wrapper">
                    {project.imageUrl && (
                        <div className="work-image-container">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="work-image"
                                data-aos="fade-right"
                            />
                        </div>
                    )}
                    <div className="work-content" data-aos="fade-left">
                        <h2>{project.title}</h2>
                        {project.desc && <p className="work-info">{project.desc}</p>}
                        {project.sections.map((section, sectionIndex) => (
                            <div
                                key={sectionIndex}
                                onClick={() => handleToggle(sectionIndex)}
                                className={`work-description ${selectedSectionIndex === sectionIndex ? 'selected' : ''}`}
                            >
                                <p>View {section.title} Module <BsArrowRight /></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog
                isOpen={isDialogOpen}
                toggle={handleClose}
                element={
                    selectedSection ? (
                        <div className="project-wrapper">
                            <div className="project-content">
                                <div className="project-info">
                                    <div className="project-description">
                                        <p>{selectedSection.desc}</p>
                                    </div>
                                    <div className="project-logo">
                                        <p className="designed-for">Designed for</p>
                                        <img src={project.logo} alt="Company Logo" />
                                    </div>
                                </div>
                                <div className="project-details">
                                    {selectedSection.sections.map((item, itemIndex) => (
                                        <div key={itemIndex} className="project-description" data-aos-delay={itemIndex * 200}>
                                            <p>{item.description}</p>
                                            {item.imageUrl && (
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.description}
                                                    className="project-img"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                heading={selectedSection ? selectedSection.title : ''}
            />
        </>
    );
};

export default ProjectSection;