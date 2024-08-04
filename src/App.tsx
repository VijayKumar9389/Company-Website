import './styles/App.scss';
import Hero from "./views/Hero/Hero.tsx";
import About from "./views/About/About.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
// import Services from "./views/Services/Services.tsx";
import Results from "./views/Results/Results.tsx";
import Work from "./views/Work/Work.tsx";
import Contact from "./views/Contact/Contact.tsx";
import { useEffect, useState } from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Slideshow from "./views/Services/SlideShow.tsx";
import Services from "./views/Services/Services.tsx";

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
        });
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <main className="main-content">
                <Hero />
                <About />
                {/* Conditionally render based on mobile breakpoint */}
                {isMobile ? <Slideshow /> : <Services />}
                <Results />
                <Work />
                <Contact />
            </main>
        </div>
    );
}

export default App;