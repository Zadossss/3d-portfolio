"use client";

import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id="projects" title="PROJETS" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Modall key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover hover:scale-[1.05] transition-all duration-300"
            />

            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-white">
                  {project.title}
                </div>

                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>

       <ModalBody className="w-[95vw] max-w-5xl max-h-[85vh] overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto touch-pan-y">
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </div>
        
          <ModalFooter className="gap-4 flex justify-center mt-6 shrink-0">
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-2 bg-gray-200 text-black border border-gray-300 rounded-md text-sm w-28 hover:bg-gray-300 transition"
              >
                Fermer
              </button>
            
              {project.live && (
                <Link href={project.live} target="_blank">
                  <button className="bg-black text-white text-sm px-3 py-2 rounded-md border border-black w-28 hover:bg-neutral-800 transition">
                    Visiter
                  </button>
                </Link>
              )}
            </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  const allSkills = [
    ...(project.skills.frontend || []),
    ...(project.skills.backend || []),
  ];

  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>

      {allSkills.length > 0 && (
        <div className="flex justify-center items-center text-3xl mb-8">
          <FloatingDock items={allSkills} />
        </div>
      )}

      {project.content}
    </>
  );
};
