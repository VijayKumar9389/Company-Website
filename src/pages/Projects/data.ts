import StakeholderInfo from "../../assets/screenshoots/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshoots/StakeholderFilter.png";
import DeliveryPlanning from "../../assets/screenshoots/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshoots/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshoots/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshoots/InventoryItems.png";
import InventoryRecords from "../../assets/screenshoots/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshoots/InventoryPackage.png";
import Inventory from "../../assets/screenshoots/Inventory.png";
import Losses from "../../assets/screenshoots/Losses.png";
import Upload from "../../assets/screenshoots/Upload.png";
import Rentals from "../../assets/screenshoots/Rentals.png";
import Questions from "../../assets/screenshoots/Questions.png";

import InventoryApp from "../../assets/Media/Collab.png";
import OutReach from "../../assets/Media/outreach.png";

import Triton from "../../assets/Triton Logo.png";
import Emerald from "../../assets/Emerald Logo.png";

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
    imageUrl?: string;
    logo?: string;
    link: string;
    sections: WorkSection[];
}

// Work data.ts for each project
export const workData: WorkData[] = [
    {
        title: 'Outreach Management',
        desc: 'OnTract, developed for Triton Public Awareness, streamlines stakeholder engagement, delivery logistics, and inventory tracking. The platform offers an intuitive interface to update stakeholder contacts, manage safety package distribution, and coordinate deliveries with real-time tracking.',
        imageUrl: OutReach,
        logo: Triton,
        link: '/ontract',
        sections: [
            {
                title: 'Stakeholder Management',
                desc: 'Efficiently organize and manage stakeholder interactions.',
                sections: [
                    {
                        description: 'Filter stakeholders based on multiple criteria to enhance engagement and outreach efficiency.',
                        imageUrl: StakeholderFilter,
                    },
                    {
                        description: 'Gain insights by visualizing stakeholder relationships and detailed contact information.',
                        imageUrl: StakeholderInfo,
                    },
                    {
                        description: 'Seamlessly upload and normalize project data.ts from Excel, ensuring structured database storage.',
                        imageUrl: Upload,
                    },
                ],
            },
            {
                title: 'Delivery Management',
                desc: 'Optimize package distribution and tracking for seamless deliveries.',
                sections: [
                    {
                        description: 'Assign and modify safety packages, manage delivery details, and adjust logistics to ensure timely distribution.',
                        imageUrl: DeliveryPlanning,
                    },
                    {
                        description: 'Automatically update stakeholder and delivery statuses upon completion for streamlined tracking.',
                        imageUrl: DeliveryStatus,
                    },
                    {
                        description: 'Optimize delivery routes for field agents, reducing travel time and improving efficiency.',
                        imageUrl: DeliveryRoutes,
                    },
                ],
            },
            {
                title: 'Inventory Management',
                desc: 'Maintain precise inventory control and package tracking.',
                sections: [
                    {
                        description: 'Create and customize packages while maintaining real-time inventory counts.',
                        imageUrl: InventoryPackage,
                    },
                    {
                        description: 'Store item images and quantities for accurate record-keeping and quick reference.',
                        imageUrl: InventoryItems,
                    },
                    {
                        description: 'Track delivered items, pending shipments, and package details for enhanced inventory management.',
                        imageUrl: InventoryRecords,
                    },
                ],
            },
        ],
    },
    {
        title: 'Inventory Management & Digital Marketing',
        desc: 'The Inventory Tracker, developed for Emerald Executive Housing, modernizes rental property inventory management while integrating digital marketing strategies to enhance online presence and customer engagement. (In Progress)',
        imageUrl: InventoryApp,
        logo: Emerald,
        link: '/emerald',
        sections: [
            {
                title: 'Inventory App & Website',
                desc: 'Streamlining inventory tracking and enhancing digital branding.',
                sections: [
                    {
                        description: 'Effortlessly manage rental property inventory with receipt storage for accurate record-keeping.',
                        imageUrl: Losses,
                    },
                    {
                        description: 'Identify missing items, track total costs, and resolve discrepancies across multiple rental locations.',
                        imageUrl: Inventory,
                    },
                    {
                        description: 'Improve online visibility with an interactive website designed to engage potential tenants effectively.',
                        imageUrl: Rentals,
                    },
                    {
                        description: 'Enhance customer interaction by centralizing inquiries through integrated contact forms within the app.',
                        imageUrl: Questions,
                    },
                ],
            },
        ],
    },
];