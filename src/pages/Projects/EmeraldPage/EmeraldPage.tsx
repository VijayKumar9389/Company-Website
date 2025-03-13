import React, { useEffect } from "react";
import "../ProjectPage.scss";
import AppFeatures from "../components/AppFeatures/AppFeatures.tsx";
import { Emerald } from "./data.ts";
import AppHeader from "../components/AppHeader/AppHeader.tsx";
import Technologies from "../components/Technologies/Technologies.tsx";
import { EmeraldTech } from "../components/Technologies/data.ts";

const EmeraldInventoryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    if (!Emerald) {
        return <p className="error-message">Project not found</p>;
    }

    return (
        <div className="app-page">
            <AppHeader title={Emerald.title} logo={Emerald.logo} imageUrl={Emerald.imageUrl} />

            <div className="app-body">
                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>{Emerald.desc}</p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        We developed a robust application leveraging responsive design, data
                        organization, and streamlined workflows to address challenges outlined
                        in <strong>{Emerald.title}</strong>.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title="Key Features"
                        description="Explore the features that make this application efficient and user-friendly."
                        sections={Emerald.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The deployment of <strong>{Emerald.title}</strong> improved inventory tracking, accounted for losses across locations, stored receipts for record-keeping, and provided a platform to engage with customers.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Built With</h2>
                    <Technologies techData={EmeraldTech} />
                </section>
            </div>
        </div>
    );
};

export default EmeraldInventoryPage;