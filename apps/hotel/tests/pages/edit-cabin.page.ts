import { Locator, Page } from "@playwright/test";

export class CabinPage {
  readonly cabinRowLocator: Locator;
  readonly meatBallMenu: Locator;
  readonly editBtn: Locator;
  readonly formLocator: Locator;
  readonly cabinNameInputLocator: Locator;
  readonly editCabinBtn: Locator;

  constructor(page: Page) {
    this.cabinRowLocator = page
      .getByRole("table")
      .locator("section")
      .getByRole("row")
      .filter({ has: page.getByText("Oasis") });

    // this.meatBallMenu = this.cabinRowlocator.getByRole("button");
  }
}
