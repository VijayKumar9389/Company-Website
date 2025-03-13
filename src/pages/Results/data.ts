import { FaHandshake, FaChartLine, FaUserCheck, FaUsers } from 'react-icons/fa6';
import { MdOutlineSupportAgent, MdOutlineStorage, MdOutlineSync } from 'react-icons/md';
import { BiErrorCircle } from 'react-icons/bi';

export const skillsData = [
    {
        title: "Easy Onboarding",
        description: "Simplify complex processes with an intuitive interface that seamlessly guides users through the system.",
        icon: FaUserCheck, // Clear onboarding experience
    },
    {
        title: 'Enhanced Collaboration',
        description: 'Facilitate real-time teamwork across all devices with a unified platform that streamlines coordination.',
        icon: FaHandshake, // Represents collaboration and teamwork
    },
    {
        title: 'Increased Productivity',
        description: 'Optimize operations with automated workflows that improve task management and overall efficiency.',
        icon: MdOutlineSync, // Represents process automation and efficiency
    },
    {
        title: 'Reliable Storage',
        description: 'Securely store all your data, images, and files with cloud-based record-keeping and accessibility.',
        icon: MdOutlineStorage, // Modern storage & security representation
    },
    {
        title: 'Reduced Errors',
        description: 'Prevent data inaccuracies with built-in validation, error checking, and safeguards against accidental deletions.',
        icon: BiErrorCircle, // Represents error reduction and validation
    },
    {
        title: 'Enhanced Decision-Making',
        description: 'Transform raw data into meaningful insights with visual analytics, reports, and trend forecasting.',
        icon: FaChartLine, // Represents data visualization and reporting
    },
    {
        title: 'High User Adoption',
        description: 'Encourage widespread adoption with a continuously evolving system tailored to user needs and feedback.',
        icon: FaUsers, // Represents user growth and engagement
    },
    {
        title: 'Dedicated Support',
        description: 'Access expert support for troubleshooting, updates, and ongoing system improvements.',
        icon: MdOutlineSupportAgent, // Represents dedicated assistance
    },
];