import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Report Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(353, "[UAT] Verify if page 'rptDailySalesReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Daily Sales' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Daily Sales"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Daily Sales");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptDailySalesReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Daily Sales"');
    });
  });

  test(qase(354, "[UAT] Verify if page 'rptCargoLoadFactor.aspx' is available WHEN Menu item: 'Rerport > Standard > Cargo Load Factor' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Load Cargo Factor"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Load Cargo Factor");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptCargoLoadFactor.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Load Cargo Factor"');
    });
  });

  test(qase(355, "[UAT] Verify if page 'rptDailyCollection.aspx' is available WHEN Menu item: 'Rerport > Standard > Daily Collection' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Daily Collection"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Daily Collection");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptDailyCollection.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Daily Collection"');
    });
  });

  test(qase(356, "[UAT] Verify if page 'rptStationwiseReport.aspx' is available WHEN Menu item: 'Rerport > Standard > StationWise Tonnage' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > StationWise Tonnage"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "StationWise Tonnage");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptStationwiseReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > StationWise Tonnage"');
    });
  });

  test(qase(357, "[UAT] Verify if page 'rptAgentWiseReport.aspx' is available WHEN Menu item: 'Rerport > Standard >  Agent Performance' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Agent Performance"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Agent Performance");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptAgentWiseReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Agent Performance"');
    });
  });

  test(qase(358, "[UAT] Verify if page 'rptFlightWiseTonnageReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Flight Performance' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Flight Performance"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Flight Performance");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptFlightWiseTonnageReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Flight Performance"');
    });
  });

  // ============================================
  // Cases 359-381: Rerport > Standard (typo in Qase, UI uses "Reports")
  // ============================================

  test(qase(359, "[UAT] Verify if page 'rptAWBMovement.aspx' is available WHEN Menu item: 'Rerport > Standard > AWB Movement' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > AWB Movement"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "AWB Movement");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptAWBMovement.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > AWB Movement"');
    });
  });

  test(qase(360, "[UAT] Verify if page 'rptOffloadReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Offload' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Offload"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Offload");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptOffloadReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Offload"');
    });
  });

  test(qase(361, "[UAT] Verify if page 'rptMISAWBBillingDetails.aspx' is available WHEN Menu item: 'Rerport > Standard >  AWB Detail Report' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > AWB Detail Report"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "AWB Detail Report");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptMISAWBBillingDetails.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > AWB Detail Report"');
    });
  });

  test(qase(362, "[UAT] Verify if page 'ScheduleImpactReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Schedule Impact Report' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Schedule Impact Report"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Schedule Impact Report");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ScheduleImpactReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Schedule Impact Report"');
    });
  });

  test(qase(363, "[UAT] Verify if page 'CargoRevenueTracking.aspx' is available WHEN Menu item: 'Rerport > Standard > Cargo Revenue Tracking' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Cargo Revenue Tracking"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Cargo Revenue Tracking");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CargoRevenueTracking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Cargo Revenue Tracking"');
    });
  });

  test(qase(364, "[UAT] Verify if page 'rptStorageCharge.aspx' is available WHEN Menu item: 'Rerport > Standard > Storage Charge' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Storage Charge"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Storage Charge");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptStorageCharge.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Storage Charge"');
    });
  });

  test(qase(365, "[UAT] Verify if page 'rptCreditDebitMemo.aspx' is available WHEN Menu item: 'Rerport > Standard >  Credit Debit Memo' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Credit Debit Memo"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Credit Debit Memo");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptCreditDebitMemo.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Credit Debit Memo"');
    });
  });

  test(qase(366, "[UAT] Verify if page 'rptARDeposit.aspx' is available WHEN Menu item: 'Rerport > Standard >  A/R Deposit' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > A/R Deposit"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "A/R Deposit");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptARDeposit.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > A/R Deposit"');
    });
  });

  test(qase(367, "[UAT] Verify if page 'rptARTransaction.aspx' is available WHEN Menu item: 'Rerport > Standard > A/R Transaction' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > A/R Transaction"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "A/R Trasaction");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptARTransaction.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > A/R Transaction"');
    });
  });

  test(qase(368, "[UAT] Verify if page 'rptARPaymentSummary.aspx' is available WHEN Menu item: 'Rerport > Standard > A/R Payment Summary' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > A/R Payment Summary"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "A/R Payment Summary");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptARPaymentSummary.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > A/R Payment Summary"');
    });
  });

  test(qase(369, "[UAT] Verify if page 'ORCancellation.aspx' is available WHEN Menu item: 'Rerport > Standard > OR Reports > OR Cancellation' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > OR Reports > OR Cancellation"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "OR Reports", "OR Cancellation");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ORCancellation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > OR Reports > OR Cancellation"');
    });
  });

  test(qase(370, "[UAT] Verify if page 'rptORTransation.aspx' is available WHEN Menu item: 'Rerport > Standard > OR Reports > OR Transaction' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > OR Reports > OR Transaction"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "OR Reports", "OR Transaction");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptORTransation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > OR Reports > OR Transaction"');
    });
  });

  test(qase(371, "[UAT] Verify if page 'rptORNotPrinted.aspx' is available WHEN Menu item: 'Report > Standard > OR Reports > OR Non Printed' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > OR Reports > OR Non Printed"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "OR Reports", "OR Non Printed");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptORNotPrinted.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > OR Reports > OR Non Printed"');
    });
  });

  test(qase(372, "[UAT] Verify if page 'rptEndOfShift.aspx' is available WHEN Menu item: 'Rerport > Standard > End Of Shift' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > End Of Shift"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "End Of Shift");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptEndOfShift.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > End Of Shift"');
    });
  });

  test(qase(373, "[UAT] Verify if page 'rptStatementOfAccount.aspx' is available WHEN Menu item: 'Rerport > Standard > Statement of Account' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Statement of Account"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Statement of Account");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptStatementOfAccount.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Statement of Account"');
    });
  });

  test(qase(374, "[UAT] Verify if page 'rptARAging.aspx' is available WHEN Menu item: 'Rerport > Standard > A/R Aging' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > A/R Aging"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "A/R Aging");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptARAging.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > A/R Aging"');
    });
  });

  test(qase(375, "[UAT] Verify if page 'rptAveragePayingHabit.aspx' is available WHEN Menu item: 'Rerport > Standard > Average Paying Habit' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Average Paying Habit"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Average Paying Habit");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptAveragePayingHabit.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Average Paying Habit"');
    });
  });

  test(qase(376, "[UAT] Verify if page 'rptCCA.aspx' is available WHEN Menu item: 'Rerport > Standard > CCA' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > CCA"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "CCA");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptCCA.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > CCA"');
    });
  });

  test(qase(377, "[UAT] Verify if page 'rptProration.aspx' is available WHEN Menu item: 'Rerport > Standard > Proration Report' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Proration Report"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Proration Report");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptProration.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Proration Report"');
    });
  });

  test(qase(378, "[UAT] Verify if page 'ControlDashBoardReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Control Dashboard' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Control Dashboard"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Control DashBoard");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ControlDashBoardReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Control Dashboard"');
    });
  });

  test(qase(379, "[UAT] Verify if page 'ScreeningReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Screening' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Screening"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Screening");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ScreeningReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Screening"');
    });
  });

  test(qase(380, "[UAT] Verify if page 'rptAdvancePayment.aspx' is available WHEN Menu item: 'Rerport > Standard > Advance Payment' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Advance Payment"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Advance Payment");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptAdvancePayment.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Advance Payment"');
    });
  });

  test(qase(381, "[UAT] Verify if page 'rptWaiveOffReport.aspx' is available WHEN Menu item: 'Rerport > Standard > Waive Charge Report' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Reports > Standard > Waive Charge Report"`, async () => {
      await pm.navbar.navigateToMenu("Reports", "Standard", "Waive Charge Report");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptWaiveOffReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Reports > Standard > Waive Charge Report"');
    });
  });
});
