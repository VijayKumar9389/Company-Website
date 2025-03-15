import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Full-cycle web application development Expertise</h1>
                <p className="hero-subtitle">
                    I design custom cloud web applications that streamline workflows, enhance monitoring,
                    reduce errors, and empower organizations for seamless operations.
                </p>
            </div>
            <div className="hero-image-wrapper">
                <img className="hero-image" src={Image} alt="Modern web applications across devices"/>
            </div>

        </div>
    );
};

export default Hero;