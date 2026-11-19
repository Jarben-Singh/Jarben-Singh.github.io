export type Lang = 'en' | 'es';
export type Localized<T> = Record<Lang, T>;
export type Platform = 'WEB' | 'MOBILE' | 'GAME' | 'HARDWARE';

/** Filtros del estante, en orden. */
export const platforms: { id: Platform | 'ALL'; label: Localized<string> }[] = [
  { id: 'ALL', label: { en: 'ALL', es: 'TODOS' } },
  { id: 'WEB', label: { en: 'WEB', es: 'WEB' } },
  { id: 'MOBILE', label: { en: 'MOBILE', es: 'MÓVIL' } },
  { id: 'GAME', label: { en: 'GAME', es: 'JUEGO' } },
  { id: 'HARDWARE', label: { en: 'HARDWARE', es: 'HARDWARE' } },
];

export interface Project {
  title: string;
  /** Plataforma para los filtros. Sin plataforma solo aparece encendido con ALL. */
  platform?: Platform;
  /**
   * Arte del cartucho: PNG de 128×80 px (proporción real 135×85 mm), ruta
   * dentro de /public. Si falta, se dibuja el cartucho en CSS.
   */
  cartridge?: string;
  /** Token de color (de global.css) para la etiqueta del cartucho dibujado en CSS. */
  label?: string;
  features: Localized<string[]>;
  stack: string[];
  href?: string;
  locked?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Focus Focus',
    platform: 'MOBILE',
    cartridge: 'img/cartridge-focus.png',
    features: {
      en: [
        'Mobile App with React Native',
        'Tool against procrastination',
        'Gamification system',
        'Widgets and native features',
      ],
      es: [
        'App móvil con React Native',
        'Herramienta contra la procrastinación',
        'Sistema de gamificación',
        'Widgets y funciones nativas',
      ],
    },
    stack: ['React Native'],
    href: '#',
  },
  {
    title: 'SNES Tetris',
    platform: 'HARDWARE',
    cartridge: 'img/cartridge-tetris.png',
    features: {
      en: [
        'Written from scratch in 65816 Assembly',
        'Runs on real Super Nintendo hardware',
        'Built with the WLA-DX toolchain',
        'Custom graphics and sound routines',
      ],
      es: [
        'Escrito desde cero en ensamblador 65816',
        'Corre en hardware real de Super Nintendo',
        'Hecho con la toolchain WLA-DX',
        'Rutinas propias de gráficos y sonido',
      ],
    },
    stack: ['65816 Assembly', 'WLA-DX'],
    href: '#',
  },
  {
    title: 'Land Sales System',
    platform: 'WEB',
    cartridge: 'img/cartridge-rancho.png',
    features: {
      en: [
        'Full-stack web application',
        'Lot inventory and sales tracking',
        'React + Spring Boot + MySQL',
        'Built for Rancho Delgado',
      ],
      es: [
        'Aplicación web full-stack',
        'Inventario de lotes y control de ventas',
        'React + Spring Boot + MySQL',
        'Hecho para Rancho Delgado',
      ],
    },
    stack: ['React', 'Spring Boot', 'MySQL'],
    href: '#',
  },
  {
    title: 'EDSAGUA / CESPE',
    platform: 'WEB',
    cartridge: 'img/cartridge-ensagua.png',
    features: {
      en: [
        'Citizen water-service reporting',
        'Infrastructure incident telemetry',
        'Spring Boot + JavaScript',
        'Made for municipal utilities',
      ],
      es: [
        'Reportes ciudadanos del servicio de agua',
        'Telemetría de incidentes de infraestructura',
        'Spring Boot + JavaScript',
        'Hecho para organismos municipales de agua',
      ],
    },
    stack: ['Spring Boot', 'JavaScript'],
    href: '#',
  },
  {
    title: 'Socotlalli',
    platform: 'WEB',
    cartridge: 'img/cartridge-tlalli.png',
    features: {
      en: [
        'Turns NASA Earth satellite data into music, so blind and low-vision users can explore climate by ear',
        'Custom in-browser audio engine built with Tone.js and TypeScript',
        'Same image, same music: calibrated, fully deterministic sound',
        '8 NASA datasets with unique instrument voices, via a Python pipeline',
      ],
      es: [
        'Convierte datos satelitales de la Tierra de la NASA en música, para que personas ciegas o con baja visión exploren el clima de oído',
        'Motor de audio propio en el navegador, hecho con Tone.js y TypeScript',
        'Misma imagen, misma música: sonido calibrado y totalmente determinista',
        '8 datasets de la NASA con voces instrumentales únicas, mediante un pipeline en Python',
      ],
    },
    stack: ['React', 'TypeScript'],
    href: '#',
  },
  {
    title: 'Classified',
    features: {
      en: [
        'A new game / systems project',
        'Currently compiling in local dev',
        'Details are locked for now',
        'Stay tuned for Stage 02',
      ],
      es: [
        'Un nuevo proyecto de juego / sistemas',
        'Compilando en desarrollo local',
        'Los detalles están bloqueados por ahora',
        'Atento al Stage 02',
      ],
    },
    stack: [],
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
