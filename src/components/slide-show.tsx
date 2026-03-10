// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion, AnimatePresence } from "framer-motion";
import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

const SlideShow = ({ images }: { images: string[] }) => {
  const [hovering, setHovering] = useState<number | null>(null);

  return (
    <Splide
      options={{
        autoplay: true,
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: "3rem", right: "3rem" },
        gap: "1rem",
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <Dialog>
              <DialogTrigger
                className="relative w-full"
                onMouseEnter={() => setHovering(idx)}
                onMouseLeave={() => setHovering(null)}
              >
                <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black">
                  {image.endsWith(".mp4") ? (
                    <video
                      src={image}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={image}
                      alt="screenshot"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <AnimatePresence>
                  {hovering === idx && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px] rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Cliquer pour agrandir
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogTrigger>

              <DialogContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
                <DialogHeader className="w-full">
                  <DialogDescription>
                    {image.split("/").pop()}
                  </DialogDescription>
                </DialogHeader>

                <div className="relative w-full h-[80vh] bg-black rounded-lg overflow-hidden">
                  {image.endsWith(".mp4") ? (
                    <video
                      src={image}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Image
                      src={image}
                      alt="screenshot"
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};

export default SlideShow;
