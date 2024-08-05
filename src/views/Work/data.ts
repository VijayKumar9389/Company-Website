import StakeholderInfo from "../../assets/screenshoots/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshoots/StakeholderFilter.png";
import StakeholderStats from "../../assets/screenshoots/StakeholderStats.png";
import DeliveryChanges from "../../assets/screenshoots/DeliveryChanges.png";
import DeliveryPlanning from "../../assets/screenshoots/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshoots/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshoots/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshoots/InventoryItems.png";
import InventoryRecords from "../../assets/screenshoots/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshoots/InventoryRecords.png";
import Users from "../../assets/screenshoots/Users.png";
import Inventory from "../../assets/screenshoots/Inventory.png";
import Losses from "../../assets/screenshoots/Losses.png";
import Upload from "../../assets/screenshoots/Upload.png";
import Validation from "../../assets/screenshoots/Validation.png";

import InventoryApp from "../../assets/Media/inventory.png"
import OutReach from "../../assets/Media/outreach.png"


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
    sections: WorkSection[];
}

export const workData: WorkData[] = [
    {
        title: 'Outreach Management',
        desc: 'Facilitates stakeholder information, delivery tracking, and inventory management to streamline the outreach program for Triton Public Awareness.',
        imageUrl: InventoryApp,
        sections: [
            {
                title: "Stakeholder Management",
                desc: "Empower your team with advanced tools to efficiently manage and engage stakeholders, ensuring precise information and seamless delivery planning.",
                sections: [
                    {
                        description: "Monitor project progress with real-time updates on stakeholder contact status, consultation stages, and delivery planning.",
                        imageUrl: StakeholderStats,
                    },
                    {
                        description: "Enhance targeted engagement by filtering stakeholders based on various criteria, enabling precise monitoring and interaction.",
                        imageUrl: StakeholderFilter,
                    },
                    {
                        description: "Gain comprehensive insights into stakeholders with visualization tools that reveal connections such as shared land titles and matching details.",
                        imageUrl: StakeholderInfo,
                    },
                    {
                        description: "Streamline data management with Excel file uploads, allowing for efficient import and organization of project data.",
                        imageUrl: Upload,
                    }
                ]
            },
            {
                title: 'Delivery Management',
                desc: 'Optimize your delivery operations with comprehensive tools for planning, executing, and tracking deliveries, ensuring efficiency and improved stakeholder satisfaction.',
                sections: [
                    {
                        description: 'Assign and manage packages with precision, ensuring accurate distribution of safety packages to stakeholders.',
                        imageUrl: DeliveryPlanning,
                    },
                    {
                        description: 'Set completion dates to automatically update stakeholder and delivery statuses, recording every interaction seamlessly.',
                        imageUrl: DeliveryStatus,
                    },
                    {
                        description: 'Enhance delivery efficiency with optimized route planning and assignment for field agents.',
                        imageUrl: DeliveryRoutes,
                    },
                    {
                        description: 'Adjust delivery details as needed, including package assignments and updates.',
                        imageUrl: DeliveryChanges,
                    },
                ],
            },
            {
                title: 'Inventory Management',
                desc: 'Master your inventory management with detailed records and precise control, ensuring optimal stock levels and accuracy.',
                sections: [
                    {
                        description: 'Maintain accurate inventory records with features for storing item images and quantities, providing reliable references.',
                        imageUrl: InventoryItems,
                    },
                    {
                        description: 'Track sent items meticulously, including delivery details and package types, for comprehensive documentation and analysis.',
                        imageUrl: InventoryRecords,
                    },
                    {
                        description: 'Create and manage custom packages, tracking item quantities within each package to ensure proper distribution and oversight.',
                        imageUrl: InventoryPackage,
                    },
                    {
                        description: 'Navigate and manage inventory, stakeholders, and delivery details with intuitive controls, facilitating seamless operations.',
                        imageUrl: Users,
                    },
                ],
            },
        ],
    },
    {
        title: 'Inventory Management',
        desc: 'Track and manage inventory for a property rental company, ensuring accurate record-keeping and receipt storage.',
        imageUrl: OutReach,
        sections: [
            {
                title: 'Inventory Tracker',
                desc: 'Efficiently oversee and monitor inventory for rental properties with a focus on precise record-keeping, receipt management, and operational accuracy.',
                sections: [
                    {
                        description: 'Manage items and receipts with ease, maintaining detailed and up-to-date records for effective inventory control.',
                        imageUrl: Inventory,
                    },
                    {
                        description: 'Track and report missing items to identify losses and generate insights across various locations, improving operational oversight.',
                        imageUrl: Losses,
                    },
                    {
                        description: 'Ensure accuracy with robust validation processes, preventing discrepancies and maintaining reliable inventory records.',
                        imageUrl: Validation,
                    },
                    {
                        description: 'Protect sensitive information with advanced user management and administrative controls, enhancing data security and privacy.',
                        imageUrl: Users,
                    },
                ],
            }
        ],
    }
    // Add more projects as needed
];

