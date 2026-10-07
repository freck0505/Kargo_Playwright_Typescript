import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Booking Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(265, "[UAT] Verify if page 'GHA_ListBooking.aspx' is available WHEN Menu item: 'Booking > Cargo > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Cargo > List"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Cargo", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_ListBooking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Cargo > List"');
    });
  });

  test(qase(266, "[UAT] Verify if page 'GHA_ListTemplate.aspx' is available WHEN Menu item: 'Booking > Cargo > Templates' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Cargo > Templates"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Cargo", "Templates");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_ListTemplate.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Cargo > Templates"');
    });
  });

  test(qase(267, "[UAT] Verify if page 'QueueManagement.aspx' is available WHEN Menu item: 'Booking > Cargo > Queue' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Cargo > Queue"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Cargo", "Queue");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/QueueManagement.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Cargo > Queue"');
    });
  });

  test(qase(268, "[UAT] Verify if page 'gha_quickbooking.aspx' is available WHEN Menu item: 'Booking > Cargo > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Cargo > New"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Cargo", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/gha_quickbooking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Cargo > New"');
    });
  });

  test(qase(269, "[UAT] Verify if page 'D2DBooking.aspx' is available WHEN Menu item: 'Booking > Cargo > D2D Booking' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Cargo > D2D Booking"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Cargo", "D2D Booking");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/D2DBooking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Cargo > D2D Booking"');
    });
  });

  test(qase(270, "[UAT] Verify if page 'MailBookingSummary.aspx' is available WHEN Menu item: 'Booking > Mail Booking > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Mail Booking > List"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Mail Booking", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MailBookingSummary.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Mail Booking > List"');
    });
  });

  test(qase(271, "[UAT] Verify if page 'PostalMailBooking.aspx' is available WHEN Menu item: 'Booking > Mail Booking > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > Mail Booking > New"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "Mail Booking", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PostalMailBooking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > Mail Booking > New"');
    });
  });

  test(qase(272, "[UAT] Verify if page 'ePouchNew.aspx' is available WHEN Menu item: 'Booking > ePouch' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.login.verify_homepage();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "Booking > ePouch"`, async () => {
      await pm.navbar.navigateToMenu("Booking", "ePouch");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ePouchNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Booking > ePouch"');
    });
  });
});
