import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Operations Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(277, "[UAT] Verify if page 'frmScreeningDashboard.aspx' is available WHEN Menu item: 'Operations > Accept > Cargo Screening' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Accept > Cargo Screening"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Accept", "Cargo Screening");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmScreeningDashboard.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Accept > Cargo Screening"');
    });
  });

  test(qase(278, "[UAT] Verify if page 'GHA_FlightPlanning.aspx' is available WHEN Menu item: 'Operations > Flight Plan > Flight Planning' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Flight Plan > Flight Planning"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Plan Flight", "Flight Planning");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_FlightPlanning.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Flight Plan > Flight Planning"');
    });
  });

  test(qase(279, "[UAT] Verify if page 'FlightControlNew.aspx' is available WHEN Menu item: 'Operations > Flight Plan > Flight Control' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Flight Plan > Flight Control"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Plan Flight", "Flight Control");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FlightControlNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Flight Plan > Flight Control"');
    });
  });

  test(qase(280, "[UAT] Verify if page 'frmFlightMovementDetails.aspx' is available WHEN Menu item: 'Operations > Flight Plan > Flight Movement' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Flight Plan > Flight Movement"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Plan Flight", "Flight Movement");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmFlightMovementDetails.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Flight Plan > Flight Movement"');
    });
  });

  test(qase(281, "[UAT] Verify if page 'GHA_frmExportManifest.aspx' is available WHEN Menu item: 'Operations > Export > Export Manifest' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Export > Export Manifest"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Export", "Export Manifest");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_frmExportManifest.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Export > Export Manifest"');
    });
  });

  test(qase(282, "[UAT] Verify if page 'ePouchFlights.aspx' is available WHEN Menu item: 'Operations > Export > ePouch Flight' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Export > ePouch Flight"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Export", "ePouch Flight");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ePouchFlights.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Export > ePouch Flight"');
    });
  });

  test(qase(283, "[UAT] Verify if page 'ExportSummary.aspx' is available WHEN Menu item: 'Operations > Export > Export Summary' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Export > Export Summary"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Export", "Export Summary");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ExportSummary.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Export > Export Summary"');
    });
  });

  test(qase(284, "[UAT] Verify if page 'rptExportWareHouseInv.aspx' is available WHEN Menu item: 'Operations > Export > Export Inventory' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Export > Export Inventory"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Export", "Export Inventory");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptExportWareHouseInv.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Export > Export Inventory"');
    });
  });

  test(qase(285, "[UAT] Verify if page 'GHA_Imp_Arrival.aspx' is available WHEN Menu item: 'Operations > Import > Arrive' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Import > Arrive"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Import", "Arrive");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_Imp_Arrival.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Import > Arrive"');
    });
  });

  test(qase(286, "[UAT] Verify if page 'GHA_Imp_BreakULD.aspx' is available WHEN Menu item: 'Operations > Import > Break ULD' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Import > Break ULD"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Import", "Break ULD");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_Imp_BreakULD.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Import > Break ULD"');
    });
  });

  test(qase(287, "[UAT] Verify if page 'ImportSummary.aspx' is available WHEN Menu item: 'Operations > Import > Import Summary' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Import > Import Summary"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Import", "Import Summary");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ImportSummary.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Import > Import Summary"');
    });
  });

  test(qase(288, "[UAT] Verify if page 'rptImportWareHouseInv.aspx' is available WHEN Menu item: 'Operations > Import > Import Inventory' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Import > Import Inventory"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Import", "Import Inventory");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptImportWareHouseInv.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Import > Import Inventory"');
    });
  });

  test(qase(289, "[UAT] Verify if page 'GHA_Imp_Delivery.aspx' is available WHEN Menu item: 'Operations > Delivery> Delivery Cargo' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Delivery> Delivery Cargo"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Delivery", "Deliver Cargo");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GHA_Imp_Delivery.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Delivery> Delivery Cargo"');
    });
  });

  test(qase(290, "[UAT] Verify if page 'CTMList.aspx' is available WHEN Menu item: 'Operations > Transfer > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Transfer > List"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Transfer", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CTMList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Transfer > List"');
    });
  });

  test(qase(291, "[UAT] Verify if page 'CTMNew.aspx' is available WHEN Menu item: 'Operations > Transfer > CTM Out' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Transfer > CTM Out"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Transfer", "CTM Out");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CTMNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Transfer > CTM Out"');
    });
  });

  test(qase(292, "[UAT] Verify if page 'CTMNewInbound.aspx' is available WHEN Menu item: 'Operations > Transfer > CTM In' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Transfer > CTM In"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Transfer", "CTM In");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CTMNewInbound.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Transfer > CTM In"');
    });
  });

  test(qase(293, "[UAT] Verify if page 'rptDiscripancy.aspx' is available WHEN Menu item: 'Operations > Discrepancy > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Discrepancy > List"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Discrepancy", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptDiscripancy.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Discrepancy > List"');
    });
  });

  test(qase(294, "[UAT] Verify if page 'FrmAWBDiscripancy.aspx' is available WHEN Menu item: 'Operations > Discrepancy > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Operations > Discrepancy > New"`, async () => {
      await pm.navbar.navigateToMenu("Operations", "Discrepancy", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmAWBDiscripancy.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Operations > Discrepancy > New"');
    });
  });
});
