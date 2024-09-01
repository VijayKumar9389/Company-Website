import { AiOutlineDatabase, AiOutlineSync } from 'react-icons/ai';
import { RiBarChartLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { IoMdFiling } from 'react-icons/io';
import { BiErrorCircle } from 'react-icons/bi';

export const skillsData = [
    {
        title: 'Centralized Data Management',
        description: 'Enable real-time collaboration on a single platform to improve team collaboration and coordination.',
        icon: AiOutlineDatabase, // Database icon for data management
    },
    {
        title: 'Improved Efficiency',
        description: 'Boost productivity and save time with workflows and navigation tailored to fit your specific business processes.',
        icon: AiOutlineSync, // Sync icon for efficiency
    },
    {
        title: 'Enhanced Decision-Making',
        description: 'Support informed, strategic decision-making with powerful data visualization and real-time calculations.',
        icon: RiBarChartLine, // Bar chart icon for data visualization
    },
    {
        title: 'Accurate Record Keeping',
        description: 'Ensure reliable access to records, images, and files in the cloud, maintaining accuracy and integrity across all your data.',
        icon: IoMdFiling, // Filing icon for record keeping
    },
    {
        title: 'Reduced Errors',
        description: 'Prevent potential issues and ensure data integrity with built-in data validation and error-checking.',
        icon: BiErrorCircle, // Error circle icon for error reduction
    },
    {
        title: 'High User Adoption',
        description: 'Encourage high user adoption through continuous improvements based on user feedback and dedicated app support.',
        icon: FaUsers, // Users icon for user adoption
    },
];