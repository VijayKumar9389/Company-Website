import './Design.scss';
import React, {useState} from 'react';
import {workData, WorkSectionData} from './data.ts';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import Header from "../../components/Header/Header.tsx";

// Component for individual slides
const Slide: React.FC<{ section: WorkSectionData; isActive: boolean }> = ({section, isActive}) => (
    <div className={`slide ${isActive ? 'active' : ''}`}>
        <img src={section.imageUrl} alt={section.description} className="slide-image"/>
    </div>
);

const Slideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const project = workData[0]; // Example: Using the first project

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.sections.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.sections.length) % project.sections.length);
    };

    return (
        <div className="slideshow-container">
            <Header
                heading="Unlock the Potential of Cloud Applications"
                desc="Engineered for secure communication and efficient business data management."
            />
            <div className="slideshow-wrapper">

                <div className="slideshow">
                    {project.sections.map((section: WorkSectionData, index: number) => (
                        <Slide
                            key={index}
                            section={section}
                            isActive={currentIndex === index}
                        />
                    ))}
                </div>
                <div className="slide-content-wrapper">
                    <h5>{project.sections[currentIndex].description}</h5>
                </div>
                <div className="slide-controls">
                    <button className="nav-button prev" onClick={handlePrevSlide}>
                        <BsArrowLeft/>
                    </button>
                    <div className="slideshow-indicators">
                        {project.sections.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <button className="nav-button next" onClick={handleNextSlide}>
                        <BsArrowRight/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Slideshow;