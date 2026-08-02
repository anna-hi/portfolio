import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";
import { emailSVG, githubSVG, linkedInSVG } from "@/components/footer/icons";

describe("Footer", () => {
  it("renders contact destinations", () => {
    render(<Footer containerRef={{ current: null }} />);
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:annaji@andrew.cmu.edu");
    expect(screen.getByRole("link", { name: "Github" })).toHaveAttribute("href", "https://github.com/anna-hi");
  });

  it("keeps legacy icon exports renderable", () => {
    expect(render(<>{emailSVG}{linkedInSVG}{githubSVG}</>).container.querySelectorAll("svg")).toHaveLength(3);
  });
});
