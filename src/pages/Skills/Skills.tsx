import './Skills.scss';
import svgOne from "../../assets/Media/requirements.svg";
import {
    FaCode,
    FaListUl
} from 'react-icons/fa6';
import Design from "../Design/Design";
import { FaCloudUploadAlt, FaPencilAlt } from "react-icons/fa";
import Header from "../../components/Header/Header";

// Updated competencies object with correct types
type CompetencyItem = {
    title: string;
    description: string;
    icon: React.ComponentType;
};

type Competency = {
    img: string;
    alt: string;
    description: string;
    items: CompetencyItem[];
};

const competencies: Record<string, Competency> = {
    "Full-Stack Development Services": {
        img: svgOne,
        alt: "Tailored Solutions",
        description: "From initial concept to launch, we handle every aspect of full-stack development to cover every phase of your project.",
        items: [
            {
                title: "Requirements Gathering",
                description: "Receive expert guidance on technology strategies that align with your business goals.",
                icon: FaListUl,
            },
            {
                title: "Design",
                description: "End-to-end project management to ensure timely and successful delivery.",
                icon: FaPencilAlt,
            },
            {
                title: "Development",
                description: "Identify key business processes to design efficient systems.",
                icon: FaCode,
            },
            {
                title: "Deployment",
                description: "Develop precise data models to support business operations.",
                icon: FaCloudUploadAlt,
            }
        ]
    }
};

const Skills: React.FC = () => {
    // Destructure the competencies object to extract the first competency
    const [title, { description, items }] = Object.entries(competencies)[0];

    return (
        <div className="about-container">
            <Header heading={title} desc={description} />
            <div className="core-competencies">
                <Design />
                <div className="competency-items">
                    {items.map((item, index) => (
                        <div className="detail-item" key={index} data-aos-delay={index * 200} data-aos="fade-left">
                            <item.icon />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
