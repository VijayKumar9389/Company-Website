import './Projects.scss';
import { WorkData, workData } from "./data";
import ProjectSection from "./components/ProjectSection";
import Header from "../../components/Header/Header.tsx";
import Results from "../Results/Results.tsx";

const Work = () => {
    return (
        <div className="work-container">
            <Header
                heading="Unlock the Potential of Digital Transformation"
                desc="Explore seamless, responsive applications engineered for secure communication and efficient business data management."
            />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
            <Results />
        </div>
    );
};

export default Work;