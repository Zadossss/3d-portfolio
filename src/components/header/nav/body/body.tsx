import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { Link as LinkType } from "@/types";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import FunnyThemeToggle from "@/components/theme/funny-theme-toggle";

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: SelectedLink;
  setSelectedLink: (selectedLink: SelectedLink) => void;
  setIsActive: (isActive: boolean) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const [currentHref, setCurrentHref] = useState("/");

  useEffect(() => {
    const update = () => {
      const { pathname, hash } = window.location;
      setCurrentHref(pathname + hash);
    };

    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);

    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  const getChars = (word: string) =>
    word.split("").map((char, i) => (
      <motion.span
        className="pointer-events-none"
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    ));

  return (
    <div className={cn(styles.body, "flex flex-col items-end md:flex-row")}>
      <FunnyThemeToggle className="w-6 h-6 mr-6 flex md:hidden" />

      {links.map((link, index) => {
        const { title, href, target } = link;

        // ✅ si href est "#experience", currentHref doit matcher "/#experience"
        const normalizedHref = href.startsWith("#")
          ? `${window.location.pathname}${href}`
          : href;

        const isCurrent = currentHref === normalizedHref;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className="cursor-can-hover rounded-lg"
            onClick={() => {
              setIsActive(false);
              // ✅ met à jour direct (pas besoin d’attendre l’event)
              if (typeof window !== "undefined") {
                const next = href.startsWith("#")
                  ? window.location.pathname + href
                  : href;
                setCurrentHref(next);
              }
            }}
          >
            <motion.p
              className={cn("rounded-lg", !isCurrent ? "text-muted-foreground" : "underline")}
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "ouvrir"
                  : "fermer"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
