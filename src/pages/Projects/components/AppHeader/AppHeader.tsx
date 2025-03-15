import React from "react";
import "./AppHeader.scss";

interface AppHeaderProps {
    title: string;
    logo: string;
    imageUrl: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, logo, imageUrl }) => {
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
                />
            </div>
        </header>
    );
};

export default AppHeader;