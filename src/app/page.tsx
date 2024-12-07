// FONTS
import { PINYON_SCRIPT } from "@/util/fonts";

// COMPONENTS
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "@/components/flower-icon";

import ActivityElement from "@/app/_components/activity-element";
import ProjectList from "./_components/project-list";

// DATA
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

        <div className="flex flex-wrap gap-x-40">
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

      <ProjectList />
    </div>
  );
}
