import './styles/App.scss'
import Hero from "./pages/Hero/Hero.tsx";
import Work from "./pages/Projects/Projects.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import Design from "./pages/Design/Design.tsx";
import Experience from "./pages/Skills/Skills.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Results from "./pages/Results/Results.tsx";

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
            offset: 100,
            anchorPlacement: "center-top"
        });
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Hero/>
            <div className="app-wrapper">
                <Experience />
                <div>
                    <Design />
                    <Results />
                </div>
                <Work/>
                {/*<Contact />*/}
            </div>
        </div>
    );
}

export default App
