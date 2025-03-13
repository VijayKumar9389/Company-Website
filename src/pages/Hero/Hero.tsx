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
            <div className="hero-image-wrapper" data-aos="fade-up">
                <img className="hero-image" src={Image} alt="Modern web applications across devices"/>
            </div>
            <div className="custom-shape-divider-bottom-1741825670">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                          className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;