import './SlideShow.scss';
import React, { useState, useEffect } from 'react';
import { workData, WorkSectionData } from './data.ts';
import Header from '../../components/Header/Header.tsx';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// A separate component to handle individual slides
const Slide: React.FC<{ section: WorkSectionData; isActive: boolean }> = ({ section, isActive }) => (
    <div className={`slide ${isActive ? 'active' : ''}`}>
        <img src={section.imageUrl} alt={section.description} className="slide-image" />
    </div>
);

const Slideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const project = workData[0]; // Example: Using the first project, you can change this as needed

    useEffect(() => {
        // Set up the timer to change slides every 5 seconds (5000 ms)
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % project.sections.length);
        }, 5000);

        // Clean up the timer when the component unmounts
        return () => clearInterval(intervalId);
    }, [project.sections.length]);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.sections.length);
    };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.sections.length) % project.sections.length);
    };

    return (
        <div className="slideshow-container">
            <Header heading={project.title} desc={project.desc || ''} />
            <div className="slideshow">
                {project.sections.map((section: WorkSectionData, index: number) => (
                    <React.Fragment key={index}>
                        {currentIndex === index && (
                            <Slide
                                section={section}
                                isActive={true}
                            />
                        )}
                        {currentIndex === index && (
                            <div className="slide-content">
                                <p>{section.description}</p>
                            </div>
                        )}
                    </React.Fragment>
                ))}
                <button className="nav-button prev" onClick={handlePrevSlide}><BsArrowLeft /></button>
                <button className="nav-button next" onClick={handleNextSlide}><BsArrowRight /></button>
            </div>
        </div>
    );
};

export default Slideshow;