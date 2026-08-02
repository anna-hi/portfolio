import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import FunPage from "@/app/fun/page";
import NotFoundPage from "@/app/not-found";
import MainSection from "@/app/main";
import RootLayout, { metadata } from "@/app/layout";
import FacultyActivityTracker from "@/app/projects/faculty-activity-tracker/page";
import Mindful from "@/app/projects/mindful/page";
import Negotium from "@/app/projects/negotium/page";
import Penella from "@/app/projects/penella/page";
import { FAT_PROJECT_DATA, MINDFUL_PROJECT_DATA, NEGOTIUM_PROJECT_DATA, PENELLA_PROJECT_DATA } from "@/data/projects";

describe("pages and content data", () => {
  it("renders the home page and its project links", () => {
    render(<HomePage />);
    expect(screen.getByText("UX Designer @ Ford Motor Company")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(4);
  });

  it("renders utility and missing-route pages", () => {
    const { rerender } = render(<AboutPage />);
    expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
    rerender(<FunPage />); expect(screen.getByRole("heading", { name: "Fun" })).toBeInTheDocument();
    rerender(<NotFoundPage />); expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
  });

  it("renders the site shell and exposes correct metadata", () => {
    const { container, rerender } = render(<MainSection><p>Content</p></MainSection>);
    expect(screen.getByText("Content")).toBeInTheDocument();
    rerender(<RootLayout><p>Layout content</p></RootLayout>);
    expect(container.ownerDocument.documentElement).toHaveAttribute("lang", "en");
    expect(metadata).toMatchObject({ title: "Anna Ji", description: "Anna Ji's portfolio" });
  });

  it.each([
    ["Faculty activity tracker", FacultyActivityTracker, FAT_PROJECT_DATA.title],
    ["Mindful", Mindful, MINDFUL_PROJECT_DATA.title],
    ["Negotium", Negotium, NEGOTIUM_PROJECT_DATA.title],
    ["Penella", Penella, PENELLA_PROJECT_DATA.title],
  ])("renders the %s case-study page", (_name, Page, title) => {
    render(<Page />);
    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
  });

  it("keeps project titles and tags available for card and case-study use", () => {
    for (const project of [FAT_PROJECT_DATA, MINDFUL_PROJECT_DATA, NEGOTIUM_PROJECT_DATA, PENELLA_PROJECT_DATA]) {
      expect(project.title).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });
});
