import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Got a Vision? Let's Build <strong>Your Perfect Business Tool</strong>.</h1>
                <img className="hero-image" data-aos="fade-up" src={Image} alt="Laptops" />
            </div>
        </div>
    );
}

export default Hero;
