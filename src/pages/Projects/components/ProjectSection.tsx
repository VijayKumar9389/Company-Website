import './ProjectSection.scss';
import {WorkData} from "../data.ts";
import {useState} from "react";
import {FaArrowDown} from "react-icons/fa6";

const ProjectSection: React.FC<{ project: WorkData }> = ({project}) => {
    const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setSelectedSectionIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <section className="project-section">
            <div className="project-wrapper">
                {project.imageUrl && (
                    <div className="image-container" data-aos="fade-in">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="project-image"
                        />
                    </div>
                )}
                <div className="content-wrapper" >
                    <h2 className="project-title">{project.title}</h2>
                    {project.desc && <p className="project-description">{project.desc}</p>}
                    {project.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="section-item">
                            <div
                                onClick={() => handleToggle(sectionIndex)}
                                className={`section-toggle ${selectedSectionIndex === sectionIndex ? 'active' : ''}`}

                            >
                                <h4>View {section.title} Module <FaArrowDown className="arrow-icon"/></h4>
                            </div>
                            {selectedSectionIndex === sectionIndex && (
                                <div className="dropdown-content">
                                    <div className="details-wrapper">
                                        <div className="details-content">
                                            <div className="info-container">
                                                <div className="company-logo">
                                                    <div className="designed-for">
                                                        <img src={project.logo} alt="Company Logo"/>
                                                        <p>{section.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-sections">
                                                {section.sections.map((item, itemIndex) => (
                                                    <div key={itemIndex} className="section-details">
                                                        {item.imageUrl && (
                                                            <img
                                                                src={item.imageUrl}
                                                                alt={item.description}
                                                                className="details-image"
                                                            />
                                                        )}
                                                        <h4>{item.description}</h4>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;