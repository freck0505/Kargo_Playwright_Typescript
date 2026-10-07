import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Track/Audit Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(309, "[UAT] Verify if page 'AWB_Enquiry.aspx' is available WHEN Menu item: 'Track/Audit > AWB Inquiry' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > AWB Inquiry"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "AWB Inquiry");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AWB_Enquiry.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > AWB Inquiry"');
    });
  });

  test(qase(310, "[UAT] Verify if page 'frmAWBTrackingMaster.aspx' is available WHEN Menu item: 'Track/Audit > Track AWB > Track AWB' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Track AWB > Track AWB"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Track AWB", "Track AWB");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmAWBTrackingMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Track AWB > Track AWB"');
    });
  });

  test(qase(311, "[UAT] Verify if page 'PieceAuditLog.aspx' is available WHEN Menu item: 'Track/Audit > Track AWB > AWB Piece Tracking' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Track AWB > AWB Piece Tracking"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Track AWB", "AWB Piece Tracking");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PieceAuditLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Track AWB > AWB Piece Tracking"');
    });
  });

  test(qase(312, "[UAT] Verify if page 'frmULDMovement.aspx' is available WHEN Menu item: 'Track/Audit > Track ULD > UDL Movement' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Track ULD > UDL Movement"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Track ULD", "ULD Movement");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmULDMovement.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Track ULD > UDL Movement"');
    });
  });

  test(qase(313, "[UAT] Verify if page 'frmULDMovementHistory.aspx' is available WHEN Menu item: 'Track/Audit > Track ULD > ULD Movement History' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Track ULD > ULD Movement History"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Track ULD", "ULD Movement History");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmULDMovementHistory.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Track ULD > ULD Movement History"');
    });
  });

  test(qase(314, "[UAT] Verify if page 'MultipleMarker.aspx' is available WHEN Menu item: 'Track/Audit > Track ULD > ULD Location' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Track ULD > ULD Location"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Track ULD", "ULD Location");
      const mapElement = pm.thisPage.locator('.gm-style > div > div:nth-child(2)').first();
      await mapElement.waitFor({ state: 'visible', timeout: 10000 });
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MultipleMarker.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Track ULD > ULD Location"');
    });
  });

  test(qase(315, "[UAT] Verify if page 'rptMessaging.aspx' is available WHEN Menu item: 'Track/Audit > Messaging > Message Monitoring' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Messaging > Message Monitoring"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Messaging", "Monitor Messaging");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptMessaging.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Messaging > Monitor Messaging"');
    });
  });

  test(qase(316, "[UAT] Verify if page 'ASMMessageReport.aspx' is available WHEN Menu item: 'Track/Audit > Messaging > ASM/SSM Monitoring' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Messaging > ASM/SSM Monitoring"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Messaging", "ASM/SSM Monitoring");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ASMMessageReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Messaging > ASM/SSM Monitoring"');
    });
  });

  test(qase(317, "[UAT] Verify if page 'DynamicMessageControl.aspx' is available WHEN Menu item: 'Track/Audit > Messaging > Custom > Custom Message' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Messaging > Custom > Custom Message"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Messaging", "Custom", "Custom Message");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/DynamicMessageControl.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Messaging > Custom > Custom Message"');
    });
  });

  test(qase(318, "[UAT] Verify if page 'FrmListCustomMessage.aspx' is available WHEN Menu item: 'Track/Audit > Messaging > Custom > Custom Message List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Messaging > Custom > Custom Message List"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Messaging", "Custom", "Custom Message List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmListCustomMessage.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Messaging > Custom > Custom Message List"');
    });
  });

  test(qase(319, "[UAT] Verify if page 'OperationAWBAuditLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail > AWB Audit Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail > AWB Audit Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "AWB Audit Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/OperationAWBAuditLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail > AWB Audit Log"');
    });
  });

  test(qase(320, "[UAT] Verify if page 'BillingAWBAuditLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Billing Audit Trail' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Billing Audit Trail"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Billing Audit Trail");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/BillingAWBAuditLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Billing Audit Trail"');
    });
  });

  test(qase(321, "[UAT] Verify if page 'ULDTrack.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  ULD Audit Trail' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  ULD Audit Trail"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "ULD Audit Trail");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ULDTrack.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  ULD Audit Trail"');
    });
  });

  test(qase(322, "[UAT] Verify if page 'PageLockHistory.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Page Lock History' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Page Lock History"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Page Lock History");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PageLockHistory.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Page Lock History"');
    });
  });

  test(qase(323, "[UAT] Verify if page 'ReportLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Report Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Report Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Report Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ReportLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Report Log"');
    });
  });

  test(qase(324, "[UAT] Verify if page 'FrmUserActivityLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  User Login Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  User Login Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "User Login Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmUserActivityLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  User Login Log"');
    });
  });

  test(qase(325, "[UAT] Verify if page 'MasterAuditLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Master Audit Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Master Audit Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Master Audit Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MasterAuditLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Master Audit Log"');
    });
  });

  test(qase(326, "[UAT] Verify if page 'MasterUploadLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Master Upload Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Master Upload Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Master Upload Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MasterUploadLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Master Upload Log"');
    });
  });

  test(qase(327, "[UAT] Verify if page 'frmInterfaceAuditLog.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail >  Interface Audit Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail >  Interface Audit Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Interface Audit Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmInterfaceAuditLog.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail >  Interface Audit Log"');
    });
  });

  test(qase(328, "[UAT] Verify if page 'FlightLogNew.aspx' is available WHEN Menu item: 'Track/Audit > Audit Trail > Flight Audit Log' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Track/Audit > Audit Trail > Flight Audit Log"`, async () => {
      await pm.navbar.navigateToMenu("Track/Audit", "Audit Trail", "Flight Audit Log");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FlightLogNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Track/Audit > Audit Trail > Flight Audit Log"');
    });
  });
});
