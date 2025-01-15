// components
import ProjectHeader from "../_components/project-header";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import ImageViewer from "../_components/image-viewer";
import NumberedList from "../_components/numbered-list";
import ImageCarousel from "../_components/image-carousel";

// data
import { FAT_PROJECT_DATA } from "@/data/projects";

// styles
import styles from "./style.module.css";
import sharedStyles from "../style.module.css";
import { FAT_PROJECT_COLORS } from "../../../../tailwind.config";

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

const CAROUSEL_FOLDER = `${FOLDER}/carousel-lowfis`;

const IMAGE_CAROUSEL_DATA = [
  {
    src: `${CAROUSEL_FOLDER}/lowfi1.png`,
    alt: "alt",
  },
  {
    src: `${CAROUSEL_FOLDER}/lowfi2.png`,
    alt: "alt",
  },
  {
    src: `${CAROUSEL_FOLDER}/lowfi3.png`,
    alt: "alt",
  },
  {
    src: `${CAROUSEL_FOLDER}/lowfi4.png`,
    alt: "alt",
  },
];

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
      <ImpactHeader>
        <em>100s of Faculty & 10+ Members</em> of the Merit Committee will use
        this application <em>each year.</em>
      </ImpactHeader>
      <div className="mb-separate mx-text">
        <h3>The Spark</h3>
        <div className="mb-together">
          <p>
            Every year, the College of Media Arts and Design &#40;CAMD&#41;
            faculty must fill out an <b>exhausting 10-page paper form</b> to
            track their completed activities to earn merit. The Merit Committee
            then sorts through <b>100s of forms</b> to approve activities and
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
        <ImageViewer src={`${FOLDER}/paper-form.png`} alt="alt" />
        <div className={sharedStyles.photoCaptionText}>
          The annoying & tedious annual paper form.
        </div>
      </div>
      <div className="mt-together mb-separate mx-text">
        <h5>research</h5>
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
        <div className="bg-background-dark pt-32 pb-separate">
          <div className="mx-text mb-together">
            <h5 className="text-white">iterations</h5>
            <h3 className="text-whiteWhite">
              Condensing necessary information to <i>one page</i> to reduce
              facultys&apos; cognitive and physical efforts
            </h3>
          </div>
          {/* TODO: INSERT THE IMAGE CAROUSEL FOR ITERATIONS */}
          <ImageCarousel images={IMAGE_CAROUSEL_DATA} />
          <div className={`${sharedStyles.photoCaptionText} mx-photo`}>
            First iterations of the activity dashboard.
          </div>
        </div>
        <div className="bg-background-dark-secondary py-32 px-photo">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div className="text-white col-span-full lg:col-span-1 lg:order-2">
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
            <div className="col-span-full lg:col-span-2 lg:order-1">
              <ImageViewer
                src={`${FOLDER}/micro-interactions.png`}
                alt="image showing micro interactions"
              />
            </div>
          </div>
        </div>
        <div className="bg-background-dark pt-separate pb-32">
          <div className="mx-text mb-together">
            <h5 className="text-white">solution</h5>
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
      <div className="my-separate mx-photo grid grid-cols-3 gap-8 items-center">
        <div className="mt-together col-span-full lg:col-span-1">
          <h5>design system</h5>
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
        <div className="col-span-full lg:col-span-2">
          <ImageViewer
            src={`${FOLDER}/type-colors.png`}
            alt="image of types and colors"
          />
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
        <h5>ideation &#40;again:&#41;&#41;</h5>
        <h3>
          How might we help MC members score the faculty members submitted
          activities faster and fairly?
        </h3>
        <p>
          During my second semester on this project, we shifted gears to focus
          on the Merit Committee&apos;s side of the application. The Merit
          Committee&apos;s members{" "}
          <b>main priority was to quickly and accurately score</b> the
          faculty&apos;s submitted activities.
        </p>
        <p>
          For this side of the application,{" "}
          <b>the client made a few requests.</b> In the dashboard of the
          professors&apos; submitted activities, he wanted to be able to{" "}
          <b>see individual activity scores, final score, and any comments</b>{" "}
          that were added by other committee members.
        </p>
      </div>
      <div className="mt-separate mb-together mx-photo">
        <ImageViewer
          src={`${FOLDER}/professor-card-iter.png`}
          alt="professor card before and after"
        />
        <div className={sharedStyles.photoCaptionText}>
          Each professor card required 3 individual activity scores, final
          score, and a possible comment.
        </div>
      </div>
      <div className="mt-together mb-separate mx-text">
        <h5>iterations</h5>
        <h3>
          Completed 20+ iterations which led to using visual hierarchy to
          highlight the final score
        </h3>
        <p>
          For the professor cards, the other designer and I did rapid iteration
          to figure out the best layout to help the Merit Committee understand
          each professor&apos;s scores at a glance.
        </p>
        <p>
          In the final design,{" "}
          <b>I improved the card&apos;s visual hierarchy</b> through
          highlighting the final score through shape, color, and size.
        </p>
      </div>
      <div className="mx-photo my-separate">
        <div>
          <ImageViewer src={`${FOLDER}/professor-dashboard.png`} alt="alt" />
        </div>
        <div className={sharedStyles.photoCaptionText}>
          Dashboard of professor cards and graph to to help MC members track
          score averages.
        </div>
      </div>
      <div className="bg-background-dark-secondary py-32 px-photo">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="text-white col-span-full lg:col-span-1">
            <h5 className="text-white">problem solving</h5>
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
          <div className="col-span-full lg:col-span-2">
            <ImageViewer src={`${FOLDER}/sidebar.png`} alt="alt" imageClass=" m-[-1rem]" />
            <div className={sharedStyles.photoCaptionText}>
              The iteration process of the scoring system.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-dark py-32">
        <div className="mb-together mx-text">
          <h5 className="text-white">final deliverables</h5>
          <h3 className="text-whiteWhite">
            Created an end-to-end experience for both faculty and MC members
            from login to scoring
          </h3>
        </div>
        <div className="mx-photo flex gap-8">
          <div>
            {/* TODO: REPLACE WITH GIF */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className={sharedStyles.photoCaptionText}>
              Full faculty-facing user experience.
            </div>
          </div>
          <div>
            {/* TODO: REPLACE WITH GIF */}
            <ImageViewer src={`${FOLDER}/fat-title.png`} alt="alt" />
            <div className={sharedStyles.photoCaptionText}>
              Full Merit Committee member-facing user experience.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-text mt-separate mb-together">
        <h5>final thoughts</h5>
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
      <div className="mt-separate mx-text">
        <div>
          <ImageViewer src={`${FOLDER}/team-fat.png`} alt="me and my team" />
        </div>
        <p className="mt-6 mb-0 text-center text-[#8E8E8E]">
          My amazing team &lt;3
        </p>
      </div>
      {/* MORE PROJECTS THING */}
    </div>
  );
}
