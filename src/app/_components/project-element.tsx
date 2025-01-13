import Image from "next/image";
import Link from "next/link";

import { ALEGREYA_SANS } from "@/util/fonts";

import FlowerIcon, {
  FLOWER_SIZES,
  flowerColor,
} from "@/components/flower-icon/flower-icon";

export type ProjectCardInfo = {
  title: string;
  description: string;
  tags: string[];
  flowerColor: flowerColor;
  link: string;
  thumbnail: string;
};

interface ProjectElementProps {
  project: ProjectCardInfo;
}
const ProjectElement: React.FC<ProjectElementProps> = ({ project }) => {
  return (
    <Link
      href={project.link}
      prefetch
      className="flex flex-col gap-y-8 md:flex-row gap-x-24 w-fit m-auto px-[9%]"
    >
      <div className="grid grid-cols-1 gap-7 content-center w-80 shrink-0">
        <h2 className="relative w-fit text-nowrap whitespace-pre-line">
          {project.title}
          <span style={{ position: "absolute", top: -5, right: -25 }}>
            <FlowerIcon color={project.flowerColor} size={FLOWER_SIZES.SMALL} />
          </span>
        </h2>
        <p className="text-caption">{project.description}</p>
        <div className="flex flex-wrap">
          {project.tags.map((tag) => (
            <div
              className={`${ALEGREYA_SANS.className} mr-2 my-1 px-2 py-1 border border-gray-light rounded-3xl 
              text-xs text-nowrap text-gray-light`}
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-1 flex items-center min-w-80 w-80 md:w-auto">
        <Image
          src={project.thumbnail}
          width={668}
          height={498}
          priority
          sizes="100vw"
          alt={project.title}
        />
      </div>
    </Link>
  );
};

export default ProjectElement;
