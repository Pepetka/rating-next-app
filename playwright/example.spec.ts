import { test, expect } from "@playwright/test";

test("Right", async ({ page }) => {
  await page.goto("/");

  const h1 = page.locator("h1");

  await expect(h1).toBeVisible();
  await expect(h1).toHaveText("Home");
});

test("Visual", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveScreenshot();
});
