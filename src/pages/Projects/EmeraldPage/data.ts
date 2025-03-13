import InventoryApp from "../../../assets/Media/Collab.png";
import EmeraldLogo from "../../../assets/Emerald Logo.png";
import Losses from "../../../assets/screenshoots/Losses.png";
import Inventory from "../../../assets/screenshoots/Inventory.png";
import Rentals from "../../../assets/screenshoots/Rentals.png";
import Questions from "../../../assets/screenshoots/Questions.png";

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
    desc: 'The Inventory Tracker, developed for Emerald Executive Housing, modernizes rental property inventory management while integrating digital marketing strategies to enhance online presence and customer engagement. (In Progress)',
    imageUrl: InventoryApp,
    logo: EmeraldLogo,
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
}