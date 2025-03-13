import React from "react";
import './Header.scss';

interface HeaderProps {
    heading: string;
    desc: string;
    darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ heading, desc, darkMode = false }) => {
    return (
        <div className={`header-container ${darkMode ? "dark-mode" : ""}`}>
            <h2 data-aos="fade-right">{heading}</h2>
            <p data-aos="fade-left" data-aos-delay="300">{desc}</p>
        </div>
    );
};

export default Header;