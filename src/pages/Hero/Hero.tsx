import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="custom-shape-divider-top-1725136650">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="hero-content">
                <div className="hero-content-wrapper">
                    <h1 className="hero-title">
                        Launch Your Custom Application to Manage Business Operations
                    </h1>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src={Image} alt="Laptops"/>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1725135656">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;