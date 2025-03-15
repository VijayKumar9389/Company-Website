import OutReach from "../../../assets/Media/outreach.png";
import Triton from "../../../assets/Triton Logo.png";
import StakeholderFilter from "../../../assets/screenshoots/StakeholderFilter.png";
import StakeholderInfo from "../../../assets/screenshoots/Stakeholders.png";
import Upload from "../../../assets/screenshoots/Upload.png";
import DeliveryPlanning from "../../../assets/screenshoots/DeliveryPlanning.png";
import DeliveryStatus from "../../../assets/screenshoots/DeliveryStatus.png";
import DeliveryRoutes from "../../../assets/screenshoots/DeliveryRoutes.png";
import InventoryPackage from "../../../assets/screenshoots/InventoryPackage.png";
import InventoryItems from "../../../assets/screenshoots/InventoryItems.png";
import InventoryRecords from "../../../assets/screenshoots/InventoryRecords.png";


// Define the structure for each section within a project
export interface WorkSection {
    title: string;
    desc: string;
    sections: WorkSectionData[];
}

// Define the structure for individual subsections
export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

// Define the structure for project data.ts
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl: string;
    logo: string;
    link: string;
    sections: WorkSection[];
}

export const Ontract: WorkData = {
    title: 'Outreach Management',
    desc: 'OnTract, developed for Triton Public Awareness, streamlines stakeholder engagement, delivery logistics, and inventory tracking. The platform features an intuitive interface for managing stakeholder contacts, coordinating safety package distribution, and enabling real-time tracking of deliveries.',
    imageUrl: OutReach,
    logo: Triton,
    link: '/ontract',
    sections: [
        {
            title: 'Stakeholder Management',
            desc: 'Efficiently organize and manage stakeholder interactions with ease.',
            sections: [
                {
                    description: 'Filter stakeholders based on various criteria to enhance outreach efforts and engagement efficiency.',
                    imageUrl: StakeholderFilter,
                },
                {
                    description: 'Visualize stakeholder relationships and access detailed contact information for better insights.',
                    imageUrl: StakeholderInfo,
                },
                {
                    description: 'Easily upload and normalize project data from Excel, ensuring organized and consistent database storage.',
                    imageUrl: Upload,
                },
            ],
        },
        {
            title: 'Delivery Management',
            desc: 'Optimize delivery processes with comprehensive tracking and coordination features.',
            sections: [
                {
                    description: 'Manage safety packages, adjust logistics, and modify delivery details to ensure timely and accurate distribution.',
                    imageUrl: DeliveryPlanning,
                },
                {
                    description: 'Automatically update the status of stakeholders and deliveries upon completion, simplifying tracking and reporting.',
                    imageUrl: DeliveryStatus,
                },
                {
                    description: 'Optimize delivery routes for field agents, reducing travel time and enhancing overall efficiency.',
                    imageUrl: DeliveryRoutes,
                },
            ],
        },
        {
            title: 'Inventory Management',
            desc: 'Maintain full control over inventory and ensure accurate package tracking and distribution at all times.',
            sections: [
                {
                    description: 'Create and customize packages while tracking real-time inventory counts for better accuracy.',
                    imageUrl: InventoryPackage,
                },
                {
                    description: 'Store item images and quantities for precise record-keeping and easy reference.',
                    imageUrl: InventoryItems,
                },
                {
                    description: 'Track delivered items, pending deliveries, and package details, ensuring optimal inventory management and oversight.',
                    imageUrl: InventoryRecords,
                },
            ],
        },
    ],
};