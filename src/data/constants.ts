// thoda zada ts ho gya idhar
export enum SkillNames {
  UNITY = "unity",
  UNREAL = "unreal",
  BLENDER = "blender",
  SUBSTANCE_PAINTER = "substance_painter",
  PHOTOSHOP = "photoshop",
  ILLUSTRATOR = "illustrator",
  INDESIGN = "indesign",
  PREMIERE_PRO = "premiere_pro",
  AFTER_EFFECTS = "after_effects",
  FIGMA = "figma",
  CANVA = "canva",
  HTML = "html",
  CSS = "css",
  JS = "js",
  JSON = "json",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.UNITY]: {
    id: 1,
    name: "unity",
    label: "Unity",
    shortDescription: "Prototypage gameplay, UI, itérations et intégration.",
    color: "#111111",
    icon: "/icons/unity.svg",
  },
  [SkillNames.UNREAL]: {
    id: 2,
    name: "unreal",
    label: "Unreal Engine",
    shortDescription: "Exploration moteur, scènes, logique et pipeline temps réel.",
    color: "#111111",
    icon: "/icons/unreal.svg",
  },
  [SkillNames.BLENDER]: {
    id: 3,
    name: "blender",
    label: "Blender",
    shortDescription: "Modélisation, rendu, animation simple, exports optimisés.",
    color: "#f5792a",
    icon: "/icons/blender.svg",
  },
  [SkillNames.SUBSTANCE_PAINTER]: {
    id: 4,
    name: "substance_painter",
    label: "Substance Painter",
    shortDescription: "Texturing PBR, matériaux et finitions propres pour jeu.",
    color: "#e74c3c",
    icon: "/icons/substance-painter.svg",
  },
  [SkillNames.PHOTOSHOP]: {
    id: 5,
    name: "photoshop",
    label: "Photoshop",
    shortDescription: "Retouche, compositing, assets UI et visuels.",
    color: "#31a8ff",
    icon: "/icons/photoshop.svg",
  },
  [SkillNames.ILLUSTRATOR]: {
    id: 6,
    name: "illustrator",
    label: "Illustrator",
    shortDescription: "Vectoriel, logos, pictos, UI kits.",
    color: "#ff9a00",
    icon: "/icons/illustrator.svg",
  },
  [SkillNames.INDESIGN]: {
    id: 7,
    name: "indesign",
    label: "InDesign",
    shortDescription: "Mise en page, dossiers, print & exports.",
    color: "#ff3366",
    icon: "/icons/indesign.svg",
  },
  [SkillNames.PREMIERE_PRO]: {
    id: 8,
    name: "premiere_pro",
    label: "Premiere Pro",
    shortDescription: "Montage, rythme, export web et habillage.",
    color: "#9999ff",
    icon: "/icons/premiere-pro.svg",
  },
  [SkillNames.AFTER_EFFECTS]: {
    id: 9,
    name: "after_effects",
    label: "After Effects",
    shortDescription: "Motion design, titrage, transitions et compositing léger.",
    color: "#d291ff",
    icon: "/icons/after-effects.svg",
  },
  [SkillNames.FIGMA]: {
    id: 10,
    name: "figma",
    label: "Figma",
    shortDescription: "Wireframes, UI/UX, protos et design system.",
    color: "#a259ff",
    icon: "/icons/figma.svg",
  },
  [SkillNames.CANVA]: {
    id: 11,
    name: "canva",
    label: "Canva",
    shortDescription: "Visuels rapides, posts, présentations et templates.",
    color: "#00c4cc",
    icon: "/icons/canva.svg",
  },
  [SkillNames.HTML]: {
    id: 12,
    name: "html",
    label: "HTML",
    shortDescription: "Structure sémantique et intégration propre.",
    color: "#e34c26",
    icon: "/icons/html.svg",
  },
  [SkillNames.CSS]: {
    id: 13,
    name: "css",
    label: "CSS",
    shortDescription: "Mise en forme, responsive et détails UI.",
    color: "#2965f1",
    icon: "/icons/css.svg",
  },
  [SkillNames.JS]: {
    id: 14,
    name: "js",
    label: "JavaScript",
    shortDescription: "Interactions, logique front et scripts.",
    color: "#f0db4f",
    icon: "/icons/javascript.svg",
  },
  [SkillNames.JSON]: {
    id: 15,
    name: "json",
    label: "JSON",
    shortDescription: "Données, configs et échanges simples.",
    color: "#111111",
    icon: "/icons/json.svg",
  },

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2024",
    endDate: "Present",
    title: "Full Stack Engineer",
    company: "OmniNexus",
    description: [
      "Developing scalable full-stack applications involved in complex systems.",
      "Optimizing database performance and query efficiency.",
      "Collaborating on architectural decisions and technical strategy.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2022",
    endDate: "Dec 2024",
    title: "Freelance Developer",
    company: "Live & Learn",
    description: [
      "Delivered custom web solutions for diverse clients.",
      "Managed full project lifecycles from design to deployment.",
      "Maintained high client satisfaction through effective communication.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.WORDPRESS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

