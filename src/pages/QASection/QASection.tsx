import React, { useState } from 'react';
import './QASection.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from "../../components/Header/Header.tsx";

const QASection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const skills = [
        {
            category: "Business",
            items: [
                "Business process optimization & workflow automation",
                "Technology roadmap development & implementation",
                "Project requirement analysis & management",
                "Stakeholder engagement & effective communication",
                "Data-driven decision-making & reporting",
                "Project planning, execution, and delivery",
            ],
        },
        {
            category: "Front-End",
            items: [
                "Intuitive UI/UX design & responsive development",
                "Component-driven architecture with React",
                "State management with React Context & Redux",
                "TypeScript for scalability & maintainability",
                "Modern styling with Material UI, Tailwind, SCSS",
                "Some experience with Angular",
            ],
        },
        {
            category: "Back-End",
            items: [
                "REST API design, development & integration",
                "Full-stack development with React, Node.js, Express, Prisma",
                "Secure authentication & role-based authorization (JWT, Admin roles)",
                "Middleware implementation & request validation",
                "Optimized CRUD operations for large-scale applications",
                "Error handling & performance tuning",
                "Some experience with GraphQL & Django",
            ],
        },
        {
            category: "Relational Databases",
            items: [
                "PostgreSQL database design & optimization",
                "Efficient data modeling with Prisma ORM",
                "Complex SQL query writing",
                "Table Per Hierarchy (TPH) schema implementation",
                "Automated data integration & Excel processing",
                "MySQL for structured data management",
            ],
        },
        {
            category: "Infrastructure",
            items: [
                "Cloud architecture design & deployment",
                "AWS services: S3, ELB, RDS, Amplify",
                "CI/CD pipelines for automated deployments",
                "Scalable cloud storage & hosting solutions",
            ],
        },
    ];

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="qa-section">
            <Header
                heading="My Skills"
                desc="Well-versed in a wide range of technologies and tools, ensuring that I can deliver top-notch solutions for your business needs."
            />
            <div className="qa-container">
                {skills.map((skillSet, index) => (
                    <div
                        key={index}
                        className={`qa-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className={`qa-question ${activeIndex === index ? 'active' : ''}`}>
                            <h5>{skillSet.category}</h5>
                            {activeIndex === index ? (
                                <FaChevronUp className="icon" />
                            ) : (
                                <FaChevronDown className="icon" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <div className="qa-answer active">
                                <ul>
                                    {skillSet.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QASection;