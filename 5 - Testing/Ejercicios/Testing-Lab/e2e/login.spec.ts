import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display login form", async ({ page }) => {
    // Wait for form to be visible
    const form = await page.getByTestId("login-form");
    await expect(form).toBeVisible();

    // Check form elements
    await expect(page.getByTestId("user-input")).toBeVisible();
    await expect(page.getByTestId("password-input")).toBeVisible();
    await expect(page.getByTestId("login-button")).toBeVisible();
  });

  test("should show error message with invalid credentials", async ({
    page,
  }) => {
    // Fill in invalid credentials
    await page.getByTestId("user-input").fill("invalid");
    await page.getByTestId("password-input").fill("invalid");

    // Click login button
    await page.getByTestId("login-button").click();

    // Wait for error message
    await expect(
      page.getByText("Usuario y/o password no válidos")
    ).toBeVisible();
  });

  test("should login successfully with valid credentials", async ({ page }) => {
    // Fill in valid credentials
    await page.getByTestId("user-input").fill("admin");
    await page.getByTestId("password-input").fill("test");

    // Click login button
    await page.getByTestId("login-button").click();

    // Wait for navigation
    await page.waitForURL("#/submodule-list");
  });

  // Debug helper test
  test("debug page content", async ({ page }) => {
    await page.goto("/");

    // Log the page content for debugging
    console.log(await page.content());

    // Take a screenshot
    await page.screenshot({ path: "login-debug.png", fullPage: true });
  });
});
