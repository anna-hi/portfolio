// COMPONENTS
import IntroText from "./_components/intro-text";
import ActivityElement from "@/app/_components/activity-element";
import ProjectList from "./_components/project-list";

import { FLOWER_COLORS } from "@/components/flower-icon/flower-icon";
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
        <IntroText />
        <div className="flex flex-col gap-y-8 gap-x-32 md:flex-row">
          {activity_elements.map((activity) => (
            <ActivityElement key={activity.header} {...activity} />
          ))}
        </div>
      </div>
      <ProjectList />
    </div>
  );
}
