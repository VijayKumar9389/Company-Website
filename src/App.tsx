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
            <div className="hero-content">
                <Hero />
            </div>
            <main className="main-content">
                <About />
                <Services />
                <Results />
                <Work />
                <Contact />
            </main>
        </div>
    );
}

export default App;