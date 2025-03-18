import Dashboard from "../../assets/screenshoots/BaseApp/WellEraDash.png";
import Report from "../../assets/screenshoots/BaseApp/PictureTwo.png";
import Mobile from "../../assets/screenshoots/BaseApp/MobileComp.png";
import Login from "../../assets/screenshoots/BaseApp/WellEraLogin.png";
import Users from "../../assets/screenshoots/Users.png";
import Filters from "../../assets/screenshoots/Filters.png";

export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

export interface WorkData {
    title: string;
    desc?: string;
    sections: WorkSectionData[];
}

export const workData: WorkData[] = [
    {
        title: 'Designed for Efficiency, Built for Growth',
        desc: 'cloud-based platform empowers businesses with secure data management, advanced automation, and seamless collaboration. From effortless data access to intelligent decision-making, we help you enhance workflows, improve accuracy, and drive productivity',
        sections: [
            {
                description: 'Secure your system with a robust login authentication process, ensuring only authorized personnel can access confidential information.',
                imageUrl: Login,
            },
            {
                description: 'Navigate business data effortlessly with dynamic dashboards, interactive tables, and real-time insights',
                imageUrl: Dashboard,
            },
            {
                description: 'Find key information instantly using advanced search capabilities and real-time filtering options',
                imageUrl: Filters,
            },
            {
                description: 'Streamline operations with automation tools that handle repetitive tasks like data entry, calculations, and project tracking',
                imageUrl: Report,
            },
            {
                description: 'Enjoy a flawless user experience across all devices with a fully responsive design that adapts to different screen sizes and resolutions',
                imageUrl: Mobile,
            },
            {
                description: 'Enhance security with user role management, allowing you to control access to sensitive data and critical features',
                imageUrl: Users,
            },
        ],
    },
];
