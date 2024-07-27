import StakeholderInfo from "../../assets/screenshoots/BaseApp/PictureOne.png";
import Deliveries from "../../assets/screenshoots/BaseApp/PictureTwo.png";
import Upload from "../../assets/screenshoots/BaseApp/MobileComp.png";
import Mobile from "../../assets/screenshoots/BaseApp/PictureThree.png";

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
        title: 'Sleek, Responsive Interface for Seamless Data Management',
        desc: 'Our web applications are deployed to the cloud, ensuring that they are developed once and accessible from any device with an internet connection. This allows you to effortlessly visualize and manage your business data from anywhere, at any time.',
        sections: [
            {
                description: 'Convert raw data into clear, actionable insights through dashboards, tables, and responsive lists',
                imageUrl: StakeholderInfo,
            },
            {
                description: 'Streamline repetitive tasks such as data entry, calculations, and report generation to save your team’s time',
                imageUrl: Deliveries,
            },
            {
                description: 'Ensure your application adapts to any device and screen size for a seamless user experience',
                imageUrl: Upload,
            },
            {
                description: 'Ensure only authorized individuals can access your data with secure login screen',
                imageUrl: Mobile,
            },
        ],
    }
];

