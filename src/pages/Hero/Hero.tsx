import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-content-wrapper">
                    <h1 className="hero-title">
                        Unlock the Potential of Cloud Applications

                    </h1>
                    <p>
                        We analyze your business processes and gaols to design and implement solutions that precisely reflect and
                        manage your operations.
                    </p>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src={Image} alt="Laptops" data-aos="fade-up" />
                </div>
            </div>
        </div>
    );
};

export default Hero;