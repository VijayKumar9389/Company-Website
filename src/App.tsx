import './styles/App.scss';
import Hero from "./views/Hero/Hero.tsx";
import About from "./views/About/About.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Results from "./views/Results/Results.tsx";
import Work from "./views/Work/Work.tsx";
import Contact from "./views/Contact/Contact.tsx";
import { useEffect } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Services from "./views/Services/Services.tsx";

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
        });
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <div className="app-body">
                <section id="hero">
                    <Hero/>
                </section>
                <main className="main-content">
                    <section id="about">
                        <About/>
                    </section>
                    <section id="services">
                        <Services/>
                    </section>
                    <section id="results">
                        <Results/>
                    </section>
                    <section id="work">
                        <Work/>
                    </section>
                    <section id="contact">
                        <Contact/>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;