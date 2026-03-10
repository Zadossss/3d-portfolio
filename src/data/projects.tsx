import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener noreferrer"
        target="_blank"
        href={live}
      >
        <Button variant="default" size="sm">
          Découvrir
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>

      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener noreferrer"
          target="_blank"
          href={repo}
        >
          <Button variant="default" size="sm">
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  unity: {
    title: "Unity",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/unity.svg"
        alt="Unity"
        width={20}
        height={20}
      />
    ),
  },
  chatgpt: {
    title: "ChatGPT",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/chatgpt.svg"
        alt="ChatGPT"
        width={20}
        height={20}
      />
    ),
  },
  vscode: {
    title: "VS Code",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/visual-studio-code.svg"
        alt="VS Code"
        width={20}
        height={20}
      />
    ),
  },
  unreal: {
    title: "Unreal",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/unrealengine.svg"
        alt="Unreal Engine"
        width={20}
        height={20}
      />
    ),
  },
  davinci: {
    title: "Davinci",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/davinci.svg"
        alt="Davinci"
        width={20}
        height={20}
      />
    ),
  },
  blender: {
    title: "Blender",
    bg: "black",
    fg: "white",
    icon: (
      <Image
        src="/assets/icons/blender.svg"
        alt="Blender"
        width={20}
        height={20}
      />
    ),
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "codingducks",
    category: "Jeux vidéo Mobile",
    title: "Chick'em",
    src: "/assets/projects-screenshots/codingducks/8.jpg",
    screenshots: ["8.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.unity,
        PROJECT_SKILLS.chatgpt,
        PROJECT_SKILLS.vscode,
      ],
      backend: [],
    },
    live: "https://hugoatfbx.itch.io/chickem",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Chick&apos;em – survival mobile game
          </TypographyP>

          <TypographyP className="font-mono">
            Chick&apos;em est un jeu mobile que j’ai développé en autonomie avec
            l’aide de l’IA.
            <br />
            <br />
            Le joueur incarne un poulet qui doit survivre à des vagues de
            fermiers toujours plus nombreuses et difficiles. À chaque montée de
            niveau, le joueur choisit de nouvelles compétences qui permettent au
            personnage d’évoluer et de s’adapter à la difficulté croissante.
          </TypographyP>

          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Gameplay</TypographyH3>
          <p className="font-mono mb-2">
            Le joueur doit survivre le plus longtemps possible face à des vagues
            d’ennemis. Chaque vague devient plus difficile et demande une
            adaptation stratégique. Le système de progression permet de débloquer
            différentes compétences pour améliorer les capacités du personnage.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/2.jpg`,
              `${BASE_PATH}/codingducks/3.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Progression</TypographyH3>
          <p className="font-mono mb-2">
            À chaque montée de niveau, le joueur peut choisir une compétence qui
            modifie son style de jeu. Cela permet d’adapter la stratégie en
            fonction des ennemis rencontrés.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/6.jpg`,
              `${BASE_PATH}/codingducks/4.jpg`,
              `${BASE_PATH}/codingducks/5.jpg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">
            Ennemis & difficulté
          </TypographyH3>
          <p className="font-mono mb-2">
            Les vagues deviennent progressivement plus dangereuses avec des
            ennemis plus rapides et plus nombreux. Le joueur doit optimiser ses
            compétences pour survivre le plus longtemps possible.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Technologie utilisée
          </TypographyH3>
          <p className="font-mono mb-2">
            Le jeu a été développé avec Unity. L’IA m’a aidé pour certaines
            parties du code et du prototypage. Le projet inclut un système de
            vagues, un système de progression et une gestion des ennemis.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/7.jpg`]} />

          <TypographyH3 className="my-4 mt-8">Mon rôle</TypographyH3>
          <p className="font-mono mb-2">
            J’ai pensé la conception du gameplay, ainsi que la programmation du
            système de vagues, l’intégration des compétences et l’équilibrage de
            la difficulté.
          </p>

          <TypographyH3 className="my-4 mt-8">Résultat</TypographyH3>
          <p className="font-mono mb-2">
            Ce projet m’a permis de travailler sur la conception d’un gameplay
            progressif et sur l’équilibrage d’un système de progression dans un
            jeu mobile.
          </p>
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Générique & Intro",
    title: "Ouroboros",
    src: "/assets/projects-screenshots/couponluxury/ouroboros.jpg",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.unreal,
        PROJECT_SKILLS.davinci,
      ],
      backend: [
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Réalisation d’un générique et d’une introduction de film en 3D temps réel avec Unreal Engine.
            Le projet combine animation, mise en scène cinématographique et color grading pour créer une ouverture immersive.
          </TypographyP>

          <p className="font-mono mb-2 mt-4">
            L’objectif de ce projet était de créer une ouverture visuelle forte pour un film en utilisant un pipeline de production 3D combinant Unreal Engine et DaVinci Resolve 
            afin d’obtenir un rendu cinématographique réaliste.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} 
        />
          <TypographyH3 className="my-4 ">Générique du film</TypographyH3>
          <p className="font-mono mb-2">
            Le générique a été conçu avec Unreal Engine afin de profiter du rendu temps réel et des possibilités de mise en scène offertes par le moteur. 
            Le travail s’est concentré sur l’animation des éléments visuels, les transitions entre les plans et l’intégration des textes du générique dans l’environnement 3D avec Davinci.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Introduction du film</TypographyH3>

          <p className="font-mono mb-2">
            L’introduction du film a également été réalisée avec Unreal Engine.
            Cette séquence sert à poser l’atmosphère du film et à introduire visuellement l’univers dans lequel se déroule l’histoire.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/usine1;jpg`]} 
          <SlideShow images={[`${BASE_PATH}/couponluxury/light.jpg`]}
        />
          <TypographyH3 className="my-4 mt-8">Color Grading </TypographyH3>
          <p className="font-mono mb-2">
            Le color grading a été réalisé avec DaVinci Resolve afin d’harmoniser les couleurs et renforcer l’ambiance cinématographique des séquences. 
            Le travail s’est concentré sur l’équilibrage des contrastes, l’ajustement des teintes et la gestion de la lumière pour donner une identité visuelle 
            cohérente à l’ensemble du générique et de l’introduction du film.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/sans.jpg`,
              `${BASE_PATH}/couponluxury/avec.jpg`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Résultat</TypographyH3>
          <p className="font-mono mb-2">
            Ce projet m’a permis d’explorer la création d’ambiances cinématographiques en 3D temps réel et de travailler un pipeline mêlant Unreal Engine, 
            et DaVinci Resolve pour produire une introduction et un générique de film cohérents et immersifs.
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "The Booking Desk",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    skills: {
    frontend: [],
    backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
            to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next adventure or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://nareshkhatri.vercel.app",
    github:"https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Anonymous chat",
    title: "GhostChat",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ghostchat.vercel.app",
    github:"https://github.com/Naresh-Khatri/GhostChat",
    skills: {
      frontend: [
      ],
      backend: [
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping things
            low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
            or just having some fun, Ghostchat ensures your identity stays
            hidden, while your voice is heard. Say what you want, without the
            worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Results Analyzer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [
      ],
      backend: [
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
