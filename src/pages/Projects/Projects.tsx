import './Projects.scss';
import { WorkData, workData } from "./data";
import ProjectSection from "./components/ProjectSection";
import Header from "../../components/Header/Header.tsx";

const Work = () => {
    return (
        <div className="work-container">
            <Header
                heading="Explore My Technology"
                desc="Tailored to reflect and manage each business's unique operations."
            />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </div>
    );
};

export default Work;