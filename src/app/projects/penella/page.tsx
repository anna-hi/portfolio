// components
import ProjectHeader from "../_components/project-header";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import ImageViewer from "../_components/image-viewer";
import NumberedList from "../_components/numbered-list";
import { WorkflowList } from "../_components/workflow-list";

// data
import { PENELLA_PROJECT_DATA } from "@/data/projects";

// styles
import sharedStyles from "../style.module.css";
import { PENELLA_COLORS } from "../../../../tailwind.config";
import ImageCarousel from "../_components/image-carousel";

const FOLDER = "/penella-project";

const bannerTextClass = "mb-0";

const MY_ROLE_SECTION_DATA = {
  duration: "4 months | Sept - Dec 2022",
  role: ["UI/UX Designer", "UX Researcher"],
  team: ["me :)"],
};

const EXISTING_PROBLEM_LIST = [
  { title: "Inability to find those journal entries again" },
  { title: "No structure to organize my thoughts" },
  { title: "Not fun to use" },
];

const CAROUSEL_FOLDER = `${FOLDER}/carousel`;

const IMAGE_CAROUSEL_DATA = [
  {
    src: `${CAROUSEL_FOLDER}/penella-sketch1.png`,
    alt: "alt",
  },
  {
    src: `${CAROUSEL_FOLDER}/penella-sketch2.png`,
    alt: "alt",
  },
  // {
  //   src: `${CAROUSEL_FOLDER}/penella-sketch3.png`,
  //   alt: "alt",
  // },
  {
    src: `${CAROUSEL_FOLDER}/penella-sketch4.png`,
    alt: "alt",
  },
];

const WORKFLOW_ITEMS = [
  {
    title: "Structured journal entries",
    text: "The structured journal entry allows the user to efficiently type their thoughts with a keyword tagging system to find past entries.",
    src: `${FOLDER}/penella-cover.jpg`,
    alt: "",
  },
  {
    // TODO: add sparkle emoji or something here
    title: "Adding some sparkle",
    text: (
      <>
        <p>
          The digital journal offers customization as a special function that
          allows users to truly make it their own.
        </p>
        <p>This includes adding stickers and gifs.</p>
      </>
    ),
    src: `${FOLDER}/penella-cover.jpg`,
    alt: "",
  },
  {
    title: "Logging your mood",
    text: (
      <>
        <p>
          The moodboard is offered for users who don&apos;t enjoy typing but
          would like to log daily moods and other todo items.
        </p>
        <p>
          A different theme can be selected for each month for more delight.
        </p>
      </>
    ),
    src: `${FOLDER}/penella-cover.jpg`,
    alt: "",
  },
];

export default function PenellaPage() {
  return (
    <div className="penella-container">
      <ProjectHeader
        header={PENELLA_PROJECT_DATA.title}
        tags={PENELLA_PROJECT_DATA.tags}
        photo={`${FOLDER}/penella-title.png`}
      />
      <ImpactHeader isPerceivedImpact>
        <em>Millions of women</em> could use this journaling platform to express
        their creativity and take care of their <em>mental health</em>
      </ImpactHeader>
      <div className="mb-separate mx-text">
        {/* TODO: ADD WAND EMOJI */}
        <h3>Bippity Boppity Boo!</h3>

        <div className="mb-together">
          <p>
            Penella or Pen-ella is a classroom project-built from my own
            imagination. The name is inspired by Cinderella, otherwise known as
            Cinder-ella. Penella is a journaling website unlike any other, given
            its customizable nature and additional features such as a calendar,
            moodboard, gifs, and stickers.
          </p>
          <p>
            Penella aims to combine the customizability of bullet journaling
            with the ease of a digital diary.
          </p>
        </div>
        <MyRoleSection {...MY_ROLE_SECTION_DATA} />
      </div>
      <Banner background={PENELLA_COLORS.background.banner}>
        <h3 className={bannerTextClass}>
          How might we create a space where women can express their emotions and
          feel creativity fulfilled?
        </h3>
      </Banner>
      <div className="my-separate mx-text">
        <h5>an existing problem</h5>
        {/* TODO: add the notes photo emoji */}
        <h3>The Notes app does not work as a diary</h3>
        <p className="mb-together">
          When I often feel overwhelmed or irritated, I feel the urge to write
          down all my thoughts. This usually manifests into a quick journaling
          entry in my Notes app due to lack of time. However, there are 3 main
          issues with this method:
        </p>
        <NumberedList
          list={EXISTING_PROBLEM_LIST}
          numberColor={PENELLA_COLORS.orange}
        />
      </div>
      <div className="bg-penella-background-secondary py-32 my-separate">
        <div className="mx-photo grid xl:grid-cols-3 gap-8">
          <div>
            <h5>understanding the people</h5>
            <h3>Building target personas based on real people</h3>
            <p>
              I asked 13 open-ended questions, focusing on values and
              motivations. I referenced these findings from my 5 interviews
              throughout the entire design process.
            </p>
            <ul className="list-disc ms-8">
              <li>
                Users enjoy <b>typing</b> their journals for the{" "}
                <b>speed and efficiency</b>
              </li>
              <li>Bullet/physical journaling takes a lot of time and effort</li>
              <li>
                digital journalists like finding certain entries through key
                words
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2">
            <ImageViewer src={`${FOLDER}/user-personas.png`} alt="" />
            <div className={sharedStyles.photoCaptionText}>
              Key user personas to design for.
            </div>
          </div>
        </div>
      </div>
      <div className="my-separate mx-text">
        <h5>the solution</h5>
        <h3>
          Penella: a personal digital journal space equipped with a structured
          journal system, mood boards, and customization.
        </h3>
        <p>
          From my research, I learned about bullet journaling: a quick and
          customizable way of journaling that is highly stylized. However, there
          was one key problem that many people pointed out:{" "}
          <b>a lack of time.</b>
        </p>
        <p>
          <b>3 out of 5 people</b> I interviewed mentioned they had done bullet
          journaling in the past, but stopped either due to the inconvenience or
          simply not having enough time. Penella could help make journaling more
          convenient without sacrificing customizability.
        </p>
      </div>
      <div className="bg-background-dark mt-separate pt-32 pb-separate">
        <div className="mx-text mb-together">
          <h5>iterations</h5>
          <h3 className="text-whiteWhite">
            Ideating potential user workflows to help create a{" "}
            <i>structured and customizable space</i>
          </h3>
        </div>
        {/* TODO: replace with the image carousel */}
        <ImageCarousel images={IMAGE_CAROUSEL_DATA} />
      </div>
      <div className="bg-background-dark-secondary mb-separate py-32">
        <div className="mx-[20%] grid lg:grid-cols-3 gap-8 items-center">
          <div className="text-whiteWhite lg:order-2">
            <h3 className="text-whiteWhite">
              <i>Visually communicating</i> how Bryan interacts with Penella
            </h3>
            <p>
              I created a storyboard to visualize and communicate the
              users&apos; journey, from the initial spark to its result.
            </p>
            <p>
              This helped to communicate how users can use Penella to create
              customized journal entries to commemorate happy memories.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ImageViewer src={`${FOLDER}/storyboard.png`} alt="" />
            <div className={sharedStyles.photoCaptionText}>
              A storyboard to understand how people will use Penella.
              (Bryan&apos;s Story)
            </div>
          </div>
        </div>
      </div>
      <div className="my-separate mx-text">
        <h5>adding the it factor</h5>
        <h3>Crafting Penella&apos;s magical aesthetic with group ideation</h3>
        <p>
          I did quick <b>15-minute brainstorm sessions</b> with 2 of my
          classmates, where we each conceived our own ideas for my project.
        </p>
        <p>
          From this group ideation session, my classmates offered ideas on a fun
          notebook aesthetic, adding adorable stickers, etc. This ideation
          session helped me to push my ideas further and think about Penella
          from a new perspective.
        </p>
      </div>
      <div className="mt-separate mb-together mx-photo">
        <ImageViewer src={`${FOLDER}/two-versions.png`} alt="" />
      </div>
      <div className="mt-together mb-separate mx-text">
        <h3>Leveraging peer feedback to choose a design direction</h3>
        <p>
          I first started with two different versions of the home page. When
          creating these two versions, I focused on the <b>creative and fun</b>{" "}
          aspect of Penella.
        </p>
        <p>
          In the version on left, I created a classic pink girly aesthetic and
          for the second, I focused on the &ldquo;daydreaming&rdquo; aspect
          associated with feelings and thoughts. After some user testing, I
          received feedback from my peers that the blue version was difficult to
          read and the pink version had more interesting alignment. Thus, I
          moved forward with the pink version.
        </p>
      </div>
      <div className="bg-penella-background-secondary py-32 my-separate">
        <div className="mb-together">
          <div className="mx-text">
            <h5>final deliverables</h5>
            <h3>
              Produced web & mobile design for a digital journal equipped with
              entry tagging, customizability, and fun moodboards{" "}
            </h3>
          </div>
          <div className="mx-[20%]">
            <ImageViewer src={`${FOLDER}/solution-teaser.png`} alt="" />
            <div className={sharedStyles.photoCaptionText}>
              A final solution teaser.
            </div>
          </div>
        </div>
        <div className="mt-together mx-photo">
          <WorkflowList workflowItems={WORKFLOW_ITEMS} />
        </div>
      </div>
      <div className="mt-separate mx-text">
        <h5>next steps</h5>
        <h3>
          Building out the application depth with more functionality and error
          states
        </h3>
        <p>
          Throughout this project, I had the opportunity to fully go through the
          design process with user interviews, research, storyboarding, and
          iterations. With more time, this project could be developed further to
          become a real app.
        </p>
      </div>
    </div>
  );
}
