// fonts
import { PINYON_SCRIPT } from "@/util/fonts";

// COMPONENTS
import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "@/components/flower-icon";
import ProjectElement, { ProjectCardInfo } from "@/components/project-element";
import ActivityElement from "@/components/activity-element";
import Image from "next/image";

// DATA
const project_map: ProjectCardInfo[] = [
  {
    title: "Simplifying Form Experiences",
    description:
      "How do we make it easier for faculty to fill out an annual form? How do we optimize efficiency for the committee who scores those forms?",
    tags: ["Product Design", "UX Design", "Design Systems", "UX Research"],
    flowerColor: FLOWER_COLORS.FAT_RED,
    link: "/projects/faculty-activity-tracker",
    thumbnail: "fat.svg",
  },
  {
    title: "Practicing Mindfulness",
    description:
      "How might we help college students practice mindfulness in a productive and stress-relieving manner?",
    tags: ["Product Design", "Design Systems", "UX Research"],
    flowerColor: FLOWER_COLORS.MINDFUL_PURPLE,
    link: "/projects/mindful",
    thumbnail: "mindful.svg",
  },
  {
    title: "A Personalized Digital Space",
    description:
      "How might we create a personalized space where women can express their emotions, keep track of their mood, and feel creatively fulfilled?",
    tags: ["Product Design", "UI Design", "UX Design"],
    flowerColor: FLOWER_COLORS.PENELLA_WHITE,
    link: "/projects/penella",
    thumbnail: "penella.svg",
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
                display: "inline-block",
              }}
            >
              a <span className="text-pink">product designer</span> who creates
              enchanting experiences
              <span style={{ position: "absolute", top: -18, right: -15 }}>
                <FlowerIcon color={FLOWER_COLORS.PURPLE} />
              </span>
              <span style={{ position: "absolute", top: 5, right: -28 }}>
                <FlowerIcon
                  color={FLOWER_COLORS.FAT_RED}
                  size={FLOWER_SIZES.SMALL}
                />
              </span>
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
          {/* TODO: maybe a higher res svg for this? or we can use an icon */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.9459 19.426L29.9981 34.5688L11.0502 19.426C10.7117 19.1549 10.2572 19.0031 9.78396 19.0031C9.31072 19.0031 8.85626 19.1549 8.51774 19.426C8.35382 19.5577 8.22359 19.7149 8.13469 19.8883C8.04579 20.0618 8 20.248 8 20.4362C8 20.6243 8.04579 20.8106 8.13469 20.984C8.22359 21.1575 8.35382 21.3146 8.51774 21.4463L28.675 37.5588C29.029 37.8417 29.5037 38 29.9981 38C30.4924 38 30.9672 37.8417 31.3212 37.5588L51.4784 21.4494C51.6435 21.3176 51.7747 21.1601 51.8643 20.9861C51.9538 20.812 52 20.625 52 20.4362C52 20.2473 51.9538 20.0603 51.8643 19.8863C51.7747 19.7122 51.6435 19.5547 51.4784 19.4229C51.1399 19.1518 50.6854 19 50.2122 19C49.7389 19 49.2845 19.1518 48.9459 19.4229V19.426Z"
              fill="#C7C7C7"
            />
          </svg>
        </div>
        <div className="intro-background"></div>
      </div>

      {/* TODO: images not loading after refresh */}
      <div className="grid grid-cols-1 gap-36 mt-32">
        {project_map.map((project) => (
          <ProjectElement key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
