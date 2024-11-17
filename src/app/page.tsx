// fonts
import { PINYON_SCRIPT } from "@/util/fonts";

// COMPONENTS
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "@/components/flower-icon";
import ProjectElement, { ProjectCardInfo } from "@/components/project-element";
import ActivityElement from "@/components/activity-element";

// DATA
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

const activity_elements = [
  {
    header: "Currently",
    subtext: "Studying HCI @ Carnegie Mellon",
    color: FLOWER_COLORS.PURPLE,
  },
  {
    header: "Constantly",
    subtext: "Thinking how to improve human lives",
    color: FLOWER_COLORS.BLUE,
  },
];

export default function Main() {
  return (
    <div className="home-page-container">
      <div className="introduction grid grid-cols-1 gap-32 content-center">
        <div>
          <h1>
            hi, I&apos;m{" "}
            <span className={`text-7xl ${PINYON_SCRIPT.className}`}>A</span>nna
          </h1>
          <div>
            <h2
              style={{
                position: "relative",
                display: "inline",
              }}
            >
              a <span className="text-pink">product designer</span> who creates
              enchanting experiences
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <span style={{ position: "absolute", top: -18, right: -15 }}>
                  <FlowerIcon color={FLOWER_COLORS.PURPLE} />
                </span>
                <span style={{ position: "absolute", top: 5, right: -28 }}>
                  <FlowerIcon
                    color={FLOWER_COLORS.FAT_RED}
                    size={FLOWER_SIZES.SMALL}
                  />
                </span>
              </div>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-32">
          {activity_elements.map((activity) => (
            <ActivityElement
              key={activity.header}
              header={activity.header}
              subtext={activity.subtext}
              color={activity.color}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <ChevronDownIcon className="h-8 w-8 text-gray-light" />
        </div>
        <div className="intro-background"></div>
      </div>

      <div className="home-projects grid grid-cols-1 gap-36">
        {project_map.map((project) => (
          <ProjectElement key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
