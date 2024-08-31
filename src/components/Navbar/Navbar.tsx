import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <h2 onClick={() => window.scrollTo(0, 0)}>Vijay Kumar</h2>
            </div>
            <div className={`nav-container ${isModalOpen ? 'open' : ''}`}>
                <ScrollLink
                    to="skills-container"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeModal}  // Close the navbar when clicked
                >
                    Services
                </ScrollLink>
                <ScrollLink
                    to="work-container"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeModal}  // Close the navbar when clicked
                >
                    Portfolio
                </ScrollLink>
            </div>
            <button onClick={toggleModal} className="menu-btn">
                {isModalOpen ? <IoClose /> : <IoMenu />}
            </button>
            <div className={`overlay ${isModalOpen ? 'show' : ''}`} onClick={toggleModal}></div>
        </div>
    );
}

export default Navbar;