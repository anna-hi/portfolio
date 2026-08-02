import { expect, test } from "@playwright/test";

const caseStudies = [
  { card: /Streamlining Form and Scoring Experiences/, path: "/projects/faculty-activity-tracker", heading: /Streamlining Form and Scoring Experiences/ },
  { card: /Empowering Women with Negotiation Skills/, path: "/projects/negotium", heading: /Empowering Women with Negotiation Skills/ },
  { card: /Pairing Mindfulness with Task Organization/, path: "/projects/mindful", heading: /Pairing Mindfulness with Task Organization/ },
  { card: /A Personalized Digital Space for Women/, path: "/projects/penella", heading: /A Personalized Digital Space for Women/ },
];

test("home page links to every case study", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /hi, i'm anna ji/i })).toBeVisible();

  for (const caseStudy of caseStudies) {
    await page.getByRole("link", { name: caseStudy.card }).click();
    await expect(page).toHaveURL(caseStudy.path);
    await expect(page.getByRole("heading", { name: caseStudy.heading })).toBeVisible();
    await page.goto("/");
  }
});

test("navigation exposes work, resume, and the not-found page", async ({ page }) => {
  await page.goto("/projects/mindful");
  await page.getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume");

  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "404 - Page Not Found" })).toBeVisible();
});
