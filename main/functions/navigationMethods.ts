import { Page, Locator, expect } from "@playwright/test";
import { navLocators } from "../locators/navigationLocators";
import { Logger } from "../utils/logger";

export class navbarPage {
  readonly page: Page;
  private logger: Logger;

  readonly footerUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logger = new Logger();
    this.footerUser = page.getByText(
      navLocators.footerUser.name
    );
  }

  async navigate(): Promise<void> {
    await this.page.goto("/", { timeout: 60000, waitUntil: "domcontentloaded" });
    this.logger.info("Navigated to home page");
  }

  async navigateToMenu(...menus: string[]): Promise<void> {
    const breadcrumb = menus.join(" > ");
    this.logger.info(`Navigate to ${breadcrumb}`);

    const items = menus.filter(Boolean);
    let subMenuLocator: Locator | null = null;

    for (let i = 0; i < items.length; i++) {
      const name = items[i];
      const isLast = i === items.length - 1;

      let menu: Locator;
      if (subMenuLocator) {
        menu = subMenuLocator
          .getByText(name, { exact: true })
          .filter({ visible: true })
          .first();
      } else {
        menu = this.page
          .getByText(name, { exact: true })
          .filter({ visible: true })
          .first();
      }

      await menu.waitFor({ state: "visible", timeout: 10000 });
      // Try to scroll element into view first
      try {
        await menu.scrollIntoViewIfNeeded();
      } catch {}
      // Try standard hover, then force hover, then JS hover event, then JS click
      let hovered = false;
      try {
        await menu.hover();
        hovered = true;
      } catch {
        try {
          await menu.hover({ force: true });
          hovered = true;
        } catch {
          // Dispatch hover event via JavaScript
          try {
            await menu.evaluate(el => {
              el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
              el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
              el.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
            });
            hovered = true;
          } catch {}
        }
      }
      // Wait a bit for submenu to appear
      await this.page.waitForTimeout(500);

      if (isLast) {
        await menu.click();
        await this.page.waitForLoadState("domcontentloaded");
      } else {
        await this.page.waitForTimeout(500);
        // After hovering, the sub-menu appears as a sibling <ul> within the same <li>
        // Find the parent <li> of the hovered element, then get its child <ul>
        const parentLi = menu.locator("xpath=ancestor::li[1]");
        subMenuLocator = parentLi.locator("ul").first();
      }
    }
  }

  async verify_page_url(pageUrl: string): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForLoadState('networkidle');
    await expect(this.page).toHaveURL(pageUrl, { timeout: 15000 });
    await expect(this.footerUser).toBeVisible({ timeout: 10000 })
  }
}
