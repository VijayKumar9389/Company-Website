import React, { useEffect, useState } from "react";
import "./AppHeader.scss";

interface AppHeaderProps {
    title: string;
    logo: string;
    imageUrl: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, logo, imageUrl }) => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY * 0.5); // Adjust speed (0.5 = slower movement)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="app-header">
            <div className="app-brand">
                <h1 className="app-title">{title}</h1>
                <img src={logo} alt={`${title} logo`} className="app-logo" />
            </div>
            <div className="app-image">
                <img
                    src={imageUrl}
                    alt={`${title} banner`}
                    className="parallax-img"
                    style={{ transform: `translateY(${offsetY}px)` }}
                />
            </div>
        </header>
    );
};

export default AppHeader;