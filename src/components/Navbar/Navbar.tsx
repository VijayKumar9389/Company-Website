import { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom"; // For navigation
import "./Navbar.scss";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate(); // Handles navigation

    const toggleModal = () => setIsModalOpen((prev) => !prev);
    const closeModal = () => setIsModalOpen(false);

    const handleScroll = useCallback(() => {
        requestAnimationFrame(() => {
            setScrolled(window.scrollY > 50);
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Logo Section */}
            <div className="logo" onClick={() => navigate("/")}>
               <p>
                   Vijay Kumar
               </p>
            </div>

            {/* Navigation Links */}
            <div className={`nav-container ${isModalOpen ? "open" : ""}`}>
                {["Services", "Portfolio", "Contact"].map((section, index) => (
                    <ScrollLink
                        key={index}
                        to={section.toLowerCase() + "-container"}
                        className="nav-link"
                        spy
                        smooth
                        offset={-80}
                        duration={500}
                        onClick={closeModal}
                    >
                        {section}
                    </ScrollLink>
                ))}
            </div>

            {/*/!* Mobile Menu Button *!/*/}
            {/*<button onClick={toggleModal} className="menu-btn" aria-label="Toggle menu">*/}
            {/*    {isModalOpen ? <IoClose /> : <IoMenu />}*/}
            {/*</button>*/}

            {/* Overlay for Mobile Menu */}
            {isModalOpen && <div className="overlay show" onClick={toggleModal}></div>}
        </nav>
    );
};

export default Navbar;