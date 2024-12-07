import { FLOWER_COLORS } from "@/components/flower-icon";
import ProjectElement, {
  ProjectCardInfo,
} from "./project-element";

const project_map: ProjectCardInfo[] = [
  {
    title: "Simplifying Form Experiences",
    description:
      "How do we make it easier for faculty to fill out an annual form? How do we optimize efficiency for the committee who scores those forms?",
    tags: ["Product Design", "UX Design", "Design Systems"],
    flowerColor: FLOWER_COLORS.FAT_RED,
    link: "/projects/faculty-activity-tracker",
    thumbnail: "/fat.svg",
  },
  {
    title: "Practicing Mindfulness",
    description:
      "How might we help college students practice mindfulness in a productive and stress-relieving manner?",
    tags: ["Product Design", "Design Systems", "UX Research"],
    flowerColor: FLOWER_COLORS.MINDFUL_PURPLE,
    link: "/projects/mindful",
    thumbnail: "/mindful.svg",
  },
  {
    title: "A Personalized Digital Space",
    description:
      "How might we create a personalized space where women can express their emotions, keep track of their mood, and feel creatively fulfilled?",
    tags: ["Product Design", "UI Design", "UX Design"],
    flowerColor: FLOWER_COLORS.PENELLA_WHITE,
    link: "/projects/penella",
    thumbnail: "/penella.svg",
  },
];

export default function ProjectList() {
  return (
    <>
      <div className="home-projects-container grid grid-cols-1 gap-36">
        {project_map.map((project) => (
          <ProjectElement key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
