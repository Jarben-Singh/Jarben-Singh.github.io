export type ProjectVariant = 'featured' | 'default' | 'locked';

export interface Project {
  slot: string;
  label: string;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  tags: string[];
  cta: string;
  href: string;
  variant: ProjectVariant;
}

export const projects: Project[] = [
  {
    slot: '01',
    label: 'ACTIVE MISSION',
    badge: 'VER 1.2',
    badgeClass: 'bg-primary-container text-tertiary-fixed',
    title: 'focus-focus',
    description:
      'Gamified productivity mobile app building deep focus habits through quests, RPG progression, and unlockable gems.',
    tags: ['React Native', 'Expo'],
    cta: 'OPEN QUEST LOG',
    href: '#',
    variant: 'featured',
  },
  {
    slot: '02',
    label: 'CARTRIDGE',
    badge: 'ASM',
    badgeClass: 'bg-secondary-container text-secondary',
    title: 'SNES Tetris',
    description:
      'A Tetris clone engineered from scratch for the Super Nintendo Entertainment System, written directly in assembly.',
    tags: ['65816 Assembly', 'WLA-DX'],
    cta: 'VIEW ROM SOURCE',
    href: '#',
    variant: 'default',
  },
  {
    slot: '03',
    label: 'ENTERPRISE',
    badge: 'FULL-STACK',
    badgeClass: 'bg-surface-container-high text-on-surface-variant',
    title: 'Land Sales System',
    description:
      'Sales and lot inventory management system engineered for a family land development business (Rancho Delgado).',
    tags: ['React', 'Spring Boot', 'MySQL'],
    cta: 'VIEW SYSTEM ARCHITECTURE',
    href: '#',
    variant: 'default',
  },
  {
    slot: '04',
    label: 'CIVIC TECH',
    badge: 'WEB APP',
    badgeClass: 'bg-surface-container-high text-on-surface-variant',
    title: 'EDSAGUA / CESPE',
    description:
      'Citizen water-service reporting and infrastructure incident telemetry web application for municipal utilities.',
    tags: ['Spring Boot', 'JavaScript'],
    cta: 'VIEW REPORTING ENGINE',
    href: '#',
    variant: 'default',
  },
  {
    slot: '05',
    label: 'NETPLAY GAME',
    badge: 'NETCODE',
    badgeClass: 'bg-secondary-container text-secondary',
    title: 'Rollback Fighter',
    description:
      'Minimal two-cube fighting game featuring custom deterministic UDP rollback netcode and frame prediction.',
    tags: ['C++', 'UDP'],
    cta: 'VIEW NETPLAY SOURCE',
    href: '#',
    variant: 'default',
  },
  {
    slot: '06',
    label: 'CLASSIFIED',
    badge: 'LOCKED',
    badgeClass: '',
    title: 'PROJECT CLASSIFIED',
    description:
      'A sixth classified game / systems project currently compiling in local development. Stay tuned for Stage 02.',
    tags: ['LOCKED', 'STAGE 02'],
    cta: 'RESTRICTED ACCESS',
    href: '',
    variant: 'locked',
  },
];

export const profile = {
  name: 'JARED DELGADO',
  role: 'Full-Stack Developer',
  school: 'Software Engineering student @ CETYS Universidad, Ensenada, Mexico',
  quote: '"I build apps, systems and games, one pixel at a time."',
  location: 'Ensenada, Mexico',
  email: 'delgadojared06@gmail.com',
  github: 'https://github.com/Jarben-Singh',
  githubLabel: 'github.com/Jarben-Singh',
  linkedin: 'https://linkedin.com/in/jaredelgado',
  linkedinLabel: 'linkedin.com/in/jaredelgado',
};
