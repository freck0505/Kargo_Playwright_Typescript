import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Maintenance Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(382, "[UAT] Verify if page 'MaintainAWB.aspx' is available WHEN Menu item: 'Maintenance > Maintain AWB' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Maintenance > Maintain AWB"`, async () => {
      await pm.navbar.navigateToMenu("Maintenance", "Maintain AWB");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MaintainAWB.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Maintenance > Maintain AWB"');
    });
  });
});
