import './About.scss';
import svgOne from "../../assets/Media/requirements.svg";
import svgTwo from "../../assets/Media/design.svg";
import svgThree from "../../assets/Media/develop.svg";
import svgFour from "../../assets/Media/deploy.svg";
import Header from "../../components/Header/Header.tsx";

const competencies = [
    {
        img: svgOne,
        alt: "Requirements Gathering",
        title: "Requirements Gathering",
        description: "I collaborate closely with you to uncover and understand your unique business needs. This thorough analysis ensures that the final solution aligns perfectly with your operations, processes, and strategic goals.",
        delay: "000",
    },
    {
        img: svgTwo,
        alt: "Design",
        title: "Design",
        description: "From intuitive user flows to compelling visual designs, every aspect is meticulously crafted to streamline and enhance your business operations. The result? A seamless user experience that reflects your brand and meets your objectives.",
        delay: "300",
    },
    {
        img: svgThree,
        alt: "Development",
        title: "Development",
        description: "I develop robust web applications using the latest technologies. My full-stack solutions ensure efficient performance, security, and scalability to meet your business needs.",
        delay: "600",
    },
    {
        img: svgFour,
        alt: "Deployment",
        title: "Deployment",
        description: "I handle the deployment process, ensuring your application is securely hosted and easily accessible. My cloud deployment solutions guarantee reliability and scalability.",
        delay: "900",
    }
];

const About = () => {

    const headerData = {
        heading: "Transform Your Business with Custom Information Systems.",
        desc: "Our mission is to partner with you throughout your entire digital transformation journey. From initial concept to full implementation, we are dedicated to crafting tailored technology solutions that align with your strategic goals and drive operational success."
    };

    return (
        <div className="about-container">
            <Header heading={headerData.heading} desc={headerData.desc}/>
            <div className="core-competencies">
                {competencies.map((competency, index) => (
                    <div className="competency-card" data-aos="fade-left" data-aos-delay={competency.delay} key={index}>
                        <h1>{index + 1}</h1>
                        <img src={competency.img} alt={competency.alt} className="competency-icon"/>
                        <div>
                            <h2>{competency.title}</h2>
                            <p>{competency.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;