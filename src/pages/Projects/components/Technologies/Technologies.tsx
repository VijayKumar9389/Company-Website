import "./Technologies.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {TechData} from "./data.ts";

interface TechnologiesProps {
    techData: TechData[];
}

const Technologies: React.FC<TechnologiesProps> = ({ techData }) => {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="tech-container">
            <div className="marquee-wrapper">
                <div className="marquee">
                    {techData.concat(techData).map((tech, index) => { // Duplicate for infinite scrolling
                        const IconComponent = tech.icon;
                        return (
                            <div key={index} className="services-card" data-aos="fade-in">
                                <IconComponent className="services-icon" />
                                <h2 className="services-h2">{tech.title}</h2>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Technologies;