import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";
import type { ClientProject } from "@/types/portfolio";

interface ProjectSectionProps {
  data: {
    clientsProject: ClientProject[];
  };
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ data }) => {
  return (
    <>
      {data.clientsProject.map((project, index) => (
        <section
          key={index}
          className="mb-16 flex flex-col items-center justify-center gap-8 px-4 md:mb-32 md:gap-16"
        >
          <div>
            <img src={project.mainImage.url} alt={project.mainImage.alt} />
          </div>
          <div className="mx-auto flex max-w-[1248px] flex-col justify-center gap-4 md:gap-8 lg:flex-row">
            <div>
              <div className="inline-block rounded-md border border-[#60E3CF] bg-[#60E3CF] bg-opacity-20">
                <Typography
                  variant="BodyMMedium16"
                  className="px-4 py-2 uppercase tracking-wide text-[#0A3D62]"
                >
                  {project.title}
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-[50%]">
              <Typography variant="H3SemiBold48" className="uppercase">
                {project.heading}
              </Typography>
              <Typography variant="BodyMRegular16" className="text-[#292929]">
                {project.description}
              </Typography>
              <Button
                variant="outline"
                className="rounded-2xl border-2 border-gray-300 py-7 text-[#0A3D62] hover:text-[#0A3D62] md:max-w-48"
                asChild
              >
                <a href={project.button.buttonUrl}>
                  <Typography variant="H6SemiBold24" className="leading-tighter uppercase">
                    {project.button.buttonLabel}
                  </Typography>
                </a>
              </Button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectSection;
