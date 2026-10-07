import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("ULD Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(295, "[UAT] Verify if page 'FrmULDList.aspx' is available WHEN Menu item: 'ULD> List ULD' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > List ULD"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "List ULD");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmULDList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > List ULD"');
    });
  });

  test(qase(296, "[UAT] Verify if page 'frmULDMaster.aspx' is available WHEN Menu item: 'ULD> New ULD' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > New ULD"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "New ULD");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmULDMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > New ULD"');
    });
  });

  test(qase(297, "[UAT] Verify if page 'UCR.aspx?type=List' is available WHEN Menu item: 'ULD> List URC' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > List UCR"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "List UCR");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UCR.aspx?type=List');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > List UCR"');
    });
  });

  test(qase(298, "[UAT] Verify if page 'UCR.aspx?type=New' is available WHEN Menu item: 'ULD> New URC' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > New UCR"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "New UCR");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UCR.aspx?type=New');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > New UCR"');
    });
  });

  test(qase(299, "[UAT] Verify if page 'frmULDMovement.aspx' is available WHEN Menu item: 'ULD> Track ULD > ULD Movement' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > Track ULD > ULD Movement"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "Track ULD", "ULD Movement");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmULDMovement.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > Track ULD > ULD Movement"');
    });
  });

  test(qase(300, "[UAT] Verify if page 'frmULDMovementHistory.aspx' is available WHEN Menu item: 'ULD> Track ULD > ULD Movement History' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > Track ULD > ULD Movement History"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "Track ULD", "ULD Movement History");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmULDMovementHistory.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > Track ULD > ULD Movement History"');
    });
  });

  test(qase(301, "[UAT] Verify if page 'MultipleMarker.aspx' is available WHEN Menu item: 'ULD> Track ULD > ULD Location' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > Track ULD > ULD Location"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "Track ULD", "ULD Location");
      const mapElement = pm.thisPage.locator('.gm-style > div > div:nth-child(2)').first();
      await mapElement.waitFor({ state: 'visible', timeout: 10000 });
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MultipleMarker.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > Track ULD > ULD Location"');
    });
  });

  test(qase(302, "[UAT] Verify if page 'StockConfigurationNew.aspx' is available WHEN Menu item: 'ULD> ULD Stock' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > ULD Stock"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "ULD Stock");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/StockConfigurationNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > ULD Stock"');
    });
  });

  test(qase(303, "[UAT] Verify if page 'UCMInOutMsg.aspx?UCM=IN' is available WHEN Menu item: 'ULD> ULD Management > UCM In' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > ULD Management > UCM In"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "ULD Management", "UCM In");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UCMInOutMsg.aspx?UCM=IN');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > ULD Management > UCM In"');
    });
  });

  test(qase(304, "[UAT] Verify if page 'UCMInOutMsg.aspx?UCM=OUT' is available WHEN Menu item: 'ULD> ULD Management > UCM Out' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > ULD Management > UCM Out"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "ULD Management", "UCM Out");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UCMInOutMsg.aspx?UCM=OUT');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > ULD Management > UCM Out"');
    });
  });

  test(qase(305, "[UAT] Verify if page 'FrmULDStockManagement.aspx' is available WHEN Menu item: 'ULD> ULD Management > ULD Stock' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > ULD Management > ULD Stock"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "ULD Management", "ULD Stock");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmULDStockManagement.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > ULD Management > ULD Stock"');
    });
  });

  test(qase(306, "[UAT] Verify if page 'StationULDStock.aspx' is available WHEN Menu item: 'ULD> ULD Management > Station ULD Stock' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "ULD > ULD Management > Station ULD Stock"`, async () => {
      await pm.navbar.navigateToMenu("ULD", "ULD Management", "Station ULD Stock");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/StationULDStock.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "ULD > ULD Management > Station ULD Stock"');
    });
  });
});
