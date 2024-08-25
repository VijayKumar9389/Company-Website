// Navbar.jsx
import {useEffect, useState} from "react";
import {IoMenu} from "react-icons/io5";
import {Link as ScrollLink} from 'react-scroll';
import './Navbar.scss';
import {BsArrowRight} from "react-icons/bs";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={`navbar  ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h2 onClick={() => window.scrollTo(0, 0)}>VK Studios</h2>
            </div>
            <div className="nav-menu">
                <ScrollLink to="about-container" className="nav-link" spy={true} smooth={true} offset={-80}
                            duration={500}>Services</ScrollLink>
                <ScrollLink to="work-container" className="nav-link" spy={true} smooth={true} offset={-80}
                            duration={500}>Portfolio</ScrollLink>
            </div>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500}>
                <button className="btn-contact">Contact <BsArrowRight className="icon"/></button>
            </ScrollLink>
            <button onClick={toggleModal} className="menu-btn">
                <IoMenu/>
            </button>
            {/* Pass isOpen and toggleModal as props to Modal component */}
            {/*<Sidebar isOpen={isModalOpen} toggleModal={toggleModal}/>*/}
        </div>
    );
}

export default Navbar;
