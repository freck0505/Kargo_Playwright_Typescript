import { Page, Locator, expect, TestInfo } from "@playwright/test";
import { homePageLocators } from "../locators/homePageLocators";
import { Logger } from "../utils/logger";
import { ScreenshotHelper } from '../utils/screenshot';
import { getUserData } from "main/utils/credential.decoder";

const formData = getUserData();

export class loginPage {
    readonly page: Page;
    private logger: Logger;
    private screenshot: ScreenshotHelper;

    readonly userNameField: Locator;
    readonly userPasswordField: Locator;
    readonly loginButton: Locator;
    readonly notificationsHeading: Locator;

    constructor(page: Page, private testinfo: TestInfo, screenshot: ScreenshotHelper) {
        this.page = page;
        this.logger = new Logger();
        this.screenshot = screenshot;

        this.userNameField = page.getByRole(
            homePageLocators.userNameField.role,
            homePageLocators.userNameField.text
        );
        this.userPasswordField = page.getByRole(
            homePageLocators.userPasswordField.role,
            homePageLocators.userPasswordField.text
        );
        this.loginButton = page.getByRole(
            homePageLocators.loginButton.role,
            homePageLocators.loginButton.text
        );
        this.notificationsHeading = page.getByRole(
            homePageLocators.notificationsHeading.role,
            homePageLocators.notificationsHeading.text
        );
        
    }

    async navigate(): Promise<void> {
        await this.page.goto('/', { timeout: 60000, waitUntil: 'domcontentloaded' });
        this.logger.info("Navigated to home page");
    }

    async input_username() :Promise<void> {
        await expect(this.userNameField).toBeVisible();
        await this.userNameField.fill(formData.username);
    }

    async input_password() :Promise<void> {
        await expect(this.userPasswordField).toBeVisible();
        await this.userPasswordField.fill(formData.password);
    }

    async click_login_button() :Promise<void> {
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
    }

    async verify_homepage() :Promise<void> {
        await expect(this.page).toHaveURL('https://cebutesting.smartkargo.com/Home.aspx');
        await expect(this.notificationsHeading).toBeVisible({ timeout: 15000 });
    }
}
