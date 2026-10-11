export interface Project {
  title: string;
  /** Ruta dentro de /public. Si falta, se dibuja un cartucho genérico. */
  cartridge?: string;
  features: string[];
  href?: string;
  locked?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Focus Focus',
    cartridge: 'img/cartridge-focus.png',
    features: [
      'Mobile App with React Native',
      'Tool against procrastination',
      'Gamification system',
      'Widgets and native features',
    ],
    href: '#',
  },
  {
    title: 'SNES Tetris',
    cartridge: 'img/cartridge-tetris.png',
    features: [
      'Written from scratch in 65816 Assembly',
      'Runs on real Super Nintendo hardware',
      'Built with the WLA-DX toolchain',
      'Custom graphics and sound routines',
    ],
    href: '#',
  },
  {
    title: 'Land Sales System',
    features: [
      'Full-stack web application',
      'Lot inventory and sales tracking',
      'React + Spring Boot + MySQL',
      'Built for Rancho Delgado',
    ],
    href: '#',
  },
  {
    title: 'EDSAGUA / CESPE',
    features: [
      'Citizen water-service reporting',
      'Infrastructure incident telemetry',
      'Spring Boot + JavaScript',
      'Made for municipal utilities',
    ],
    href: '#',
  },
  {
    title: 'Rollback Fighter',
    features: [
      'Two-cube fighting game in C++',
      'Deterministic UDP rollback netcode',
      'Frame prediction and re-simulation',
      'Online play with minimal latency',
    ],
    href: '#',
  },
  {
    title: 'Classified',
    features: [
      'A new game / systems project',
      'Currently compiling in local dev',
      'Details are locked for now',
      'Stay tuned for Stage 02',
    ],
    locked: true,
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
