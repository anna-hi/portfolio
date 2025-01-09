// components
import ProjectHeader from "../_components/project-header";

// data
import { FAT_PROJECT_DATA } from "@/data/projects";

// styles
import styles from "./style.module.css";
import sharedStyles from "../style.module.css";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import { FAT_PROJECT_COLORS } from "../../../../tailwind.config";
import ImageViewer from "../_components/image-viewer";

const FOLDER = "/fat-project";

const bannerColors = {
  background: FAT_PROJECT_COLORS.primary,
  color: "#FFF9F9",
};

const MY_ROLE_SECTION_DATA = {
  duration: "1 year | Jan - Dec 2023",
  role: ["UI/UX Designer"],
  team: [
    "1 Project Lead, 4 Developers",
    "UX Designers - Anna Ji, Cynthia Cao",
    "Christine Cho, Helen Miao",
  ],
};

export default function FacultyActivityTrackerPage() {
  return (
    <div className={styles.container}>
      <ProjectHeader
        header={FAT_PROJECT_DATA.title}
        tags={FAT_PROJECT_DATA.tags}
        photo={`${FOLDER}/fat-title.png`}
      />
      <ImpactHeader isPerceivedImpact={false}>
        <span className={styles.impactHeaderItalic}>
          100s of Faculty & 10+ Members
        </span>{" "}
        of the Merit Committee will use this application
        <span className={styles.impactHeaderItalic}> each year.</span>
      </ImpactHeader>
      <div className={sharedStyles.sparkSectionContainer}>
        <h3>The Spark</h3>
        <div className="mb-together">
          <p>
            Every year, the College of Media Arts and Design (CAMD) faculty must
            fill out an <strong>exhausting 10-page paper form</strong> to track
            their completed activities to earn merit. The Merit Committee then
            sorts through <strong>100s of forms</strong> to approve activities
            and manually assign scores.
          </p>
          <p>
            This tedious process led our client, Mark Sivak, head of the Merit
            Committee, to task us to create a digital solution to streamline the
            process.
          </p>
        </div>
        <MyRoleSection {...MY_ROLE_SECTION_DATA} />
      </div>
      <Banner
        {...bannerColors}
        text="How might we streamline the activity organization process to make it more efficient than the traditional paper form?"
      />
      <div className="mt-seperate mb-together">
        <div className="photo-container">
          {/* INCLUDE PHOTO HERE for 'The annoying & tedious annual paper form.' */}
          <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
          <div className={sharedStyles.photoCaptionText}>
            The annoying & tedious annual paper form.
          </div>
        </div>
      </div>
      <div className="mt-together mb-seperate">
        <div className="text-container">
          <h5>RESEARCH</h5>
          <h3>Paper form walkthrough revealed repetition & inefficiency</h3>
          <p>
            During our beginning meetings with Mark, we saw firsthand how
            tedious and tiring it was for faculty to fill out these forms. Most
            faculty chose to fill out the form all at once by trying to remember
            activities they did off the top of their head.
          </p>
          <p>
            This made it extremely difficult to categorize their activities into
            the 3 main categories. Filling out the form involved a lot of
            flipping back and forth between the different pages.
          </p>
        </div>
      </div>
      {/* ITERATIONS */}
      <div></div>
      hello there final text
    </div>
  );
}
