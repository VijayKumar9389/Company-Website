import './styles/App.scss'
import Hero from "./pages/Hero/Hero.tsx";
import {useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import Design from "./pages/Design/Design.tsx";
import Results from "./pages/Results/Results.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Roadmap from "./pages/Roadmap/Roadmap.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import QASection from "./pages/QASection/QASection.tsx";
import {Route, Routes} from "react-router-dom";
import OnTractPage from "./pages/Projects/OnTract/OnTract.tsx";
import EmeraldInventoryPage from "./pages/Projects/EmeraldPage/EmeraldPage.tsx";

function App() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
        });
    }, []);

    return (
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero/>
                        <div className="app-wrapper">
                            <Design/>
                            <Results/>
                        </div>
                        <Roadmap/>
                        <div className="app-wrapper">
                            <Projects/>
                            <QASection/>
                        </div>
                    </>
                }/>
                <Route path="/ontract" element={<OnTractPage/>}/>
                <Route path="/emerald" element={<EmeraldInventoryPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App
