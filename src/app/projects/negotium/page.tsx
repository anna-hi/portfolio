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
import sharedStyles from "../style.module.css";
import { NEGOTIUM_COLORS } from "../../../../tailwind.config";

const FOLDER = "/negotium-project";

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

export default function NegotiumPage() {
  const getNegotiumPhoto = (photo: string) => `${FOLDER}/${photo}`;

  return (
    <div className="negotium-container">
      <ProjectHeader
        header={NEGOTIUM_PROJECT_DATA.title}
        tags={NEGOTIUM_PROJECT_DATA.tags}
        // TODO: REPLACE THIS WITH ACTUAL PHOTO
        photo={getNegotiumPhoto("negotium-cover.png")}
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
      <div className="mb-separate mx-photo">
        <div className="flex gap-8">
          <ImageViewer src={getNegotiumPhoto("negotium-cover.png")} alt="" />
          <ImageViewer src={getNegotiumPhoto("negotium-cover.png")} alt="" />
        </div>
        <div className={sharedStyles.photoCaptionTextDark}>
          Whiteboard ideation session and a classification of those ideas based
          on complexity and tone.
        </div>
      </div>
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
        <div className="mx-photo mb-separate">
          <ImageViewer src={getNegotiumPhoto("negotium-cover.png")} alt="" />
          <div className={sharedStyles.photoCaptionTextDark}>
            Competitive analysis of Sopu &#40;a negotiation teaching app&#41;
            and italki &#40;a language learning app&#41;.
          </div>
        </div>
        <div className="mx-photo grid grid-cols-5 gap-8 items-center">
          <div className="col-span-full lg:col-span-2">
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
          <div className="col-span-full lg:col-span-3">
            <ImageViewer src={getNegotiumPhoto("negotium-cover.png")} alt="" />
            <div className={sharedStyles.photoCaptionTextDark}>
              8 sketches to communicate my ideas.
            </div>
          </div>
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
      <div className="bg-whiteWhite py-32"></div>
    </div>
  );
}
