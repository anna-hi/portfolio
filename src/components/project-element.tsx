import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlowerIcon, { FLOWER_SIZES } from "./flower-icon";

export type ProjectCardInfo = {
  title: string;
  description: string;
  tags: string[];
  flowerColor: string;
  link: string;
  thumbnail: string;
};

interface ProjectElementProps {
  project: ProjectCardInfo;
}

const ProjectElement: React.FC<ProjectElementProps> = ({ project }) => {
  return (
    <Link href={project.link} prefetch className="flex flex-nowrap">
      <div className="flex-grow grid grid-cols-1 gap-7 content-center mr-12">
        <h3
          style={{
            width: "fit-content",
            position: "relative",
            display: "inline-block",
          }}
        >
          {project.title}
          <span style={{ position: "absolute", top: -5, right: -25 }}>
            <FlowerIcon color={project.flowerColor} size={FLOWER_SIZES.SMALL} />
          </span>
        </h3>
        <p className="text-lg">{project.description}</p>
        <div className="flex flex-wrap">
          {project.tags.map((tag) => (
            <div
              className="mr-2 my-1 px-2 py-1 border border-gray-light rounded-3xl text-xs text-nowrap text-gray-light"
              key={tag}
            >
              {tag}{" "}
            </div>
          ))}
        </div>
        {/* TODO: right arrow icon here */}
        <div className="text-orange">Take a look </div>
      </div>

      <Image
        src={project.thumbnail}
        width={668}
        height={400}
        priority
        alt={project.title}
      />
    </Link>
  );
};

export default ProjectElement;
