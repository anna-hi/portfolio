import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Banner from "@/app/projects/_components/banner";
import ImpactHeader from "@/app/projects/_components/impact-header";
import MyRoleSection from "@/app/projects/_components/my-role-section";
import NumberedList from "@/app/projects/_components/numbered-list";
import ProjectHeader from "@/app/projects/_components/project-header";
import { WorkflowList } from "@/app/projects/_components/workflow-list";
import ImageViewer from "@/app/projects/_components/image-viewer";
import ImageCarousel from "@/app/projects/_components/image-carousel";

describe("case-study components", () => {
  it("renders reusable project sections and their optional content", () => {
    render(<><Banner background="red">Banner copy</Banner><ImpactHeader isPerceivedImpact>Outcome</ImpactHeader><MyRoleSection duration="2 weeks" role={["Research"]} team={["Team A"]} advisor={["Advisor A"]} isDark /><NumberedList list={[{ title: "First", text: "Details" }, { title: "Second" }]} numberColor="blue" /><ProjectHeader header="Project name" tags={["ux", "research"]} photo="/cover.jpg" dropShadow /><WorkflowList isMobileWorkflow workflowItems={[{ title: "Step", text: <p>Copy</p>, src: "/step.jpg", alt: "Workflow screenshot" }]} /></>);
    expect(screen.getByText("Banner copy")).toBeInTheDocument(); expect(screen.getByText("perceived impact")).toBeInTheDocument();
    expect(screen.getByText("Team A")).toBeInTheDocument(); expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("ux · research")).toBeInTheDocument(); expect(screen.getByRole("img", { name: "Workflow screenshot" })).toBeInTheDocument();
  });

  it("opens image previews and closes them on scroll", async () => {
    render(<ImageViewer src="/image.jpg" alt="Example image" />);
    await userEvent.click(screen.getByRole("img", { name: "Example image" }));
    expect(screen.getAllByRole("img", { name: "Example image" })).toHaveLength(2);
    fireEvent.scroll(window); expect(screen.getAllByRole("img", { name: "Example image" })).toHaveLength(1);
  });

  it("rotates the carousel in both directions", async () => {
    Object.defineProperty(window, "innerWidth", { value: 500, writable: true });
    render(<ImageCarousel images={[{ src: "/one.jpg", alt: "One" }, { src: "/two.jpg", alt: "Two" }, { src: "/three.jpg", alt: "Three" }]} />);
    await userEvent.click(screen.getAllByRole("button")[1]); expect(screen.getByRole("img", { name: "Two" })).toBeInTheDocument();
    await userEvent.click(screen.getAllByRole("button")[0]); expect(screen.getByRole("img", { name: "One" })).toBeInTheDocument();
  });
});
