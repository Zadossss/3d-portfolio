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

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setIsActive,
}: BodyProps) {
  const [currentHref, setCurrentHref] = useState("/");

  // ✅ Fonction unique pour synchroniser l'état avec l'URL (pathname + hash)
  const syncCurrentHref = () => {
    if (typeof window === "undefined") return;
    const { pathname, hash } = window.location;
    setCurrentHref(pathname + hash);
  };

  // ✅ 1) Sync au montage
  useEffect(() => {
    syncCurrentHref();
  }, []);

  // ✅ 2) Sync quand le hash change (le VRAI fix pour ton underline)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onHashChange = () => syncCurrentHref();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
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

  // ✅ IMPORTANT : au clic, on force l'URL à prendre le bon hash
  // Sinon tu scrolles mais ton state reste bloqué sur l'ancien (ex: #skills)
  const handleClick = (href: string) => {
    if (typeof window === "undefined") return;

    // ferme le menu
    setIsActive(false);

    // Si c'est un lien interne vers une ancre (#experience / /#experience)
    const isHashLink = href.startsWith("#") || href.startsWith("/#");
    if (!isHashLink) return;

    const id = href.replace("/#", "").replace("#", "");
    if (!id) return;

    // ✅ met à jour l’URL sans rechargement
    window.history.replaceState(null, "", `/#${id}`);

    // ✅ met à jour tout de suite l’UI (underline)
    syncCurrentHref();

    // (optionnel) si tu veux forcer le scroll natif au cas où
    // const el = document.getElementById(id);
    // el?.scrollIntoView({ behavior: "smooth", block: "start" });
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
