import {  AiOutlineCode, AiOutlineCloudServer } from 'react-icons/ai';
import { FaShieldAlt, FaDatabase, FaCodeBranch, FaChartLine } from 'react-icons/fa';
import { SiTypescript, SiGithub } from 'react-icons/si';

export const skillsData = [
    {
        title: 'Centralized Data Management',
        description: 'Manage your data from a single, accessible platform, enhancing coordination and operational efficiency.',
        icon: AiOutlineCloudServer, // Updated to a cloud server icon for data management
    },
    {
        title: 'Enhanced Decision-Making',
        description: 'Visualize and streamline information to support informed decision-making and drive improvements.',
        icon: FaChartLine, // Using chart line icon to represent data visualization and decision-making
    },
    {
        title: 'Responsive Design',
        description: 'Provide a superior user experience across all devices with adaptive designs that boost engagement.',
        icon: SiTypescript, // TypeScript for modern frontend development
    },
    {
        title: 'Robust Security',
        description: 'Implement advanced security measures, including endpoint authentication and admin authorization, to safeguard your data.',
        icon: FaShieldAlt,
    },
    {
        title: 'Error-Free Data Processing',
        description: 'Utilize sophisticated data processing methods with built-in error checking to ensure data accuracy.',
        icon: FaDatabase, // Database icon for data processing
    },
    {
        title: 'Optimized User Flows',
        description: 'Design user workflows that enhance productivity, reduce errors, and streamline operations.',
        icon: AiOutlineCode, // Code icon for development and optimization
    },
    {
        title: 'Advanced Security Measures',
        description: 'Develop secure login systems and manage user credentials to protect sensitive information and control access.',
        icon: FaShieldAlt,
    },
    {
        title: 'Efficient Database Architecture',
        description: 'Design relational databases that accurately map and reflect your business data for optimal performance.',
        icon: FaDatabase,
    },
    {
        title: 'Accelerated Development',
        description: 'Use the latest technologies to speed up development and deliver high-quality applications on time.',
        icon: SiGithub, // GitHub icon for development and version control
    },
    {
        title: 'Scalable Solutions',
        description: 'Build systems that scale with your business, allowing for future feature expansions and growth.',
        icon: FaCodeBranch, // Code branch icon for scalability and growth
    }
];