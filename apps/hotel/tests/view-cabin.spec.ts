import { expect, test } from "@playwright/test";

const APP_URL = "http://localhost:5173";
const LOGIN_URL = `${APP_URL}/login`;
const DASHBOARD_URL = `${APP_URL}/dashboard`;

const LOGIN_EMAIL = "gowtham@gowthamreilly.com";
const LOGIN_PASSWORD = "Revolution@24";

// const CUSTOMER_APP_URL = "http://localhost:3000/";
// const CUSTOMER_CABINS_URL = `${CUSTOMER_APP_URL}cabins`;

test.beforeEach(async ({ page }) => {
  await page.goto(APP_URL);

  await page.waitForURL(LOGIN_URL);

  expect(page.url()).toBe(LOGIN_URL);

  const loginPageTitle = page.getByText("Log in to your account");

  await expect(loginPageTitle).toBeVisible();

  const emailAddressInputLocator = page.getByLabel("Email address");
  const passwordInputLocator = page.getByLabel("Password");

  await expect(emailAddressInputLocator).toBeVisible();
  await expect(passwordInputLocator).toBeVisible();

  await emailAddressInputLocator.fill(LOGIN_EMAIL);

  await passwordInputLocator.fill(LOGIN_PASSWORD);

  await expect(emailAddressInputLocator).toHaveValue(LOGIN_EMAIL);
  await expect(passwordInputLocator).toHaveValue(LOGIN_PASSWORD);

  await expect(passwordInputLocator).toHaveAttribute("type", "password");

  const loginButtonLocator = page.getByRole("button", { name: "Log in" });

  await expect(loginButtonLocator).toBeVisible();

  await loginButtonLocator.click();

  await page.waitForURL(DASHBOARD_URL);

  expect(page.url()).toBe(DASHBOARD_URL);

  const pageTitle = page
    .getByRole("heading", { name: "Dashboard" })
    .and(page.getByText("Dashboard"))
    .and(page.locator("h1"));

  await expect(pageTitle).toBeVisible();
});

test("view cabins", async ({ page }) => {
  const cabinsNavMenuItemLink = page.getByRole("link", { name: "Cabins" });

  await expect(cabinsNavMenuItemLink).toBeVisible();

  await cabinsNavMenuItemLink.click();

  const cabinsPageTitle = page.getByRole("heading", { name: "All cabins" });

  await expect(cabinsPageTitle).toBeVisible();

  const addNewCabinButtonLocator = page.getByRole("button", {
    name: "Add new cabin",
  });

  await expect(addNewCabinButtonLocator).toBeVisible();

  //   await addNewCabinButtonLocator.click();
});
