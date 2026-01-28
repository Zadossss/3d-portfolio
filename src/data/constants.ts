// thoda zada ts ho gya idhar
export enum SkillNames {
  UNITY = "unity",
  UNREAL = "unreal",
  BLENDER = "blender",

  HTML = "html",
  CSS = "css",
  JS = "js",
  JSON = "json",

  FIGMA = "figma",
  PHOTOSHOP = "photoshop",
  ILLUSTRATOR = "illustrator",
  INDESIGN = "indesign",
  LIGHTROOM = "lightroom",

  PREMIERE_PRO = "premiere-pro",
  AFTER_EFFECTS = "after-effects",
  SUBSTANCE_PAINTER = "substance-painter",
  DAVINCI = "davinci",

  WORDPRESS = "wordpress",
  SPLINE = "spline",
  TWINE = "twine",
  CHATGPT = "chatgpt",

  VISUAL_STUDIO_CODE = "visual-studio-code",
  XCODE = "xcode",
  PYTHON = "python",
  SUITE_OFFICE = "suite-office",
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
    icon: "/assets/icons/unity.svg",
  },

  [SkillNames.UNREAL]: {
    id: 2,
    name: "unreal",
    label: "Unreal Engine",
    shortDescription: "Moteur temps réel, logique Blueprint et scènes 3D.",
    color: "#111111",
    icon: "/assets/icons/unrealengine.svg",
  },

  [SkillNames.BLENDER]: {
    id: 3,
    name: "blender",
    label: "Blender",
    shortDescription: "Modélisation, lighting, baking et rendu 3D.",
    color: "#111111",
    icon: "/assets/icons/blender.svg",
  },

  [SkillNames.HTML]: {
    id: 4,
    name: "html",
    label: "HTML",
    shortDescription: "Structure sémantique et accessibilité web.",
    color: "#111111",
    icon: "/assets/icons/html5.svg",
  },

  [SkillNames.CSS]: {
    id: 5,
    name: "css",
    label: "CSS",
    shortDescription: "Mise en page, responsive design et animations.",
    color: "#111111",
    icon: "/assets/icons/css.svg",
  },

  [SkillNames.JS]: {
    id: 6,
    name: "js",
    label: "JavaScript",
    shortDescription: "Logique applicative et interactions dynamiques.",
    color: "#111111",
    icon: "/assets/icons/javascript.svg",
  },

  [SkillNames.JSON]: {
    id: 7,
    name: "json",
    label: "JSON",
    shortDescription: "Échange de données et structuration d’API.",
    color: "#111111",
    icon: "/assets/icons/json.svg",
  },

  [SkillNames.FIGMA]: {
    id: 8,
    name: "figma",
    label: "Figma",
    shortDescription: "UI/UX design, prototypage et collaboration.",
    color: "#111111",
    icon: "/assets/icons/figma.svg",
  },

  [SkillNames.PHOTOSHOP]: {
    id: 9,
    name: "photoshop",
    label: "Photoshop",
    shortDescription: "Retouche, compositing et création graphique.",
    color: "#111111",
    icon: "/assets/icons/photoshop.svg",
  },

  [SkillNames.ILLUSTRATOR]: {
    id: 10,
    name: "illustrator",
    label: "Illustrator",
    shortDescription: "Illustration vectorielle et identité visuelle.",
    color: "#111111",
    icon: "/assets/icons/illustrator.svg",
  },

  [SkillNames.INDESIGN]: {
    id: 11,
    name: "indesign",
    label: "InDesign",
    shortDescription: "Mise en page print et documents éditoriaux.",
    color: "#111111",
    icon: "/assets/icons/indesign.svg",
  },

  [SkillNames.LIGHTROOM]: {
    id: 12,
    name: "lightroom",
    label: "Lightroom",
    shortDescription: "Traitement photo et color grading.",
    color: "#111111",
    icon: "/assets/icons/lightroom.svg",
  },

  [SkillNames.PREMIERE_PRO]: {
    id: 13,
    name: "premiere-pro",
    label: "Premiere Pro",
    shortDescription: "Montage vidéo et narration visuelle.",
    color: "#111111",
    icon: "/assets/icons/premiere-pro.svg",
  },

  [SkillNames.AFTER_EFFECTS]: {
    id: 14,
    name: "after-effects",
    label: "After Effects",
    shortDescription: "Motion design et effets visuels.",
    color: "#111111",
    icon: "/assets/icons/after-effects.svg",
  },

  [SkillNames.SUBSTANCE_PAINTER]: {
    id: 15,
    name: "substance-painter",
    label: "Substance Painter",
    shortDescription: "Texturing PBR et matériaux avancés.",
    color: "#111111",
    icon: "/assets/icons/substance-painter.svg",
  },

  [SkillNames.DAVINCI]: {
    id: 16,
    name: "davinci",
    label: "DaVinci Resolve",
    shortDescription: "Étalonnage couleur et post-production.",
    color: "#111111",
    icon: "/assets/icons/davinci.svg",
  },

  [SkillNames.WORDPRESS]: {
    id: 17,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "CMS, thèmes et intégration web.",
    color: "#111111",
    icon: "/assets/icons/wordpress.svg",
  },

  [SkillNames.SPLINE]: {
    id: 18,
    name: "spline",
    label: "Spline",
    shortDescription: "Scènes 3D interactives pour le web.",
    color: "#111111",
    icon: "/assets/icons/spline.svg",
  },

  [SkillNames.TWINE]: {
    id: 19,
    name: "twine",
    label: "Twine",
    shortDescription: "Narration interactive et storytelling.",
    color: "#111111",
    icon: "/assets/icons/twine.svg",
  },

  [SkillNames.CHATGPT]: {
    id: 20,
    name: "chatgpt",
    label: "ChatGPT",
    shortDescription: "Aide à la conception, logique et rédaction.",
    color: "#111111",
    icon: "/assets/icons/chatgpt.svg",
  },

  [SkillNames.VISUAL_STUDIO_CODE]: {
    id: 21,
    name: "visual-studio-code",
    label: "VS Code",
    shortDescription: "IDE, extensions et workflow dev.",
    color: "#111111",
    icon: "/assets/icons/visual-studio-code.svg",
  },

  [SkillNames.XCODE]: {
    id: 22,
    name: "xcode",
    label: "Xcode",
    shortDescription: "Développement Apple et debugging.",
    color: "#111111",
    icon: "/assets/icons/xcode.svg",
  },

  [SkillNames.PYTHON]: {
    id: 23,
    name: "python",
    label: "Python",
    shortDescription: "Scripts, automatisation et logique backend.",
    color: "#111111",
    icon: "/assets/icons/python.svg",
  },

  [SkillNames.SUITE_OFFICE]: {
    id: 24,
    name: "suite-office",
    label: "Suite Office",
    shortDescription: "Documents, présentations et organisation.",
    color: "#111111",
    icon: "/assets/icons/office.svg",
  },
};


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
    startDate: "2023",
    endDate: "Présent",
    title: "Étudiant MMI",
    company: "Formation / Projets",
    description: [
      "Prototypage et conception d’expériences interactives.",
      "Création d’assets visuels (UI, visuels, montage).",
      "Pipeline : design → intégration → itérations.",
    ],
    skills: [
      SkillNames.PHOTOSHOP,
      SkillNames.INDESIGN,
      SkillNames.ILLUSTRATOR,
      SkillNames.PREMIERE_PRO,
      SkillNames.AFTER_EFFECTS,
      SkillNames.BLENDER,
      SkillNames.FIGMA,
      SkillNames.JS,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JSON,
      SkillNames.WORDPRESS,
      SkillNames.TWINE,
    ],
  },
  {
    id: 2,
    startDate: "Avril",
    endDate: "Juin 2025",
    title: "APTITUDE X",
    company: "Stage Canada",
    description: [
      "Création de contenus visuels pour le développement d'un jeux vidéo.",
      "UI/UX design, déploiement sur Testflight.",
      "Conception et intégration d’un modèle 3D pour une expérience en réalité augmentée.",
    ],
    skills: [
      SkillNames.BLENDER,
      SkillNames.UNITY,
      SkillNames.UNREAL,
      SkillNames.XCODE,
      SkillNames.SUBSTANCE_PAINTER,
    ],
  },
];


export const themeDisclaimers = {
  light: [
    "Attention : le mode clair émet un milliard de lumens de pure luminosité !",
    "Avertissement : mode clair activé ! À ne pas tenter chez soi.",
    "Seuls des professionnels entraînés peuvent supporter autant de lumière. Lunettes de soleil recommandées !",
    "Accrochez-vous ! Le mode clair va faire briller le monde plus fort que votre avenir.",
    "Passage en mode clair… Êtes-vous sûr que vos yeux sont prêts pour ça ?",
  ],
  dark: [
    "Le mode clair ? J’ai cru que vous aviez perdu la raison… mais bienvenue de retour du côté obscur !",
    "Activation du mode sombre… Alors, comment était la vie du côté lumineux ?",
    "Mode sombre activé ! Merci du fond du cœur — et de mes yeux aussi.",
    "Bienvenue dans l’ombre. Alors, comment était la vie là-bas, dans la lumière ?",
    "Mode sombre activé ! Enfin quelqu’un qui comprend la vraie sophistication.",
  ],
};

