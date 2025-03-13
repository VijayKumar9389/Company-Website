import React, {useEffect} from "react";
import "../ProjectPage.scss";
import AppFeatures from "../components/AppFeatures/AppFeatures.tsx";
import {Ontract} from "./data.ts";
import AppHeader from "../components/AppHeader/AppHeader.tsx";
import Technologies from "../components/Technologies/Technologies.tsx";
import {OntractTech} from "../components/Technologies/data.ts";


const OnTractPage: React.FC = () => {

    // scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0});
    }, []);

    if (!Ontract) return <p>Project not found</p>;

    return (
        <div className="app-page">

            <AppHeader title={Ontract.title} logo={Ontract.logo} imageUrl={Ontract.imageUrl}/>


            <div className="app-body">
                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>{Ontract.desc}</p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        We developed a robust application that leverages responsive design,
                        data organization, and streamlined workflows to address the core
                        challenges outlined in {Ontract.title}.
                    </p>
                </section>

                {/* Render a separate Collab for each main section */}
                <section className="app-features">
                    {Ontract.sections.map((mainSection, index) => (
                        <AppFeatures
                            key={index}
                            title={mainSection.title}
                            description={mainSection.desc}
                            sections={mainSection.sections}
                        />
                    ))}
                </section>


                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The implementation of {Ontract.title} significantly improved operational
                        efficiency, reduced errors, and enhanced stakeholder collaboration.
                    </p>
                </section>


                <section className="app-section">
                    <h2>Built With</h2>
                    <Technologies techData={OntractTech}/>
                </section>

            </div>
        </div>
    );
};

export default OnTractPage;