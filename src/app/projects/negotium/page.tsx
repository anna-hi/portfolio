// components
import ProjectHeader from "../_components/project-header";
import ImpactHeader from "../_components/impact-header";
import MyRoleSection from "../_components/my-role-section";
import Banner from "../_components/banner";
import ImageViewer from "../_components/image-viewer";
import NumberedList from "../_components/numbered-list";
import { WorkflowList } from "../_components/workflow-list";

// data
import { NEGOTIUM_PROJECT_DATA } from "@/data/projects";

// styles
import { NEGOTIUM_COLORS } from "../../../../tailwind.config";

const FOLDER = "/negotium-project";
const getNegotiumPhoto = (photo: string) => `${FOLDER}/${photo}`;

const bannerTextClass = "mb-0 text-background-dark";

const MY_ROLE_SECTION_DATA = {
  duration: "4 months | Aug - Dec 2024",
  role: ["Product Designer", "UX Researcher"],
  team: [
    "1 Product Manager, 2 Developers",
    "2 Content Writers, Product Designers -",
    "Anna Ji, Jackie Strawbridge",
  ],
};

const CONVERGENT_THINKING_LIST = [
  {
    title: "Chat-based negotiation practice with AI feedback",
    text: "Negotiation practice in chat form, where users can choose to text with a real person or a bot using an LLM. Either way, each version will receive real-time personalized feedback.",
  },
  {
    title: "Live negotiation practice calls with another user",
    text: "The most realistic practice option, where users can talk to simulate a real negotiation.",
  },
  {
    title: "Pokémon-style multiple-choice negotiation game",
    text: "A game where you can practice negotiating through selecting multiple choice answer.",
  },
];

const WORKFLOW_ITEMS = [
  {
    title: "Negotiation battle using multiple choice",
    text: (
      <>
        <p>
          In this format, the user plays out a negotiation scenario with
          pre-defined choices.
        </p>
        <p>
          This makes it easy for users to practice and learn different
          approaches in negotiation.
        </p>
      </>
    ),
    src: getNegotiumPhoto("workflow/negotium-game.gif"),
    alt: "",
  },
  {
    title: "Chat negotiation practice with personalized AI feedback",
    text: (
      <>
        <p>
          In chat, you can practice negotiating either with a real person or a
          bot using LLMs.
        </p>
        <p>
          This option gives you more opportunity to think about your responses
          and provides live feedback. &#40;+ less scary than calling&#41;
        </p>
      </>
    ),
    src: getNegotiumPhoto("workflow/negotium-chat.gif"),
    alt: "",
  },
  {
    title: "Live negotiation practice with another user",
    text: (
      <>
        <p>The closest you could get to a real negotiation.</p>
        <p>
          The best way to improve your negotiation skills is to practice them
          with a real person.
        </p>
      </>
    ),
    src: getNegotiumPhoto("workflow/negotium-call.gif"),

    alt: "",
  },
];

const FINAL_THOUGHTS_LIST = [
  {
    title: "Dealing with ambiguity",
    text: "We defined our own problem space by prioritizing key issues and focusing on one feature.",
  },
  {
    title: "Accepting that people don’t read",
    text: "This project gave me a harsh reminder that people do not like reading large amounts of text, especially on a phone. The less text there is, the more likely someone will read it.",
  },
];

// TODO: GO THROUHG COLORS ON DARK BACKGROUND AND MAEK SURE THEYRE CORRECT
export default function NegotiumPage() {
  return (
    <article className="negotium-container">
      <ProjectHeader
        header={NEGOTIUM_PROJECT_DATA.title}
        tags={NEGOTIUM_PROJECT_DATA.tags}
        photo={getNegotiumPhoto("negotium-title.png")}
      />
      <ImpactHeader isPerceivedImpact>
        <em>Millions of women</em> negotiate everyday and could use this mobile
        app to improve their skills.
      </ImpactHeader>
      <div className="mb-separate mx-text">
        <h3>Practice Makes Perfect</h3>
        <div className="mb-together">
          <p>
            I worked as a Product Designer at CoEx Lab within the Human Computer
            Interaction Institute at Carnegie Mellon University. More
            specifically, I contributed to <b>Negotium</b>, a mobile app{" "}
            <b>designed for women, by women</b> to teach negotiation skills.
          </p>
          <p>
            During our time on the project, the other designer and I created a
            negotiation practice feature equipped with real-time calls, LLM and
            AI-based chat practice, and a negotiation game.
          </p>
        </div>
        <MyRoleSection {...MY_ROLE_SECTION_DATA} isDark />
      </div>
      <Banner background={NEGOTIUM_COLORS.primary}>
        <h3 className={bannerTextClass}>
          How might we connect people to practice their negotiation skills
          together?
        </h3>
      </Banner>
      <div className="mt-separate mb-together mx-text">
        <h5>defining the problem</h5>
        <h3>Turning diary study results into a design opportunity</h3>
        <p>
          As a starting point, the past designer had conducted a diary study
          resulting in a list of design and content issues. We selected high
          priority issues and then generated &ldquo;how-might-we&apos;s&rdquo;{" "}
          <b>using Miro</b> to frame the individual challenges.
        </p>
        <p>
          From our &ldquo;how-might-we&apos;s&rdquo;, we determined that the one
          above would be most impactful to the application and ideated upon
          them.
        </p>
      </div>
      <figure className="mb-separate mx-photo">
        <ImageViewer src={getNegotiumPhoto("whiteboard.png")} alt="" />
        <figcaption>
          Whiteboard ideation session and a classification of those ideas based
          on complexity and tone.
        </figcaption>
      </figure>
      <div className="bg-background-dark-secondary py-32">
        <div className="mx-text mb-together">
          <h5>competitive analysis</h5>
          <h3>Analyzing similar applications to identify gaps and strengths</h3>
          <p>
            Sopu &#40;the most similar app to Negotium&#41; had a negotiation
            practice feature available, but with some key issues: the{" "}
            <b>scenario description was too long</b> and you had to set up the{" "}
            <b>practice session outside of the application.</b>
          </p>
          <p>
            For italki, most of the features were locked behind pay walls, but
            they offered more <b>community engagement via a forum</b> where
            people could post a variety of content.
          </p>
        </div>
        <figure className="mx-photo mb-separate">
          <ImageViewer
            src={getNegotiumPhoto("negotium-compResearch.png")}
            alt=""
          />
          <figcaption>
            Competitive analysis of Sopu &#40;a negotiation teaching app&#41;
            and italki &#40;a language learning app&#41;.
          </figcaption>
        </figure>
        <div className="mx-photo grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h5>design sprints</h5>
            <h3>Sketching Crazy 8s to decide practice feature concepts</h3>
            <p>
              In 8 minutes, the other designer and I each sketched out 8 rough
              ideas.
            </p>
            <p>
              From there, we narrowed down our concepts by starring our favorite
              concepts, which included chat and call negotiation practice and a
              story corner where users could post for the community aspect from
              my sketches.
            </p>
          </div>
          <figure className="lg:col-span-3">
            <ImageViewer src={getNegotiumPhoto("crazy-8s.jpg")} alt="" />
            <figcaption>8 sketches to communicate my ideas.</figcaption>
          </figure>
        </div>
      </div>
      <div className="my-separate mx-text">
        <h5>convergent thinking</h5>
        <h3>Converging down to 3 types of practice options</h3>
        <p className="mb-together">
          After discussing our top ideas with the whole team, we further
          narrowed down our ideas down to 3 concepts.{" "}
          <b>
            My work focused on the first 2 types of practice options: chat and
            call.
          </b>
        </p>
        <NumberedList list={CONVERGENT_THINKING_LIST} numberColor="#FFF" />
      </div>
      <div className="bg-whiteWhite py-32 light">
        <div className="mx-text mb-separate">
          <h3>
            Initial testing provided valuable feedback for future iterations
          </h3>
          <p>
            With a design system already in place, we could easily jump to
            high-fidelity prototypes to test with 5 users in our target
            audience. This step was crucial to making critical design changes
            that greatly improved the usability of our practice feature.
          </p>
        </div>
        <div className="mx-photo mb-separate grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h5>call sequence</h5>
            <h3>
              Providing users clear signifiers when joining or ending a call
            </h3>
            <p>
              <b>3 out of 5 participants</b> experienced confusion in the call
              experience.
            </p>
            <p>
              The initial testing made me realize that users need strong
              indications of when a call is starting or ending.
            </p>
          </div>
          <figure className="lg:col-span-3">
            <ImageViewer src={getNegotiumPhoto("call-sequence.jpg")} alt="" />
          </figure>
        </div>
        <div className="mx-photo grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h5>scenario description</h5>
            <h3>
              Improving readability by highlighting text and dividing content
              across pages
            </h3>
            <p>
              <b>4 out of 5 participants didn&apos;t read</b> or skipped over
              this section entirely because of the amount of text on one page.
            </p>
            <p>
              To rectify this, I limited the amount of text per page and
              highlighted important information.
            </p>
          </div>
          <figure className="lg:col-span-3">
            <ImageViewer src={getNegotiumPhoto("scenario.jpg")} alt="" />
          </figure>
        </div>
      </div>

      <div className="mt-separate mb-together mx-text">
        <h5>a challenge i tackled</h5>
        <h3>
          Deciding how users access the scenario description when practicing in
          chat form
        </h3>
        <p>
          Before each session, users select a scenario topic to practice
          negotiating. To assist with scenario recall during the session, I
          provided a button to access the scenario description.
        </p>
        <p>
          The button&apos;s placement, however, sparked considerable debate both
          among users and the team. As a result, I explored several iterations
          to determine the most intuitive location.
        </p>
      </div>
      <figure className="mb-separate mx-photo">
        <ImageViewer src={getNegotiumPhoto("button-iteration.jpg")} alt="" />
        <figcaption>
          Pink outline highlights the location of the scenario description
          button in each iteration.
        </figcaption>
      </figure>

      <div className="bg-whiteWhite py-32 px-[20%] light">
        <h5>final deliverables</h5>
        <h3 className="mb-together">
          An end-to-end practice experience with 3 levels of practice options
          ranging from multiple choice, chat, and call
        </h3>
        <figure>
          <ImageViewer src={getNegotiumPhoto("negotium-teaser.png")} alt="" />
          <figcaption>
            A snapshot of each level from easy to difficult &#40;left to
            right&#41;.
          </figcaption>
        </figure>
      </div>

      <div className="my-separate mx-text bg-background-dark">
        <WorkflowList workflowItems={WORKFLOW_ITEMS} isMobileWorkflow />
      </div>

      <div className="bg-whiteWhite py-32 light">
        <div className="mx-text mb-together">
          <h5>guerilla testing</h5>
          <h3>
            Validating our practice feature with a 2nd round of user testing
          </h3>
          <p>
            After creating the full practice experience, we set out into the
            wild to find potential users. <b>With $5 Starbucks gift cards</b> in
            hand, the other designer and I conducted{" "}
            <b>guerrilla user testing</b> by going to 3 different locations to
            find 5 strangers to test with.
          </p>
          <p>
            <b>
              All users were able to fully understand and use each practice
              option with ease.
            </b>
          </p>
        </div>
        <figure className="mb-separate mx-[20%]">
          <ImageViewer src={getNegotiumPhoto("guerilla-testing.png")} alt="" />
          <figcaption>
            Some quick shots of our participants trying out the new feature.
          </figcaption>
        </figure>

        <Banner background={NEGOTIUM_COLORS.primary}>
          <h3 className={bannerTextClass}>
            &ldquo;The app was actually helpful. Yeah, because If I was
            negotiating with a real person, I&apos;d be more ready.&rdquo;
          </h3>
          <h4 className={`${bannerTextClass} font-medium mt-8`}>
            - Participant 2
          </h4>
        </Banner>

        <div className="mt-separate mx-photo grid lg:grid-cols-5 gap-8 items-center text-black">
          <div className="lg:col-span-2">
            <h5>final changes</h5>
            <h3 className="text-black">Addressing user confusion</h3>
            <p>
              <b>3 out of 5 participants</b> got distracted by the subtext
              included in the individual topics. It interrupted their experience
              and they didn&apos;t find it necessary.
            </p>
            <p>
              In response to user feedback, I modified the content to only
              include the topic titles.
            </p>
          </div>
          <figure className="lg:col-span-3">
            <ImageViewer src={getNegotiumPhoto("final-changes.jpg")} alt="" />
          </figure>
        </div>
      </div>

      <div className="mt-separate mx-text">
        <h5>final thoughts</h5>
        <h3>User feedback is vital at every stage of the design process</h3>
        <p className="mb-together">
          This project taught me just how important user feedback is throughout
          the design process. The feedback we received from our initial concept
          testing helped me to significantly improve the usability of the
          feature.
        </p>
        <NumberedList list={FINAL_THOUGHTS_LIST} numberColor="#FFF" />
        <figure className="mt-separate">
          <ImageViewer src={getNegotiumPhoto("me-andMini.jpg")} alt="" />
          <p className="mt-6 mb-0 text-center text-[#C8C8C8]">
            Myself working on the whiteboard with mini me I created in the app!
          </p>
        </figure>
      </div>

      {/* MORE PROJECTS THING */}
    </article>
  );
}
