import { fireEvent, render, screen } from "@testing-library/react";
import IntroText from "@/app/_components/intro-text";
import ActivityElement from "@/app/_components/activity-element";
import DraggableFlower from "@/app/_components/draggable-flower";
import ProjectList from "@/app/_components/project-list";
import { FLOWER_COLORS } from "@/components/flower-icon/flower-icon";

describe("home components", () => {
  it("renders home content, activity information, and every project card", () => {
    render(<><IntroText /><ActivityElement header="Currently" subtext="Designing" color={FLOWER_COLORS.BLUE} /><ProjectList /></>);
    expect(screen.getByRole("heading", { name: /hi, i'm.*ji/i })).toBeInTheDocument();
    expect(screen.getByText("Designing")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.getByText(/Empowering Women/)).toBeInTheDocument();
  });

  it("enables flower drag constraints after its first pointer interaction", () => {
    const { container } = render(<DraggableFlower containerRef={{ current: null }} />);
    fireEvent.pointerDown(container.querySelector("div div")!);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
