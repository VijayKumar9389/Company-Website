import { FaAws, FaReact, FaSass } from 'react-icons/fa';
import { TbBrandNodejs, TbBrandRedux } from 'react-icons/tb';
import { SiExpress, SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export interface TechData {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;  // Type icon components with SVG props
    title: string;
}


export const OntractTech: TechData[] = [
    { icon: FaReact, title: 'React' },
    { icon: TbBrandNodejs, title: 'Node.js' },
    { icon: SiExpress, title: 'Express' },
    { icon: TbBrandRedux, title: 'Redux' },
    { icon: FaAws, title: 'AWS' },
    { icon: FaSass, title: 'SASS' },
    { icon: SiTypescript, title: 'TypeScript' },
    { icon: BiLogoPostgresql, title: 'PostgreSQL' }
];

export const EmeraldTech: TechData[] = [
    { icon: FaReact, title: 'React' },
    { icon: TbBrandNodejs, title: 'Node.js' },
    { icon: SiExpress, title: 'Express' },
    { icon: TbBrandRedux, title: 'Redux' },
    { icon: FaAws, title: 'AWS' },
    { icon: FaSass, title: 'SASS' },
    { icon: SiTypescript, title: 'TypeScript' },
    { icon: BiLogoPostgresql, title: 'PostgreSQL' }
];