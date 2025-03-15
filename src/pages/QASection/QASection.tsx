import React, { useState } from 'react';
import './QASection.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Header from "../../components/Header/Header.tsx";

const QASection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const skills = [
        {
            category: "Software Development",
            items: [
                "Full-Stack Web Development (React, Node.js, Express, Prisma)",
                "REST API Design & Integration",
                "State Management (Redux, Context API)",
                "Secure Authentication (JWT, Role-Based Access)",
                "Component-Driven UI/UX Design",
            ],
        },
        {
            category: "Databases",
            items: [
                "PostgreSQL & MySQL Database Design",
                "Efficient Data Modeling & Query Optimization",
                "Complex SQL Query Writing",
                "Automated Data Integration & Excel Processing",
            ],
        },
        {
            category: "Infrastructure & Cloud",
            items: [
                "Cloud Deployment & Architecture (AWS: S3, RDS, Amplify)",
                "CI/CD Pipelines & Automated Deployments",
                "Scalable Cloud Storage & Hosting Solutions",
            ],
        },
        {
            category: "Computer Science Fundamentals",
            items: [
                "Algorithms & Data Structures",
                "Networks & Operating Systems",
                "Systems Analysis & Software Architecture",
            ],
        },
        {
            category: "Business & Management",
            items: [
                "Business Process Optimization & Automation",
                "Financial Accounting & Decision-Making",
                "Stakeholder Engagement & Project Management",
                "Technology Roadmap Development",
                "Marketing & Strategic Planning",
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