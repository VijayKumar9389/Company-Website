import React from 'react';
import './Results.scss';
import { skillsData } from "./data.ts";

// Skill Component
const Skill = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => {
    return (
        <div className="skill-card" >
            <div className="skill-icon" data-aos="fade-up">
                <Icon />
            </div>
            <div className="skill-content" >
                <h4 className="skill-title" data-aos="fade-up" data-aos-delay="200">{title}</h4>
                <p className="skill-description" data-aos="fade-up" data-aos-delay="400">{description}</p>
            </div>
        </div>
    );
};

// Skills Component
const Skills = () => {
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