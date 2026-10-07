import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Planning Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(252, "[UAT] Verify if page 'FlightBudgetMaster.aspx' is available WHEN Menu item: 'Planning > Budget' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Budget"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Budget");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FlightBudgetMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Budget"');
    });
  });

  test(qase(253, "[UAT] Verify if page 'FlightControlNew.aspx' is available WHEN Menu item: 'Planning > Flight Control' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Control"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Control");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FlightControlNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Control"');
    });
  });

  test(qase(254, "[UAT] Verify if page 'ManageCapacity.aspx' is available WHEN Menu item: 'Planning > Manage Capacity' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Manage Capacity"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Manage Capacity");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ManageCapacity.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Manage Capacity"');
    });
  });

  test(qase(255, "[UAT] Verify if page 'CargoLoadPlan.aspx' is available WHEN Menu item: 'Planning > Flight Load Plan' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Load Plan"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Load Plan");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CargoLoadPlan.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Load Plan"');
    });
  });

  test(qase(256, "[UAT] Verify if page 'ListAirlineSchedule.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Flight Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Flight Master"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Flight Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListAirlineSchedule.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Flight Master"');
    });
  });

  test(qase(257, "[UAT] Verify if page 'ActiveSchedule.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Active Flights' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Active Flights"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Active Flights");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ActiveSchedule.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Active Flights"');
    });
  });

  test(qase(258, "[UAT] Verify if page 'frmDailySchedule.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Flight Movement' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Flight Movement"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Flight Movement");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmDailySchedule.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Flight Movement"');
    });
  });

  test(qase(259, "[UAT] Verify if page 'AirlineSchedule.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > New Flight' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > New Flight"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "New Flight");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AirlineSchedule.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > New Flight"');
    });
  });

  test(qase(260, "[UAT] Verify if page 'ListPartnerSchedule.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Partner Flight' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Partner Flight"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Partner Flight");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListPartnerSchedule.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Partner Flight"');
    });
  });

  test(qase(262, "[UAT] Verify if page 'LiStRouteline.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Route Control > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Route Control > List"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Route Control", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/LiStRouteline.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Route Control > List"');
    });
  });

  test(qase(263, "[UAT] Verify if page 'Routeline.aspx' is available WHEN Menu item: 'Planning > Flight Schedule > Route Control > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > Flight Schedule > Route Control > New"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "Flight Schedule", "Route Control", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/Routeline.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > Flight Schedule > Route Control > New"');
    });
  });

  test(qase(264, "[UAT] Verify if page 'ListFlightLoadPlan.aspx' is available WHEN Menu item: 'Planning > List Flight Plan' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Planning > List Flight Plan"`, async () => {
      await pm.navbar.navigateToMenu("Planning", "List Flight Plan");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListFlightLoadPlan.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Planning > List Flight Plan"');
    });
  });
});
