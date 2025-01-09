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
import NumberedList from "../_components/numbered-list";

const FOLDER = "/fat-project";

const bannerTextClass = "mb-0 text-white";

const MY_ROLE_SECTION_DATA = {
  duration: "1 year | Jan - Dec 2023",
  role: ["UI/UX Designer"],
  team: [
    "1 Project Lead, 4 Developers",
    "UX Designers - Anna Ji, Cynthia Cao",
    "Christine Cho, Helen Miao",
  ],
};

const FINAL_THOUGHTS_LIST = [
  {
    title: "Facing ambiguity",
    text: "There was a lack of onboarding for this project, so I became more proactive with asking questions and requesting to be apart of client meetings.",
  },
  {
    title: "Chatting with devs",
    text: "It was an invaluable experience being able to directly communicate with the developers, discussing ideas and certain intricacies of the design.",
  },
  {
    title: "Getting feedback from the people",
    text: "Looking back, one of my main regrets for this project was the lack of user testing and research. The people using the application must always be involved in the development.",
  },
];

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
            Every year, the College of Media Arts and Design &#40;CAMD&#41;
            faculty must fill out an{" "}
            <strong>exhausting 10-page paper form</strong> to track their
            completed activities to earn merit. The Merit Committee then sorts
            through <strong>100s of forms</strong> to approve activities and
            manually assign scores.
          </p>
          <p>
            This tedious process led our client, Mark Sivak, head of the Merit
            Committee, to task us to create a digital solution to streamline the
            process.
          </p>
        </div>
        <MyRoleSection {...MY_ROLE_SECTION_DATA} />
      </div>
      <Banner background={FAT_PROJECT_COLORS.primary}>
        <h3 className={bannerTextClass}>
          How might we streamline the activity organization process to make it
          more efficient than the traditional paper form?
        </h3>
      </Banner>
      <div className="mt-separate mb-together mx-photo">
        {/* TODO: INCLUDE PHOTO HERE for 'The annoying & tedious annual paper form.' */}
        <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
        <div className={sharedStyles.photoCaptionText}>
          The annoying & tedious annual paper form.
        </div>
      </div>
      <div className="mt-together mb-separate mx-text">
        <h5>RESEARCH</h5>
        <h3>Paper form walkthrough revealed repetition & inefficiency</h3>
        <p>
          During our beginning meetings with Mark, we saw firsthand how tedious
          and tiring it was for faculty to fill out these forms. Most faculty
          chose to fill out the form all at once by trying to remember
          activities they did off the top of their head.
        </p>
        <p>
          This made it extremely difficult to categorize their activities into
          the 3 main categories. Filling out the form involved a lot of flipping
          back and forth between the different pages.
        </p>
      </div>
      {/* ITERATIONS */}
      <div>
        <div className="bg-iteration-primary pt-32 pb-separate">
          <div className="mx-text mb-together">
            <h5 className="text-white">ITERATIONS</h5>
            <h3 className="text-whiteWhite">
              Condensing necessary information to <i>one page</i> to reduce
              facultys’ cognitive and physical efforts
            </h3>
          </div>
          {/* TODO: INSERT THE IMAGE CAROUSEL FOR ITERATIONS */}
          <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
          <div className={`${sharedStyles.photoCaptionText} mx-photo`}>
            First iterations of the activity dashboard.
          </div>
        </div>
        <div className="bg-iteration-secondary py-32 px-photo">
          {/* TODO update this to size correctly once image is added */}
          <div className="flex gap-8">
            {/* TODO: Card hover iterations photo */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className="text-white">
              <h3 className="text-whiteWhite">
                Adding Micro-Interactions for Utility
              </h3>
              <p>
                After discussion and critique with the team, we settled on an
                activity card design. Then, I decided to create a hover state
                interaction to clarify when a card is selected.
              </p>
              <p>
                This added a delightful element to the page while simultaneously
                creating a better user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-iteration-primary pt-separate pb-32">
          <div className="mx-text mb-together">
            <h5 className="text-white">SOLUTION</h5>
            <h3 className="text-whiteWhite">
              Create a digital form layout that <i>sorts the activities</i> into
              each category <i>for you</i>
            </h3>
          </div>
          <div className="mx-[20%]">
            {/* TODO: add the gif for going through the process */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
          </div>
        </div>
      </div>
      <div className="my-separate mx-photo flex gap-8">
        <div className="mt-together">
          <h5>DESIGN SYSTEM</h5>
          <h3>Creating a clear design system for developers and future work</h3>
          <p>
            We created a design system to maintain consistency throughout the
            website to improve user experience and provide developers with a
            reusable pattern.
          </p>
          <p>
            Internally, we re-organized the Figma file to improve navigation and
            documentation.
          </p>
        </div>
        <div>
          {/* TODO: update with design system image */}
          <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
        </div>
      </div>
      <Banner background={FAT_PROJECT_COLORS.primary}>
        <h3 className={bannerTextClass}>
          Now let’s turn our attention to our second main user:{" "}
          <i>Merit Committee(MC) members</i>. Our goal? Helping them score
          faster.
        </h3>
      </Banner>
      <div className="my-separate mx-text">
        <h5>IDEATION &#40;AGAIN:&#41;&#41;</h5>
        <h3>
          How might we help MC members score the faculty members submitted
          activities faster and fairly?
        </h3>
        <p>
          During my second semester on this project, we shifted gears to focus
          on the Merit Committee&#39;s side of the application. The Merit
          Committee&#39;s members{" "}
          <strong>main priority was to quickly and accurately score</strong> the
          faculty&#39;s submitted activities.
        </p>
        <p>
          For this side of the application,{" "}
          <strong>the client made a few requests.</strong> In the dashboard of
          the professors&#39; submitted activities, he wanted to be able to{" "}
          <strong>
            see individual activity scores, final score, and any comments
          </strong>{" "}
          that were added by other committee members.
        </p>
      </div>
      <div className="mt-separate mb-together mx-photo">
        {/* TODO: replace this with the professor card photo */}
        <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
        <div className={sharedStyles.photoCaptionText}>
          Each professor card required 3 individual activity scores, final
          score, and a possible comment.
        </div>
      </div>
      <div className="mt-together mb-separate mx-text">
        <h5>ITERATIONS</h5>
        <h3>
          Completed 20+ iterations which led to using visual hierarchy to
          highlight the final score
        </h3>
        <p>
          For the professor cards, the other designer and I did rapid iteration
          to figure out the best layout to help the Merit Committee understand
          each professor&#39;s scores at a glance.
        </p>
        <p>
          In the final design,{" "}
          <strong>I improved the card&#39;s visual hierarchy</strong> through
          highlighting the final score through shape, color, and size.
        </p>
      </div>
      <div className="mx-photo my-separate">
        {/* TODO: replace these photos with the dashboard and stuff */}
        <div className="flex gap-8">
          <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
          <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
        </div>
        <div className={sharedStyles.photoCaptionText}>
          Dashboard of professor cards and graph to to help MC members track
          score averages.
        </div>
      </div>
      <div className="bg-iteration-secondary pt-32 pb-separate px-photo">
        <div className="flex gap-8">
          <div className="text-white">
            <h5 className="text-white">PROBLEM-SOLVING</h5>
            <h3 className="text-whiteWhite">
              Creating a scoring system that offered the easiest and fastest way
              to adjust scores
            </h3>
            <p>
              We simplified the Google Sheets version of this process on the
              digital application by creating the scoring island.
            </p>
            <p>
              Midway through iterations, I shifted our thinking from adding to
              the score to directly writing out the adjusted score. This shift
              allowed us to create a single input box to help users avoid
              confusion and unnecessary mental math calculations.
            </p>
          </div>
          <div>
            {/* TODO: replace with image */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className={sharedStyles.photoCaptionText}>
              The iteration process of the scoring system.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-iteration-primary pt-separate pb-32">
        <div className="mb-together mx-text">
          <h5 className="text-white">FINAL DELIVERABLES</h5>
          <h3 className="text-whiteWhite">
            Created an end-to-end experience for both faculty and MC members
            from login to scoring
          </h3>
        </div>
        <div className="mx-photo flex gap-8">
          <div>
            {/* TODO: REPALCE WITH PHOTO */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className={sharedStyles.photoCaptionText}>
              Full faculty-facing user experience.
            </div>
          </div>
          <div>
            {/* TODO: REPALCE WITH PHOTO */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className={sharedStyles.photoCaptionText}>
              Full Merit Committee member-facing user experience.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-text mt-separate mb-together">
        <h5>FINAL THOUGHTS</h5>
        <h3>
          Being on a 7-person team for a project that helped an entire school
          department helped me learn, grow, and empathize
        </h3>
        <p>
          This project was really where my design and leadership skills began to
          grow, and I had an amazing team. P.S. Half the reason, I picked this
          project was the funny acronym &#40;Faculty Activity Tracker&#41;,
          which my teammates also thoroughly enjoyed :&#41;
        </p>
      </div>
      <div className="my-together mx-text">
        <NumberedList list={FINAL_THOUGHTS_LIST} />
      </div>
      <div className="mt-together mx-text">
        {/* TODO: replace with photo of team */}
        <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
        <p className="mt-6 mb-0 text-center text-[#8E8E8E]">
          My amazing team &lt;3
        </p>
      </div>
      {/* MORE PROJECTS THING */}
    </div>
  );
}
