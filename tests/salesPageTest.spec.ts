import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Sales Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(60_000);

  test(qase(241, "[UAT] Verify if page 'StockAllocation.aspx' is available WHEN Menu item: 'Sales > Stock Allocation > Stock Allocation' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Stock Allocation > Stock Allocation"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Stock Allocation", "Stock Allocation");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/StockAllocation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Stock Allocation > Stock Allocation"');
    });
  });

  test(qase(242, "[UAT] Verify if page 'frmlistcapacityallocation.aspx' is available WHEN Menu item: 'Sales > Capacity Allocation > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Capacity Allocation > List"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Capacity Allocation", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmlistcapacityallocation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Capacity Allocation > List"');
    });
  });

  test(qase(243, "[UAT] Verify if page 'frmcapacityallocation.aspx' is available WHEN Menu item: 'Sales > Capacity Allocation > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Capacity Allocation > New"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Capacity Allocation", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmcapacityallocation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Capacity Allocation > New"');
    });
  });

  test(qase(244, "[UAT] Verify if page 'FrmListCapacityAllocationUsage.aspx' is available WHEN Menu item: 'Sales > Capacity Allocation > Capacity Usage' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Capacity Allocation > Capacity Usage"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Capacity Allocation", "Capacity Usage");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmListCapacityAllocationUsage.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Capacity Allocation > Capacity Usage"');
    });
  });

  test(qase(245, "[UAT] Verify if page 'ListRateLine.aspx' is available WHEN Menu item: 'Sales > Rate Line > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Rate Line > List"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Rate Line", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListRateLine.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Rate Line > List"');
    });
  });

  test(qase(246, "[UAT] Verify if page 'MaintainRates.aspx' is available WHEN Menu item: 'Sales > Rate Line > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Rate Line > New"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Rate Line", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MaintainRates.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Rate Line > New"');
    });
  });

  test(qase(247, "[UAT] Verify if page 'ListOtherCharges.aspx' is available WHEN Menu item: 'Sales > Other Charges > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Other Charges > List"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Other Charges", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListOtherCharges.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Other Charges > List"');
    });
  });

  test(qase(248, "[UAT] Verify if page 'OtherCharges.aspx' is available WHEN Menu item: 'Sales > Other Charges > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Other Charges > New"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Other Charges", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/OtherCharges.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Other Charges > New"');
    });
  });

  test(qase(249, "[UAT] Verify if page 'SpotRateMaster.aspx' is available WHEN Menu item: 'Sales > Spot Rate > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Spot Rate > New"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Spot Rate", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SpotRateMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Spot Rate > New"');
    });
  });

  test(qase(250, "[UAT] Verify if page 'ListSpotRateApproval.aspx?id=1' is available WHEN Menu item: 'Sales > Spot Rate > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Spot Rate > List"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Spot Rate", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListSpotRateApproval.aspx?id=1');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Spot Rate > List"');
    });
  });

  test(qase(251, "[UAT] Verify if page 'SpotApprovalMaster.aspx#' is available WHEN Menu item: 'Sales > Spot Rate > Approval Hierarchy' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Spot Rate > Approval Hierarchy"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Spot Rate", "Approval Hierarchy");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SpotApprovalMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Spot Rate > Approval Hierarchy"');
    });
  });

  test(qase(459, "[UAT] Verify if page 'ListSpotRateApproval.aspx?id=0' is available WHEN Menu item: 'Sales > Spot Rate > Approval' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Sales > Spot Rate > Approval"`, async () => {
      await pm.navbar.navigateToMenu("Sales", "Spot Rate", "Approval");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListSpotRateApproval.aspx?id=0');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Sales > Spot Rate > Approval"');
    });
  });
});
