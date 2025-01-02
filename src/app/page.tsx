// FONTS
import { PINYON_SCRIPT } from "@/util/fonts";

// COMPONENTS
import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "@/components/flower-icon/flower-icon";

import ActivityElement from "@/app/_components/activity-element";
import ProjectList from "./_components/project-list";

// styles
import styles from "./style.module.css";

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
    <div className={styles.container}>
      <div className={styles.introduction}>
        <div>
          <h1 className="text-5xl">
            hi, I&apos;m{" "}
            <span className={`text-6xl ${PINYON_SCRIPT.className}`}>A</span>nna
            Ji
          </h1>
          <div>
            <h1 className="relative inline">
              a <span className="text-pink">product designer</span> who creates
              for delight and utility
              <div style={{ position: "absolute", top: 0, right: -10 }}>
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
            </h1>
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

        <div className={styles.introBackground1} />
        <div className={styles.introBackground2} />
      </div>

      <ProjectList />
    </div>
  );
}
