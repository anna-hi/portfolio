// components
import ProjectHeader from "../_components/project-header";

// text
const HEADER = "Simplifying Form Experiences";
const SUBHEADER =
  "How do we make it easier for faculty to fill out an annual form? How do we optimize efficiency for the committee who scores those forms?";

export default function FacultyActivityTrackerPage() {
  return (
    <div className="project-container">
      <ProjectHeader
        projectHeader={{
          header: HEADER,
          subheader: SUBHEADER,
          photo: "/fat.svg",
        }}
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
