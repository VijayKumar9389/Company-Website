import './Header.scss';
import React from "react";

const Header: React.FC<{ heading: string, desc: string }> = ({heading, desc}) => {

    return (
        <div className="header-container">
            <h1 data-aos="fade-up">{heading}</h1>
            <p data-aos="fade-down" data-aos-delay="300">{desc}</p>
        </div>
    );
}

export default Header;