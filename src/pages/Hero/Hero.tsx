import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
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
        </div>
    );
};

export default Hero;