import './Work.scss';
import Header from '../../components/Header/Header.tsx';
import {WorkData, workData} from "./data.ts";
import ProjectSection from "./components/ProjectSection/ProjectSection.tsx";

const Work = () => {
    return (
        <div className="work-container">
            <Header
                heading="Explore My Digital Solutions Powering Businesses"
                desc=""
            />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project}/>
            ))}
        </div>
    );
};

export default Work;