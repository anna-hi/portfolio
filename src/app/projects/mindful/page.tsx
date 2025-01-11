// components
import ProjectHeader from "../_components/project-header";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import ImageViewer from "../_components/image-viewer";
import NumberedList from "../_components/numbered-list";

// data
import { MINDFUL_PROJECT_DATA } from "@/data/projects";

// styles
import styles from "./style.module.css";
import sharedStyles from "../style.module.css";
import { MINDFUL_COLORS } from "../../../../tailwind.config";

const FOLDER = "/mindful-project";

const bannerTextClass = "mb-0 text-white";

const MY_ROLE_SECTION_DATA = {
  duration: "4 months | Jan - Apr 2024",
  role: ["UI/UX Designer", "UX Researcher"],
  team: ["Evie Hu / Lead UX Designer @ Google"],
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

export default function MindfulPage() {
  return (
    <div className={styles.container}>
      <ProjectHeader
        header={MINDFUL_PROJECT_DATA.title}
        tags={MINDFUL_PROJECT_DATA.tags}
        photo={`${FOLDER}/mindful-title.png`}
      />
      <ImpactHeader isPerceivedImpact>
        <em>Millions of</em> stressed out college and high school{" "}
        <em>students</em> could use this mobile app every semester.
      </ImpactHeader>
      <div className="mb-separate mx-text">
        <h3>Helping my Friends</h3>
        <div className="mb-together">
          <p>
            During my senior year, many of my friends were overloaded with
            coursework and incredibly <strong>stressed out</strong>. For my
            senior capstone project, I created Mindful, a mobile app where
            students can track their tasks, ideas, and find curated music/sounds
            to study and take breaks. This app will help students finish work
            more efficiently to reduce stress and encourage breaks.
          </p>
          <p>
            What makes this mindfulness app different from others, is the
            combination of task organization with mindfulness.
          </p>
        </div>
        <MyRoleSection {...MY_ROLE_SECTION_DATA} />
      </div>
      <Banner background={MINDFUL_COLORS.primary}>
        <h3 className={bannerTextClass}>
          How might we help students reduce their stress levels?
        </h3>
      </Banner>
      <div className="my-separate mx-text">
        <h5>understanding the people</h5>
        <div className="flex gap-8">
          <div>
            <h3>Conducting competitive analysis</h3>
            <p>
              In my initial plan, I was thinking mostly about creating a
              meditation app so I considered the current features available in
              those apps.
            </p>
          </div>
          <div>
            <h3>5 semi-structured interviews</h3>
            <p>
              I conducted these interviews on my friends to understand the root
              of their stress and what they currently did to reduce their
              stress.
            </p>
          </div>
          <div>
            <h3>Desk research</h3>
            <p>
              I did secondary research to understand how helpful meditation apps
              actually are, and the best way to track tasks.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-mindful-bgSecond py-32 my-separate">
        <div className="mx-photo flex">
          <div>
            <h5>insights</h5>
            <h3>Current meditation apps don&#39;t offer task organization</h3>
            <p>
              In the apps I analyzed, I found that the meditation apps offered
              multiple avenues of meditation/breaks through sound, stories, and
              physical activity. The task app, on the other hand, was solely
              focused on organizing tasks.
            </p>
            <p>
              In the current market,{" "}
              <strong>
                there&#39;s no app that offers <i>both</i> an opportunity to
                take breaks and organize tasks.
              </strong>
            </p>
          </div>
          <div>
            {/* TODO: replace with actual photo */}
            <ImageViewer src={`${FOLDER}/mindful-cover.png`} alt="" />
            <div className={sharedStyles.photoCaptionText}>
              Competitive analysis breakdown with 2 meditation apps and 1 task
              app.
            </div>
          </div>
        </div>
      </div>
      <div className="my-separate mx-text">
        <h5>hmmm...plan needs changing</h5>
        <h3>
          Initial concept testing revealed that students didn&#39;t particularly
          enjoy meditation
        </h3>
        <p>
          The students I interviewed didn&#39;t find meditation useful and even
          <strong>worried that meditation would waste their time</strong>.
          However, 4 out of 5 mentioned that they recognized it was important to
          take breaks but felt too overwhelmed to do so.
        </p>
        <p>
          They would rather focus on their work than take a break, but not
          taking breaks would negatively affect their productivity and mental
          health.
        </p>
      </div>
      <Banner background={MINDFUL_COLORS.primary}>
        <h3 className={bannerTextClass}>
          “Meditation apps make me feel like I&#39;m wasting time, and I get
          more stressed worrying about the time I&#39;ve wasted.”
        </h3>
        <h4 className={`${bannerTextClass} font-medium mt-6`}>
          - Participant 1
        </h4>
      </Banner>
      <div className="my-separate mx-text">
        <h5>pivoting ideas</h5>
        <h3>
          Pivoting from solely meditation to an app that helps students focus on
          tasks and practice mindfulness
        </h3>
        <p>
          After completing my initial research, I realized there was an{" "}
          <strong>opportunity to create a new application,</strong> that would
          be ideal for students.
        </p>
        <p>
          I created a mindfulness mobile app where people can track their tasks,
          notes, and find curated music/sounds to focus and take breaks. This
          app will help people to finish work more efficiently to reduce stress
          and encourage breaks.
        </p>
      </div>
      <div className="bg-mindful-bgSecond my-separate py-32">
        <div className="mx-text">
          <h5>work preview</h5>
          <h3>
            Produced a component library, high-breadth mobile app, and Instagram
            ads
          </h3>
        </div>
        <div className="mx-[18%]">
          {/* TODO: replace this image */}
          <ImageViewer src={`${FOLDER}/mindful-cover.png`} alt="" />
        </div>
      </div>
      <div className="my-separate mx-photo flex gap-8 items-center">
        <div>
          {/* TODO: replace this image */}
          <ImageViewer src={`${FOLDER}/mindful-cover.png`} alt="" />
          <div className={sharedStyles.photoCaptionText}>
            First iterations considering features, visual hierarchy layouts, and
            user experience.
          </div>
        </div>
        <div>
          <h5>starting with mobile app</h5>
          <h3>
            Did 20+ iterations to narrow down visual layout, colors, and
            possible features
          </h3>
        </div>
      </div>
      <div className="my-separate mx-photo">
        {/* TODO: replace this image */}
        <ImageViewer src={`${FOLDER}/mindful-cover.png`} alt="" />
        <div className={sharedStyles.photoCaptionText}>
          Higher fidelity iterations for each feature.
        </div>
      </div>
      <div className="my-separate mx-photo flex gap-8">
        <div>
          <h5>brand</h5>
          <h3>Developing a brand that exudes mindfulness</h3>
          <p>
            I went through multiple iterations to create a mark that fully
            represented the application. In one of my iterations, I had the idea
            of combining the icons for the focus and breaks sections to
            represent the intersection my app offers.
          </p>
          <p>
            I <strong>actively incorporated feedback</strong> that my professor
            offered on making the lines coming out of the star go around
            instead.
          </p>
        </div>
        <div>
          {/* TODO: replace this image */}
          <ImageViewer src={`${FOLDER}/mindful-cover.png`} alt="" />
          <div className={sharedStyles.photoCaptionText}>
            Key design iterations for the development of the app mark.
          </div>
        </div>
      </div>
    </div>
  );
}
