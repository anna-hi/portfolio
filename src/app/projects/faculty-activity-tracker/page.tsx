// components
import ProjectHeader from "../_components/project-header";

// data
import { FAT_PROJECT_DATA } from "@/data/projects";

// styles
import styles from "./style.module.css";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import { FAT_PROJECT_COLORS } from "../../../../tailwind.config";

const FOLDER = "/fat-project";

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
      <div className={styles.sparkSectionContainer}>
        <h3>The Spark</h3>
        <div className="mb-8">
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
        <MyRoleSection
          duration="1 year | Jan - Dec 2023"
          role={["UI/UX Designer"]}
          team={[
            "1 Project Lead, 4 Developers",
            "UX Designers - Anna Ji, Cynthia Cao",
            "Christine Cho, Helen Miao",
          ]}
        />
      </div>
      <Banner
        background={FAT_PROJECT_COLORS.primary}
        color="white"
        text="How might we streamline the activity organization process to make it more efficient than the traditional paper form?"
      />
      <p>
        Throughout the spring, summer, and fall 2023 semesters in Sandbox(a
        student-led software consultancy), I was a UI/UX designer for my client,
        Mark Sivak, the head of the Merit Committee.
      </p>
      <p>
        &quot;Faculty Activity Tracker&quot; is a website that digitizes a
        previously 10-page paper form that hundreds of faculty from the College
        of Media Arts and Design (CAMD) at Northeastern must fill out every year
        to track the activities they’ve completed to earn merit. Additionally,
        this website also provides the Merit Committee with a simpler and
        digital scoring system. Currently, this form is taxing to fill out and
        an arduous task for the 10-member Merit Committee to manually assign
        scores to.
      </p>
    </div>
  );
}
