// components
import ProjectHeader from "../_components/project-header";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import ImageViewer from "../_components/image-viewer";
import NumberedList from "../_components/numbered-list";
import { WorkflowList } from "../_components/workflow-list";

// data
import { MINDFUL_PROJECT_DATA } from "@/data/projects";

// styles
import sharedStyles from "../style.module.css";
import { MINDFUL_COLORS } from "../../../../tailwind.config";

const FOLDER = "/mindful-project";

const bannerTextClass = "mb-0 text-white";

const MY_ROLE_SECTION_DATA = {
  duration: "4 months | Jan - Apr 2024",
  role: ["UI/UX Designer", "UX Researcher"],
  advisor: ["Evie Hu / Lead UX Designer @ Google"],
};

const WORKFLOW_ITEMS = [
  {
    title: "Making task management easier",
    text: (
      <>
        <p>
          Students often have multiple classes and commitments they must keep
          track of.
        </p>
        <p>
          I created a quick and simple fill-in process, featuring checklists and
          a tagging system to simplify managing unique tasks.
        </p>
      </>
    ),
    src: `${FOLDER}/workflow/gif-1.png`,
    alt: "",
  },
  {
    title: "Improving focus levels",
    // text: "The Focus section offers curated music/noise from the user's own Spotify to help them lock in. This section also uses generative AI to create longer playlists with similar songs to allow users to focus for longer periods",
    text: (
      <>
        <p>
          The Focus section offers curated music/noise from the user&apos;s own
          Spotify to help them lock in.
        </p>
        <p>
          This section also uses generative AI to create longer playlists with
          similar songs to allow users to focus for longer periods
        </p>
      </>
    ),
    src: `${FOLDER}/workflow/gif-1.png`,
    alt: "",
  },
  {
    title: "An option to pause ✨",
    text: (
      <>
        <p>
          Amid the tasks and focus pages there&apos;s one <b>key feature</b>:
          the breaks section.
        </p>
        <p>
          Many of the users I talked too, all said one key phrase:{" "}
          <b>&ldquo;I don&apos;t take enough breaks.&rdquo;</b>
        </p>
        <p>
          Having this breaks section be apart of the same mobile app gives the
          students the opportunity and the chance to take the breaks they need.
        </p>
      </>
    ),
    src: `${FOLDER}/workflow/gif-1.png`,
    alt: "",
  },
  {
    title: "A better way to track ideas",
    text: "In my user interviews, 3 out of 5 participants noted difficulty in remembering random ideas that would pop into their head for an assignment or project.",
    src: `${FOLDER}/workflow/gif-1.png`,
    alt: "",
  },
];

const FINAL_THOUGHTS_LIST = [
  {
    title: "Making products accessible helps everyone",
    text: "My professor challenged us to take an existing project and improve its accessibility. This taught me how an accessibility perspective can improve user experience for all.",
  },
  {
    title: "Learning to prioritize features",
    text: "I wish had all the time in the world, but unfortunately that’s not the case. I had to prioritize the most impactful features to ensure I had the time to develop them fully.",
  },
];

export default function MindfulPage() {
  return (
    <div className="mindful-container">
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
            coursework and incredibly <b>stressed out</b>. For my senior
            capstone project, I created Mindful, a mobile app where students can
            track their tasks, ideas, and find curated music/sounds to study and
            take breaks. This app will help students finish work more
            efficiently to reduce stress and encourage breaks.
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
        <div className="grid md:grid-cols-2 gap-8">
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
      <div className="bg-mindful-background-secondary py-32 my-separate">
        <div className="mx-photo grid lg:grid-cols-7 gap-8 items-center">
          <div className="col-span-3">
            <h5>insights</h5>
            <h3>Current meditation apps don&apos;t offer task organization</h3>
            <p>
              In the apps I analyzed, I found that the meditation apps offered
              multiple avenues of meditation/breaks through sound, stories, and
              physical activity. The task app, on the other hand, was solely
              focused on organizing tasks.
            </p>
            <p>
              In the current market,{" "}
              <b>
                there&apos;s no app that offers <i>both</i> an opportunity to
                take breaks and organize tasks.
              </b>
            </p>
          </div>
          <div className="col-span-4">
            <ImageViewer src={`${FOLDER}/competitive-analysis.jpg`} alt="" />
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
          Initial concept testing revealed that students didn&apos;t
          particularly enjoy meditation
        </h3>
        <p>
          The students I interviewed didn&apos;t find meditation useful and even
          <b>worried that meditation would waste their time</b>. However, 4 out
          of 5 mentioned that they recognized it was important to take breaks
          but felt too overwhelmed to do so.
        </p>
        <p>
          They would rather focus on their work than take a break, but not
          taking breaks would negatively affect their productivity and mental
          health.
        </p>
      </div>
      <Banner background={MINDFUL_COLORS.primary}>
        <h3 className={bannerTextClass}>
          &ldquo;Meditation apps make me feel like I&apos;m wasting time, and I
          get more stressed worrying about the time I&apos;ve wasted.&rdquo;
        </h3>
        <h4 className={`${bannerTextClass} font-medium mt-8`}>
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
          <b>opportunity to create a new application,</b> that would be ideal
          for students.
        </p>
        <p>
          I created a mindfulness mobile app where people can track their tasks,
          notes, and find curated music/sounds to focus and take breaks. This
          app will help people to finish work more efficiently to reduce stress
          and encourage breaks.
        </p>
      </div>
      <div className="bg-mindful-background-secondary my-separate py-32">
        <div className="mx-text mb-together">
          <h5>work preview</h5>
          <h3>
            Produced a component library, high-breadth mobile app, and Instagram
            ads
          </h3>
        </div>
        <div className="mx-[18%]">
          <ImageViewer src={`${FOLDER}/work-preview.png`} alt="" />
        </div>
      </div>
      <div className="my-separate mx-photo grid md:grid-cols-5 gap-8 items-center">
        <div className="col-span-2 md:order-2">
          <h5>starting with mobile app</h5>
          <h3>
            Did 20+ iterations to narrow down visual layout, colors, and
            possible features
          </h3>
        </div>
        <div className="col-span-3">
          <ImageViewer src={`${FOLDER}/lowfis.jpg`} alt="" />
          <div className={sharedStyles.photoCaptionText}>
            First iterations considering features, visual hierarchy layouts, and
            user experience.
          </div>
        </div>
      </div>
      <div className="my-separate mx-photo">
        <ImageViewer src={`${FOLDER}/iterations.png`} alt="" />
        <div className={sharedStyles.photoCaptionText}>
          Higher fidelity iterations for each feature.
        </div>
      </div>
      <div className="my-separate mx-photo grid lg:grid-cols-5 gap-8 items-center">
        <div className="col-span-2">
          <h5>brand</h5>
          <h3>Developing a brand that exudes mindfulness</h3>
          <p>
            I went through multiple iterations to create a mark that fully
            represented the application. In one of my iterations, I had the idea
            of combining the icons for the <i>focus and breaks</i> sections to
            represent the intersection my app offers.
          </p>
          <p>
            I <b>actively incorporated feedback</b> that my professor offered on
            making the lines coming out of the star go around instead.
          </p>
        </div>
        <div className="col-span-3">
          <ImageViewer src={`${FOLDER}/app-icon.png`} alt="" />
          <div className={sharedStyles.photoCaptionText}>
            Key design iterations for the development of the app mark.
          </div>
        </div>
      </div>
      <div className="bg-mindful-background-secondary py-32 my-separate">
        <div className="mx-text">
          <div className="mb-together">
            <h5>the solution</h5>
            <h3>
              A mobile app that allows students to organize their tasks, focus,
              and take valuable breaks: Mindful, the app that does it all
            </h3>
          </div>
          <div>
            <ImageViewer src={`${FOLDER}/mindful-images.png`} alt="" />
            <div className={sharedStyles.photoCaptionText}>
              A final solution teaser.
            </div>
          </div>
        </div>
      </div>

      <div className="my-separate mx-text">
        <WorkflowList workflowItems={WORKFLOW_ITEMS} isMobileWorkflow />
      </div>

      <Banner background={MINDFUL_COLORS.primary}>
        <h3 className={bannerTextClass}>
          How might we accommodate and de-stigmatize to improve accessibility?
        </h3>
      </Banner>

      <div className="my-separate mx-[18%] grid lg:grid-cols-7 items-center gap-8">
        <div className="col-span-3">
          <h3>Adding design accommodations for blind/low-vision users</h3>
          <p>
            Currently, my application uses multiple text input fields. This can
            be cumbersome for someone using a screen reader.
          </p>
          <p>
            Thus, I created a <b>modification</b> where one can{" "}
            <b>audibly record their tasks/notes</b> instead of typing. This not
            only accommodates screen recorders, but also utilizes a
            de-stigmatized method that is commonly used.
          </p>
        </div>
        <div className="col-span-4">
          <ImageViewer src={`${FOLDER}/accessibility-1.png`} alt="" />
          <div className={sharedStyles.photoCaptionText}>
            Accommodating users by creating an audio recording alternative.
          </div>
        </div>
      </div>
      <div className="mt-separate mb-together mx-text">
        <h5>de-cluttering the screen</h5>
        <h3>
          Making it easier for screen reader users to find primary buttons
        </h3>
        <p>
          Screen readers read from left to right from top to bottom, stopping at
          every item on the screen.
        </p>
        <p>
          I wanted to make it easier and faster for users who use screen readers
          to complete their tasks. Thus, I removed unnecessary items from the
          screen to allow the screen reader to find the main button faster.
        </p>
      </div>
      <div className="mb-separate mx-photo">
        <ImageViewer src={`${FOLDER}/accessibility-2.png`} alt="" />
        <div className={sharedStyles.photoCaptionText}>
          Explaining how the screen is optimized for screen readers.
        </div>
      </div>
      <div className="bg-background-dark py-32 my-separate">
        <div className="mx-text mb-together">
          <h5 className="text-white">thinking ahead</h5>
          <h3 className="text-white">
            Designing a component library for the basis of future work
          </h3>
          <p className="text-white">
            I created this component library to ensure consistency throughout
            the application. In the future, if this application were fully
            developed, the developers will have reusable blocks to create a
            unified look.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-separate mx-[10%]">
          <ImageViewer src={`${FOLDER}/design-system1.jpg`} alt="" />
          <ImageViewer src={`${FOLDER}/design-system2.jpg`} alt="" />
        </div>
        <div className="mx-text mb-together">
          <h3 className="text-white">
            Developing Instagram ads to publicize my app: <i>Mindful</i>
          </h3>
          <p className="text-white">
            In these Instagram advertisements, I focused on advertising specific
            mindsets that the application would help cultivate. They intended to
            evoke a sense of mindfulness and calmness that the app offers.
          </p>
        </div>
        <div className="mx-[10%]">
          {/* maybe want this to be 3 images? */}
          <ImageViewer src={`${FOLDER}/instagram-posts.png`} alt="" />
        </div>
      </div>
      <div className="mx-text">
        <h5>final thoughts</h5>
        <h3>Pivoting is ok, and may even help to create something better</h3>
        <p>
          I think the biggest thing I learned through this project is that
          it&apos;s perfectly normal to change your initial idea. At the
          beginning, I was set on creating a meditation app, but taking the time
          to understand my users&apos; needs helped me realize that my initial
          plan wouldn&apos;t be that helpful.
        </p>
      </div>
      <div className="my-together mx-text">
        <NumberedList
          numberColor={MINDFUL_COLORS.secondary}
          list={FINAL_THOUGHTS_LIST}
        />
      </div>
      {/* MORE PROJECTS THING */}
    </div>
  );
}
