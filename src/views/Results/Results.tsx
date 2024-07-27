import React, { useEffect } from 'react';
import './Results.scss';
import { skillsData } from "./data.ts";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Skill Component
const Skill = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => {
    return (
        <div className="skill-card" data-aos="fade-up">
            <div className="skill-icon" data-aos="zoom-in">
                <Icon />
            </div>
            <div className="skill-content" data-aos="fade-up">
                <h3 className="skill-title">{title}</h3>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    );
};

// Skills Component
const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <div className="skills-container" data-aos="fade-up">
            <div className="skills-wrapper">
                {skillsData.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;