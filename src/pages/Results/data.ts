import { AiOutlineDatabase, AiOutlineSync } from 'react-icons/ai';
import { RiBarChartLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { IoMdFiling } from 'react-icons/io';
import { BiErrorCircle } from 'react-icons/bi';

export const skillsData = [
    {
        title: 'Centralized Data Management',
        description: 'Centralize your data on a single platform to enhance team coordination and boost operational efficiency.',
        icon: AiOutlineDatabase, // Database icon for data management
    },
    {
        title: 'Improved Efficiency',
        description: 'Streamline workflows and automate routine tasks to boost productivity, save time, and reduce manual errors.',
        icon: AiOutlineSync, // Sync icon for efficiency
    },
    {
        title: 'Enhanced Decision-Making',
        description: 'Convert complex data into actionable insights with intuitive dashboards and visualizations for strategic decision-making.',
        icon: RiBarChartLine, // Bar chart icon for data visualization
    },
    {
        title: 'Accurate Record Keeping',
        description: 'Store events, data, images, and files securely in the cloud for reliable and easy access.',
        icon: IoMdFiling, // Filing icon for record keeping
    },
    {
        title: 'Reduced Errors',
        description: 'Minimize operational errors through advanced data processing and built-in error checking.',
        icon: BiErrorCircle, // Error circle icon for error reduction
    },
    {
        title: 'High User Adoption',
        description: 'Promote high user adoption with strong UX/UI design and regular updates based on user feedback.',
        icon: FaUsers, // Users icon for user adoption
    },
];