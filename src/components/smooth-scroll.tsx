"use client";

import React from "react";
import { ReactLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        prevent: (node) => {
          if (!(node instanceof HTMLElement)) return false;

          return !!node.closest(
            ".modall, [data-lenis-prevent], [data-scroll-locked]"
          );
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
