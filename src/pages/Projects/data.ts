import StakeholderInfo from "../../assets/screenshoots/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshoots/StakeholderFilter.png";
import StakeholderStats from "../../assets/screenshoots/StakeholderStats.png";
import DeliveryChanges from "../../assets/screenshoots/DeliveryChanges.png";
import DeliveryPlanning from "../../assets/screenshoots/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshoots/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshoots/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshoots/InventoryItems.png";
import InventoryRecords from "../../assets/screenshoots/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshoots/InventoryPackage.png";
import Users from "../../assets/screenshoots/Users.png";
import Inventory from "../../assets/screenshoots/Inventory.png";
import Losses from "../../assets/screenshoots/Losses.png";
import Upload from "../../assets/screenshoots/Upload.png";
import Validation from "../../assets/screenshoots/Validation.png";

import InventoryApp from "../../assets/Media/inventory.png"
import OutReach from "../../assets/Media/outreach.png"

import Triton from "../../assets/Triton Logo.png"
import Emerald from "../../assets/Emerald Logo.jpg"


// Define the new WorkSection interface
export interface WorkSection {
    title: string;
    desc: string;
    sections: WorkSectionData[];
}

// Define the WorkSectionData interface
export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

// Update the WorkData interface to use the new WorkSection type
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl?: string;
    logo?: string;
    sections: WorkSection[];
}

export const workData: WorkData[] = [
    {
        title: 'Outreach Management',
        desc: 'Streamline stakeholder management, delivery tracking, and inventory for Triton Public Awareness.',
        imageUrl: OutReach,
        logo: Triton,
        sections: [
            {
                title: "Stakeholder Management",
                desc: "Manage stakeholder interactions and delivery planning with advanced tools for efficiency.",
                sections: [
                    {
                        description: "Monitor real-time updates on stakeholder status and project progress.",
                        imageUrl: StakeholderStats,
                    },
                    {
                        description: "Filter stakeholders by various criteria to tailor engagement and communication.",
                        imageUrl: StakeholderFilter,
                    },
                    {
                        description: "Visualize stakeholder connections and details to gain deeper insights.",
                        imageUrl: StakeholderInfo,
                    },
                    {
                        description: "Import and organize project data using Excel file uploads for streamlined data management.",
                        imageUrl: Upload,
                    }
                ]
            },
            {
                title: 'Delivery Management',
                desc: 'Enhance delivery operations with tools for precise planning, tracking, and optimization.',
                sections: [
                    {
                        description: 'Assign and manage safety packages with accuracy to ensure correct delivery.',
                        imageUrl: DeliveryPlanning,
                    },
                    {
                        description: 'Automatically update delivery and stakeholder statuses with set completion dates.',
                        imageUrl: DeliveryStatus,
                    },
                    {
                        description: 'Plan and optimize routes for field agents to increase delivery efficiency.',
                        imageUrl: DeliveryRoutes,
                    },
                    {
                        description: 'Modify delivery details, including package assignments and updates, as needed.',
                        imageUrl: DeliveryChanges,
                    },
                ],
            },
            {
                title: 'Inventory Management',
                desc: 'Maintain precise inventory records and control with detailed tracking and management features.',
                sections: [
                    {
                        description: 'Create and manage custom packages, tracking item quantities for accurate oversight.',
                        imageUrl: InventoryPackage,
                    },
                    {
                        description: 'Store images and quantities of items to ensure accurate inventory records.',
                        imageUrl: InventoryItems,
                    },
                    {
                        description: 'Track sent items with detailed records of deliveries and package types.',
                        imageUrl: InventoryRecords,
                    },
                    {
                        description: 'Navigate and manage inventory, stakeholder data, and delivery details with intuitive controls.',
                        imageUrl: InventoryRecords,
                    },
                ],
            },
        ],
    },
    {
        title: 'Inventory Management',
        desc: 'Efficiently manage rental property inventory with accurate record-keeping and receipt storage for Emerald Executive Housing.',
        imageUrl: InventoryApp,
        logo: Emerald,
        sections: [
            {
                title: 'Inventory Tracker',
                desc: 'Oversee rental property inventory with a focus on detailed record-keeping and accurate management.',
                sections: [
                    {
                        description: 'Maintain up-to-date records of items and receipts for effective inventory management.',
                        imageUrl: Inventory,
                    },
                    {
                        description: 'Identify and report missing items to improve inventory control and oversight across locations.',
                        imageUrl: Losses,
                    },
                    {
                        description: 'Validate inventory data rigorously to prevent discrepancies and ensure accuracy.',
                        imageUrl: Validation,
                    },
                    {
                        description: 'Implement robust user management and admin accounts to protect sensitive features.',
                        imageUrl: Users,
                    },
                ],
            }
        ],
    }
    // Add more projects as needed
];

