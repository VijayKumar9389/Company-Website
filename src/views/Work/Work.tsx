import React from 'react';
import {WorkData, workData} from "./data.ts";
import ProjectSection from "./components/ProjectSection/ProjectSection.tsx";
import Header from '../../components/Header/Header';
import './Work.scss'; // Use CSS Modules for scoped styles

const Work: React.FC = () => {
    const headerData = {
        heading: "Explore Our Innovative Digital Solutions",
        desc: "Discover innovative digital solutions crafted to streamline operations, minimize errors, and enhance efficiency."
    };

    return (
        <div className="work-container">
            <Header heading={headerData.heading} desc={headerData.desc} />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </div>
    );
};

export default Work;