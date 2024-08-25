import './styles/App.scss'
import Hero from "./pages/Hero/Hero.tsx";
import Skills from "./pages/Skills/Skills.tsx";
import Work from "./pages/Projects/Projects.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.tsx";

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
                <Skills/>
                <Work/>
            </div>
        </div>
    );
}

export default App
