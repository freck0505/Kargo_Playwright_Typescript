import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Warehouse Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(273, "[UAT] Verify if page 'ListWHMaster.aspx' is available WHEN Menu item: 'Warehouse > Warehouse > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Warehouse > Warehouse > List"`, async () => {
      await pm.navbar.navigateToMenu("Warehouse", "Warehouse", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListWHMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Warehouse > Warehouse > List"');
    });
  });

  test(qase(274, "[UAT] Verify if page 'WHMaster.aspx' is available WHEN Menu item: 'Warehouse > Warehouse > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Warehouse > Warehouse > New"`, async () => {
      await pm.navbar.navigateToMenu("Warehouse", "Warehouse", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/WHMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Warehouse > Warehouse > New"');
    });
  });

  test(qase(275, "[UAT] Verify if page 'ListBlockMaster.aspx' is available WHEN Menu item: 'Warehouse > Location > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Warehouse > Location > List"`, async () => {
      await pm.navbar.navigateToMenu("Warehouse", "Location", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListBlockMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Warehouse > Location > List"');
    });
  });

  test(qase(276, "[UAT] Verify if page 'WHBlockMaster.aspx' is available WHEN Menu item: 'Warehouse > Location > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Warehouse > Location > New"`, async () => {
      await pm.navbar.navigateToMenu("Warehouse", "Location", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/WHBlockMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Warehouse > Location > New"');
    });
  });
});
