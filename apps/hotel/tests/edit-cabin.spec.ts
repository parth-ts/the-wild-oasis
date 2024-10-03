import { expect, test } from "@playwright/test";
import { CabinPage } from "./pages/edit-cabin.page";

test.describe("test cabin", () => {
  test.only("edit cabin", async ({ page }) => {
    const cabinPage = new CabinPage(page);

    await page.goto("/cabins");

    expect(page.url()).toBe(`${process.env.APP_URL}/cabins`);

    await expect(cabinPage.cabinRowLocator).toBeVisible();

    await expect(cabinPage.meatBallMenu).toBeVisible();

    await cabinPage.meatBallMenu.click();

    await expect(cabinPage.editBtn).toBeVisible();

    await cabinPage.editBtn.click();

    await expect(cabinPage.formLocator).toBeVisible();

    await expect(cabinPage.cabinNameInputLocator).toBeVisible();

    await expect(cabinPage.cabinNameInputLocator).toHaveValue("Oasis");
    cabinPage.cabinNameInputLocator.fill("Victoria");

    await expect(cabinPage.cabinNameInputLocator).toHaveValue("Victoria");

    await expect(cabinPage.editCabinBtn).toBeVisible();

    await cabinPage.editCabinBtn.click();

    await expect(page.getByText("Victoria")).toBeVisible();
  });
});
