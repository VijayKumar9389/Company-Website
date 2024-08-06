import './Navbar.scss';
import {BsArrowRight} from "react-icons/bs";
import Logo from "../../assets/Logo.png";
import {Link as ScrollLink} from 'react-scroll';
import Sidebar from "../Sidebar/Sidebar.tsx";
import {useState} from "react";
import {IoMenu} from "react-icons/io5";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (): void => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="logo-wrapper">
                    <img src={Logo} alt="Digital Matter" className="nav-logo"/>
                </div>
                <nav className="nav-menu">
                    <ScrollLink to="hero-container" className="modal-link" spy={true} smooth={true} offset={-100}
                                duration={500}>About</ScrollLink>
                    <ScrollLink to="service-container" className="modal-link" spy={true} smooth={true} offset={-100}
                                duration={500}>Services</ScrollLink>
                    <ScrollLink to="work-container" className="modal-link" spy={true} smooth={true} offset={-100}
                                duration={500}>Work</ScrollLink>
                </nav>
                <ScrollLink to="contact-container" className="modal-link" spy={true} smooth={true} offset={-100}
                            duration={500}>
                    <button className="site-btn">Contact <BsArrowRight className="icon"/></button>
                </ScrollLink>
                <button onClick={toggleModal} className="menu-btn">
                    <IoMenu/>
                </button>
            </div>
            <Sidebar isOpen={isModalOpen} toggleModal={toggleModal}/>
        </div>
    );
}

export default Navbar;