"use client";

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

const SECTION_IDS = ["experience", "skills", "projects", "contact"]; // ✅ adapte si besoin

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const [currentHref, setCurrentHref] = useState("/");

  const syncCurrentHref = () => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  };

  useEffect(() => {
    syncCurrentHref();
  }, []);

  // ✅ met à jour l'UI si le hash change (clic)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHashChange = () => syncCurrentHref();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // ✅ SCROLLSPY : met à jour le hash quand tu scrolles
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // On garde uniquement celles visibles
        const visibles = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visibles.length) return;

        const id = (visibles[0].target as HTMLElement).id;

        // ✅ évite de spammer l'history si déjà le bon hash
        if (window.location.hash !== `#${id}`) {
          window.history.replaceState(null, "", `/#${id}`);
          syncCurrentHref();
        }
      },
      {
        // Ajuste pour que ça “prenne” quand le header est passé
        root: null,
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getChars = (word: string) => {
    const chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
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
      );
    });
    return chars;
  };

  // ✅ clic : force URL + underline immédiat
  const handleClick = (href: string) => {
    if (typeof window === "undefined") return;
    setIsActive(false);

    const isHashLink = href.startsWith("#") || href.startsWith("/#");
    if (!isHashLink) return;

    const id = href.replace("/#", "").replace("#", "");
    if (!id) return;

    window.history.replaceState(null, "", `/#${id}`);
    syncCurrentHref();
  };

  return (
    <div className={cn(styles.body, "flex flex-col items-end md:flex-row")}>
      <FunnyThemeToggle className="w-6 h-6 mr-6 flex md:hidden" />

      {links.map((link, index) => {
        const { title, href, target } = link;

        return (
          <Link
            key={`l_${index}`}
            href={href}
            target={target}
            className="cursor-can-hover rounded-lg"
            scroll={false}
            onClick={() => handleClick(href)}
          >
            <motion.p
              className={cn(
                "rounded-lg",
                currentHref !== href ? "text-muted-foreground" : "underline"
              )}
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
