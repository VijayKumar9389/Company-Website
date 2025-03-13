import StakeholderInfo from "../../../../assets/screenshoots/Inventory.png";
import Deliveries from "../../../../assets/screenshoots/Losses.png";
import Upload from "../../../../assets/screenshoots/Upload.png";
import Mobile from "../../../../assets/screenshoots/Rentals.png";

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
        title: 'Custom Web Applications',
        desc: 'Information systems designed for seamless access on any device with internet connectivity.',
        sections: [
            {
                description: 'Stream line and visualize business information to empower informed decision-making and improve operational efficiency.',
                imageUrl: StakeholderInfo,
            },
            {
                description: 'Implement responsive designs ensuring accessibility and optimal user experience across all devices, enhancing usability and engagement.',
                imageUrl: Deliveries,
            },
            {
                description: 'Integrate robust endpoint authentication and admin authorization to safeguard sensitive data.ts and ensure secure access control.',
                imageUrl: Upload,
            },
            {
                description: 'Utilize advanced forms and data.ts processing techniques, incorporating error checking to prevent data.ts discrepancies and enhance data.ts integrity.',
                imageUrl: Mobile,
            },
        ],
    }
];

