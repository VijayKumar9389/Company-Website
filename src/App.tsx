import './styles/App.scss'
import Hero from "./pages/Hero/Hero.tsx";
import Work from "./pages/Projects/Projects.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import Design from "./pages/Design/Design.tsx";
import Experience from "./pages/Skills/Skills.tsx";
import Results from "./pages/Results/Results.tsx";
import Footer from "./components/Footer/Footer.tsx";

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
            <Navbar/>
            <Hero/>
            <div className="custom-shape-divider-top-1725311894">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="app-wrapper">
                <Experience/>
                <div>
                    <Design/>
                    <Results/>
                </div>
                <Work/>
                {/*<Contact />*/}
            </div>
            <Footer/>
        </div>
    );
}

export default App
