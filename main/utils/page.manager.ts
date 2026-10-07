import { Page, TestInfo } from "@playwright/test";
import * as loginPageMehods from "../functions/loginPageMehods";
import { navbarPage } from "../functions/navigationMethods";
import { ScreenshotHelper } from "./screenshot";

/**
 * Central lazy-load Page Object provider.
 *
 * Page objects are instantiated only on first access and cached for the
 * lifetime of the manager instance.  A **single** `ScreenshotHelper` is
 * shared across every page object so the step counter stays consistent.
 */
export class PageManager {
  private readonly page: Page;
  private readonly testInfo: TestInfo;

  /** Shared screenshot helper – one step counter for the whole test. */
  readonly screenshot: ScreenshotHelper;

  private _loginPage?: loginPageMehods.loginPage;
  private _navbarPage?: navbarPage;

  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.screenshot = new ScreenshotHelper(testInfo);
  }

  get thisPage(): Page {
    return this.page;
  }

  /** Login page – lazy-loaded on first access */
  get login(): loginPageMehods.loginPage {
    if (!this._loginPage) {
      this._loginPage = new loginPageMehods.loginPage(this.page, this.testInfo, this.screenshot);
    }
    return this._loginPage;
  }

  /** Navigation bar – lazy-loaded on first access */
  get navbar(): navbarPage {
    if (!this._navbarPage) {
      this._navbarPage = new navbarPage(this.page);
    }
    return this._navbarPage;
  }

}
