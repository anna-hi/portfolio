import { expect, test } from "@playwright/test";

test("case-study images open a viewer and close on scroll", async ({ page }) => {
  await page.goto("/projects/faculty-activity-tracker");
  const image = page.locator('img[src*="paper-form"]');
  await image.scrollIntoViewIfNeeded();
  await image.click();
  await expect(page.locator('img[src*="paper-form"]')).toHaveCount(2);
  await page.mouse.wheel(0, 500);
  await expect(page.locator('img[src*="paper-form"]')).toHaveCount(1);
});

test("carousel controls change the visible image", async ({ page }) => {
  await page.goto("/projects/penella");
  const next = page.getByRole("button", { name: "Next carousel image" });
  await next.scrollIntoViewIfNeeded();
  const visibleImages = page.locator('img[src*="/penella-project/carousel/"]');
  await expect(visibleImages.first()).toHaveAttribute("src", /penella-sketch1/);
  await next.click();
  await expect(visibleImages.first()).toHaveAttribute("src", /penella-sketch2/);
});

test("scroll-to-top returns visitors to the top of the page", async ({ page }) => {
  await page.goto("/projects/mindful");
  const scrollToTop = page.getByRole("button", { name: "Scroll to top" });
  await expect.poll(async () => {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
      window.dispatchEvent(new Event("scroll"));
    });
    return scrollToTop.count();
  }).toBe(1);
  await scrollToTop.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
});
