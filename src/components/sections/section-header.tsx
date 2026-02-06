import { cn } from "@/lib/utils";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";
import { ReactNode } from "react";

type Props = {
  id: string;
  title: string | ReactNode;
  desc?: string;
  className?: string;
};

export const SectionHeader = ({ id, title, desc, className }: Props) => {
  return (
    <div className={cn("mb-10", className)}>
      {/* ✅ L’anchor réel : c’est LUI que le navigateur cherche pour #experience */}
      <span id={id} className="block scroll-mt-28" />

      {/* Ton header sticky */}
      <div className="top-[70px] sticky">
        <Link href={`#${id}`}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "text-4xl text-center md:text-7xl font-bold text-foreground"
              )}
            >
              {title}
            </h2>
          </BoxReveal>
        </Link>

        {desc && (
          <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};
