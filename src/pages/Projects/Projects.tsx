import { Link } from "react-router-dom";
import "./Projects.scss";
import { WorkData, workData } from "./data";
import Header from "../../components/Header/Header.tsx";

const Projects = () => {
    return (
        <section className="projects-container">
            <Header
                heading="Explore My Innovative Solutions"
                desc="Discover My tailored modules designed to enhance efficiency and streamline business operations."
            />
            <div className="projects-grid">
                {workData.map((project: WorkData, index: number) => (
                    <Link to={project.link} key={index} className="project-card" data-aos="fade-up">
                        <div className="info-container">
                            <h5 className="project-title">{project.title}</h5>
                            {project.desc && <p className="project-description">{project.desc}</p>}
                        </div>
                        <div className="image-container">
                            {project.imageUrl && (
                                <img src={project.imageUrl} alt={project.title} className="project-image"/>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Projects;