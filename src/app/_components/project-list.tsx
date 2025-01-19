// components
import { FLOWER_COLORS } from "@/components/flower-icon/flower-icon";
import ProjectElement, { ProjectCardInfo } from "./project-element";

// styles
import styles from "./style.module.css";

// data
import {
  FAT_PROJECT_DATA,
  MINDFUL_PROJECT_DATA,
  NEGOTIUM_PROJECT_DATA,
  PENELLA_PROJECT_DATA,
} from "@/data/projects";

const project_map: ProjectCardInfo[] = [
  {
    title: NEGOTIUM_PROJECT_DATA.title,
    description:
      "How might we connect people to practice their negotiation skills together?",
    tags: NEGOTIUM_PROJECT_DATA.tags,
    flowerColor: FLOWER_COLORS.NEGOTIUM_PURPLE,
    link: "/projects/negotium",
    thumbnail: "/negotium-project/negotium-cover.jpg",
  },
  {
    title: FAT_PROJECT_DATA.title,
    description:
      "How might we make it easier for faculty to fill out an annual form? How might we optimize efficiency for the committee who scores those forms?",
    tags: FAT_PROJECT_DATA.tags,
    flowerColor: FLOWER_COLORS.FAT_RED,
    link: "/projects/faculty-activity-tracker",
    thumbnail: "/fat-project/fat-cover.jpg",
  },
  {
    title: MINDFUL_PROJECT_DATA.title,
    description:
      "How might we help college students practice mindfulness in a productive and stress-relieving manner?",
    tags: MINDFUL_PROJECT_DATA.tags,
    flowerColor: FLOWER_COLORS.MINDFUL_PURPLE,
    link: "/projects/mindful",
    thumbnail: "/mindful-project/mindful-cover.jpg",
  },
  {
    title: PENELLA_PROJECT_DATA.title,
    description:
      "How might we create a personalized space where women can express their emotions, keep track of their mood, and feel creatively fulfilled?",
    tags: PENELLA_PROJECT_DATA.tags,
    flowerColor: FLOWER_COLORS.PENELLA_WHITE,
    link: "/projects/penella",
    thumbnail: "/penella-project/penella-cover.jpg",
  },
];

export default function ProjectList() {
  return (
    <>
      <div className={styles.homeProjectsContainer}>
        {project_map.map((project) => (
          <ProjectElement key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
