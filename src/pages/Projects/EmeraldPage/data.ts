import InventoryApp from "../../../assets/Media/Collab.png";
import EmeraldLogo from "../../../assets/Emerald Logo.png";
import Losses from "../../../assets/screenshoots/Losses.png";
import Inventory from "../../../assets/screenshoots/Inventory.png";
import Rentals from "../../../assets/screenshoots/Rentals.png";
import Questions from "../../../assets/screenshoots/Questions.png";
import Writing from "../../../assets/screenshoots/Copywrite.png";

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

export const Emerald: WorkData = {
    title: 'Inventory Management & Digital Marketing',
    desc: 'Bringing efficiency to inventory management while driving online engagement and visibility.',
    imageUrl: InventoryApp,
    logo: EmeraldLogo,
    link: '/emerald',
    sections: [
        {
            title: 'Inventory App & Website',
            desc: 'Bringing efficiency to inventory management while driving online engagement and visibility.',
            sections: [
                {
                    description: 'Manage rental property inventory with ease, including receipt storage for accurate record-keeping and quick access.',
                    imageUrl: Losses,
                },
                {
                    description: 'Track missing items, monitor total costs, and resolve discrepancies across multiple rental locations for accurate inventory management.',
                    imageUrl: Inventory,
                },
                {
                    description: 'Design an engaging website that showcases rental properties and attracts potential tenants.',
                    imageUrl: Rentals,
                },
                {
                    description: 'Create impactful content and design elements to establish a strong and cohesive brand identity.',
                    imageUrl: Writing,
                },
                {
                    description: 'Integrated a customer inquiry tracking feature into the inventory app, allowing easy management of tenant questions.',
                    imageUrl: Questions,
                },
            ],
        },
    ],
};