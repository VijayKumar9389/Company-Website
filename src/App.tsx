import './styles/App.scss'
import Hero from "./views/Hero/Hero.tsx";
import About from "./views/About/About.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Services from "./views/Services/Services.tsx";
import Results from "./views/Results/Results.tsx";
import Work from "./views/Work/Work.tsx";
import Contact from "./views/Contact/Contact.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';

function App() {

    useEffect((): void => {
        AOS.init({
            once: true,
            duration: 1500,
            offset: 700,
        });
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <main className="main-content">
                <Hero />
                <About />
                <Services />
                <Results />
                <Work />
                <Contact />
            </main>
        </div>
    );
}

export default App
