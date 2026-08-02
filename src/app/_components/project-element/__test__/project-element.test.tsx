import { render, screen } from "@testing-library/react";
import ProjectElement from "@/app/_components/project-element";
import { FLOWER_COLORS } from "@/components/flower-icon/flower-icon";

describe("ProjectElement", () => {
  it("renders a project card with all supplied metadata", () => {
    render(<ProjectElement project={{ title: "A project", description: "Description", tags: ["research", "design"], flowerColor: FLOWER_COLORS.PINK, link: "/project", thumbnail: "/thumb.jpg" }} />);
    expect(screen.getByRole("link", { name: /a project/i })).toHaveAttribute("href", "/project");
    expect(screen.getByText("research")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "A project" })).toHaveAttribute("src", "/thumb.webp");
  });
});
