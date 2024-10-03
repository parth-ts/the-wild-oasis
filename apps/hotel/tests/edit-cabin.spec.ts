import { expect, test } from "@playwright/test";

test.describe("test cabin", () => {
  test.only("edit cabin", async ({ page }) => {
    await page.goto("/cabins");

    expect(page.url()).toBe(`${process.env.APP_URL}/cabins`);

    const cabinRowlocator = page
      .getByRole("table")
      .locator("section")
      .getByRole("row")
      .filter({ has: page.getByText("Oasis") });

    await expect(cabinRowlocator).toBeVisible();

    const meatBallMenu = cabinRowlocator.getByRole("button");
    await expect(meatBallMenu).toBeVisible();

    await meatBallMenu.click();

    const editBtn = page.locator("ul li").getByRole("button", { name: "Edit" });
    await expect(editBtn).toBeVisible();

    await editBtn.click();

    const formLocator = page.locator("form");
    await expect(formLocator).toBeVisible();

    const cabinNameInputLocator = formLocator.getByLabel("Cabin name");
    await expect(cabinNameInputLocator).toBeVisible();

    await expect(cabinNameInputLocator).toHaveValue("Oasis");
    cabinNameInputLocator.fill("Victoria");

    await expect(cabinNameInputLocator).toHaveValue("Victoria");

    const editCabinBtn = formLocator.getByRole("button", {
      name: "Edit cabin",
    });
    await expect(editCabinBtn).toBeVisible();

    await editCabinBtn.click();

    await expect(page.getByText("Victoria")).toBeVisible();
  });
});
