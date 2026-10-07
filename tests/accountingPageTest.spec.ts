import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Accounting Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(329, "[UAT] Verify if page 'BillingInvoiceMatching.aspx' is available WHEN Menu item: 'Accounting > AWB Rate Audit' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > AWB Rate Audit"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "AWB Rate Audit");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/BillingInvoiceMatching.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > AWB Rate Audit"');
    });
  });

  test(qase(330, "[UAT] Verify if page 'FrmInvoiceListing.aspx' is available WHEN Menu item: 'Accounting > Agent > Invoice' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > Invoice"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "Invoice");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmInvoiceListing.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > Invoice"');
    });
  });

  test(qase(331, "[UAT] Verify if page 'BillingInvoiceCollection.aspx' is available WHEN Menu item: 'Accounting > Agent > Collection > Collection' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > Collection > Collection"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "Collection", "Collection");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/BillingInvoiceCollection.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > Collection > Collection"');
    });
  });

  test(qase(332, "[UAT] Verify if page 'rptCardTransactions.aspx' is available WHEN Menu item: 'Accounting > Agent > Collection > List Card and EWallet Transactions' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > Collection > List Card and EWallet Transactions"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "Collection", "List Card and EWallet Transactions");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptCardTransactions.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > Collection > List Card and EWallet Transactions"');
    });
  });

  test(qase(333, "[UAT] Verify if page 'UploadAWBCollectionExcel.aspx' is available WHEN Menu item: 'Accounting > Agent > Collection > Excel AWB Upload Collection' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > Collection > Excel AWB Upload Collection"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "Collection", "Excel AWB Upload Collection");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UploadAWBCollectionExcel.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > Collection > Excel AWB Upload Collection"');
    });
  });

  test(qase(334, "[UAT] Verify if page 'ListCCA.aspx' is available WHEN Menu item: 'Accounting > Agent > CCA > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > CCA > List"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "CCA", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListCCA.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > CCA > List"');
    });
  });

  test(qase(335, "[UAT] Verify if page 'GenerateCCA.aspx' is available WHEN Menu item: 'Accounting > Agent > CCA > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > CCA > New"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "CCA", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/GenerateCCA.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > CCA > New"');
    });
  });

  test(qase(336, "[UAT] Verify if page 'rptCCAExtract.aspx' is available WHEN Menu item: 'Accounting > Agent > CCA > CCA Extract' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > CCA > CCA Extract"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "CCA", "CCA Extract");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/rptCCAExtract.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > CCA > CCA Extract"');
    });
  });

  test(qase(337, "[UAT] Verify if page 'DCMGenerate.aspx' is available WHEN Menu item: 'Accounting > Agent > DCM > Generate' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > DCM > Generate"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "DCM", "Generate");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/DCMGenerate.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > DCM > Generate"');
    });
  });

  test(qase(338, "[UAT] Verify if page 'ListDCMAWBDeals.aspx' is available WHEN Menu item: 'Accounting > Agent > DCM > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > DCM > List"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "DCM", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListDCMAWBDeals.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > DCM > List"');
    });
  });

  test(qase(339, "[UAT] Verify if page 'MiscInvoice.aspx' is available WHEN Menu item: 'Accounting > Agent > MISC Invoice' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Agent > MISC Invoice"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Agent", "MISC Invoice");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MiscInvoice.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Agent > MISC Invoice"');
    });
  });

  test(qase(340, "[UAT] Verify if page 'InterlineReceivable.aspx' is available WHEN Menu item: 'Accounting > Interline > Receivables > Receivables' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Receivables > Receivables"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Receivables", "Receivables");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/InterlineReceivable.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Receivables > Receivables"');
    });
  });

  test(qase(341, "[UAT] Verify if page 'InterlineBillingMemo.aspx?LoadMode=Create' is available WHEN Menu item: 'Accounting > Interline > Receivables > Create Billing Memo' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Receivables > Create Billing Memo"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Receivables", "Create Billing Memo");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/InterlineBillingMemo.aspx?LoadMode=Create');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Receivables > Create Billing Memo"');
    });
  });

  test(qase(342, "[UAT] Verify if page 'InterlineCreditMemo.aspx?LoadMode=Create' is available WHEN Menu item: 'Accounting > Interline > Receivables > Create Credit Memo' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Receivables > Create Credit Memo"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Receivables", "Create Credit Memo");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/InterlineCreditMemo.aspx?LoadMode=Create');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Receivables > Create Credit Memo"');
    });
  });

  test(qase(343, "[UAT] Verify if page 'frmInterlineInvoiceListing.aspx' is available WHEN Menu item: 'Accounting > Interline > Invoice' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Invoice"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Invoice");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmInterlineInvoiceListing.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Invoice"');
    });
  });

  test(qase(344, "[UAT] Verify if page 'InterlinePayables.aspx' is available WHEN Menu item: 'Accounting > Interline > Payables' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Payables"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Payables");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/InterlinePayables.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Payables"');
    });
  });

  test(qase(345, "[UAT] Verify if page 'AdhocSPAMaster.aspx' is available WHEN Menu item: 'Accounting > Interline > Adhoc SPA > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Adhoc SPA > New"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Adhoc SPA", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AdhocSPAMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Adhoc SPA > New"');
    });
  });

  test(qase(346, "[UAT] Verify if page 'ListAdhocSPARateApproval.aspx' is available WHEN Menu item: 'Accounting > Interline > Adhoc SPA > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > Adhoc SPA > List"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "Adhoc SPA", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListAdhocSPARateApproval.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > Adhoc SPA > List"');
    });
  });

  test(qase(347, "[UAT] Verify if page 'InterlineFileUploadManager.aspx' is available WHEN Menu item: 'Accounting > Interline > File Upload Manager' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Interline > File Upload Manager"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Interline", "File Upload Manager");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/InterlineFileUploadManager.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Interline > File Upload Manager"');
    });
  });

  test(qase(348, "[UAT] Verify if page 'frmClaimApplication.aspx' is available WHEN Menu item: 'Accounting > Claims > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Claims > New"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Claims", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmClaimApplication.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Claims > New"');
    });
  });

  test(qase(349, "[UAT] Verify if page 'frmClaimList.aspx' is available WHEN Menu item: 'Accounting > Claims > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Claims > List"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Claims", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmClaimList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Claims > List"');
    });
  });

  test(qase(350, "[UAT] Verify if page 'claimtracking.aspx' is available WHEN Menu item: 'Accounting > Claims > Track' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > Claims > Track"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "Claims", "Track");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/claimtracking.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > Claims > Track"');
    });
  });

  test(qase(351, "[UAT] Verify if page 'FrmRapidInterface.aspx' is available WHEN Menu item: 'Accounting > ERPInterface> RAPID Interface' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > ERPInterface > RAPID Interface"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "ERPInterface", "RAPID Interface");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmRapidInterface.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > ERPInterface > RAPID Interface"');
    });
  });

  test(qase(352, "[UAT] Verify if page 'CurrencyExchangeRates.aspx' is available WHEN Menu item: 'Accounting > ICER Exchange Rates' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Accounting > ICER Exchange Rates"`, async () => {
      await pm.navbar.navigateToMenu("Accounting", "ICER Exchange Rates");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CurrencyExchangeRates.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Accounting > ICER Exchange Rates"');
    });
  });
});
