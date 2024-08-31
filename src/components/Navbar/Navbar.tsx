import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.scss';

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
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo" onClick={() => window.scrollTo(0, 0)}>
                <h2>POKI</h2>
            </div>
            <button onClick={toggleModal} className="menu-btn">
                <IoMenu />
            </button>
            <div className={`nav-menu ${isModalOpen ? 'open' : ''}`}>
                <ScrollLink to="about-container" className="nav-link" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleModal}>
                    Services
                </ScrollLink>
                <ScrollLink to="work-container" className="nav-link" spy={true} smooth={true} offset={-80} duration={500} onClick={toggleModal}>
                    Portfolio
                </ScrollLink>
            </div>
        </div>
    );
};

export default Navbar;