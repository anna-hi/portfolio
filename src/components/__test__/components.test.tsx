import { fireEvent, render, screen } from "@testing-library/react";

import NavBar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

describe("shared components", () => {
  it("renders navigation destinations", () => {
    render(<NavBar />);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("target", "_blank");
  });

  it("shows a scroll control after scrolling and scrolls to the top", () => {
    Object.defineProperty(window, "scrollY", { value: 500, configurable: true });
    const scrollTo = jest.fn(); Object.defineProperty(window, "scrollTo", { value: scrollTo, configurable: true });
    const { container } = render(<ScrollToTop />);
    fireEvent.scroll(window); fireEvent.click(container.querySelector("div")!);
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("does not show a scroll control when not scrolled", () => {
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
    render(<ScrollToTop />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
