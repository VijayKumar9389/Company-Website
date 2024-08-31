import './Design.scss';
import React, {useState} from 'react';
import {workData, WorkSectionData} from './data.ts';
import Header from "../../components/Header/Header.tsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";

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
            <div className="slideshow-wrapper" data-aos="fade-up">

                <div className="slideshow">
                    {project.sections.map((section: WorkSectionData, index: number) => (
                        <Slide
                            key={index}
                            section={section}
                            isActive={currentIndex === index}
                            data-aos="fade-right" // Animation for each slide
                            data-aos-delay={`${index * 200}`} // Staggered effect for slides
                        />
                    ))}
                </div>
                <div className="slide-content-wrapper" data-aos="fade-left">
                    <h5>{project.sections[currentIndex].description}</h5>
                </div>
                <div className="slide-controls" data-aos="fade-up">
                    <button className="nav-button prev" onClick={handlePrevSlide}>
                        <FaArrowLeft />
                    </button>
                    <div className="slideshow-indicators" data-aos="fade-in">
                        {project.sections.map((_, index) => (
                            <div
                                key={index}
                                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                data-aos="zoom-in" // Zoom effect on indicators
                                data-aos-delay={`${index * 100}`} // Staggered effect for indicators
                            />
                        ))}
                    </div>
                    <button className="nav-button next" onClick={handleNextSlide}>
                        <FaArrowRight />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Slideshow;