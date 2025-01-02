import Image from "next/image";
import Link from "next/link";

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
    <Link href={project.link} prefetch className="flex flex-wrap gap-x-36">
      <div className="flex-grow grid grid-cols-1 gap-7 content-center min-w-80 w-80">
        <div>
          <h2
            style={{
              position: "relative",
              display: "inline",
            }}
          >
            {project.title}
            <span style={{ position: "absolute", top: -5, right: -25 }}>
              <FlowerIcon
                color={project.flowerColor}
                size={FLOWER_SIZES.SMALL}
              />
            </span>
          </h2>
        </div>
        <p className="text-caption">{project.description}</p>
        <div className="flex flex-wrap">
          {project.tags.map((tag) => (
            <div
              className="mr-2 my-1 px-2 py-1 border border-gray-light rounded-3xl 
              text-xs text-nowrap text-gray-light"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={project.thumbnail}
        width={668}
        height={498}
        priority
        sizes="100vw"
        alt={project.title}
      />
    </Link>
  );
};

export default ProjectElement;
