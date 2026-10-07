import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("Configuration Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test(qase(383, "[UAT] Verify if page 'ShowPowerBIReport.aspx' is available WHEN Menu item: 'Configuration > Azure Dashboard' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Azure Dashboard"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Azure Dashboard");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ShowPowerBIReport.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Azure Dashboard"');
    });
  });

  test(qase(384, "[UAT] Verify if page 'UserListing.aspx' is available WHEN Menu item: 'Configuration > Users > User/Login > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Users > User/Login > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Users", "User/Login", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UserListing.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Users > User/Login > List"');
    });
  });

  test(qase(385, "[UAT] Verify if page 'UserCreation.aspx' is available WHEN Menu item: 'Configuration > Users > User/Login > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Users > User/Login > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Users", "User/Login", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UserCreation.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Users > User/Login > New"');
    });
  });

  test(qase(386, "[UAT] Verify if page 'ChangePassword.aspx' is available WHEN Menu item: 'Configuration > Users > Change Password' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Users > Change Password"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Users", "Change Password");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ChangePassword.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Users > Change Password"');
    });
  });

  test(qase(387, "[UAT] Verify if page 'ListRoleMaster.aspx' is available WHEN Menu item: 'Configuration > Users > Role Master > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Users > Role Master > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Users", "Role Master", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListRoleMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Users > Role Master > List"');
    });
  });

  test(qase(388, "[UAT] Verify if page 'RoleMasternew.aspx' is available WHEN Menu item: 'Configuration > Users > Role Master > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Users > Role Master > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Users", "Role Master", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/RoleMasternew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Users > Role Master > New"');
    });
  });

  test(qase(389, "[UAT] Verify if page 'Config.aspx' is available WHEN Menu item: 'Configuration > Masters > AWB Designator' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > AWB Designator"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "AWB Designator");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/Config.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > AWB Designator"');
    });
  });

  test(qase(390, "[UAT] Verify if page 'CountryMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Country' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Country"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Country");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CountryMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Country"');
    });
  });

  test(qase(391, "[UAT] Verify if page 'RegionMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Region' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Region"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Region");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/RegionMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Region"');
    });
  });

  test(qase(392, "[UAT] Verify if page 'frmCurrencyMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Currency' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Currency"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Currency");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmCurrencyMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Currency"');
    });
  });

  test(qase(393, "[UAT] Verify if page 'ZoneMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Zone Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Zone Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Zone Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ZoneMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Zone Master"');
    });
  });

  test(qase(394, "[UAT] Verify if page 'ListRoute.aspx' is available WHEN Menu item: 'Configuration > Masters > Airline Route > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Airline Route > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Airline Route", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListRoute.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Airline Route > List"');
    });
  });

  test(qase(395, "[UAT] Verify if page 'BuildRoute.aspx' is available WHEN Menu item: 'Configuration > Masters > Airline Route > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Airline Route > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Airline Route", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/BuildRoute.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Airline Route > New"');
    });
  });

  test(qase(396, "[UAT] Verify if page 'AirportMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Airport ' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Airport"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Airport");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AirportMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Airport"');
    });
  });

  test(qase(397, "[UAT] Verify if page 'AircraftEquipment.aspx' is available WHEN Menu item: 'Configuration > Masters > Aircraft > Aircraft' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Aircraft > Aircraft"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Aircraft", "Aircraft");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AircraftEquipment.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Aircraft > Aircraft"');
    });
  });

  test(qase(398, "[UAT] Verify if page 'EquipmentMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Aircraft > Equipment' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Aircraft > Equipment"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Aircraft", "Equipment");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/EquipmentMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Aircraft > Equipment"');
    });
  });

  test(qase(399, "[UAT] Verify if page 'AircraftPositionConfig.aspx' is available WHEN Menu item: 'Configuration > Masters > Aircraft > Aircraft Position Configuration' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Aircraft > Aircraft Position Configuration"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Aircraft", "Aircraft Position Configuration");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AircraftPositionConfig.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Aircraft > Aircraft Position Configuration"');
    });
  });

  test(qase(400, "[UAT] Verify if page 'FrmULDList.aspx' is available WHEN Menu item: 'Configuration > Masters > ULD > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > ULD > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "ULD", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmULDList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > ULD > List"');
    });
  });

  test(qase(401, "[UAT] Verify if page 'FrmULDMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > ULD > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > ULD > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "ULD", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmULDMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > ULD > New"');
    });
  });

  test(qase(402, "[UAT] Verify if page 'FrmULDTypeMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > ULD > ULD Category' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > ULD > ULD Category"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "ULD", "ULD Category");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmULDTypeMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > ULD > ULD Category"');
    });
  });

  test(qase(403, "[UAT] Verify if page 'CartMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Cart' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Cart"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Cart");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CartMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Cart"');
    });
  });

  test(qase(404, "[UAT] Verify if page 'PriorityConfigurationList.aspx' is available WHEN Menu item: 'Configuration > Masters > Priority > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Priority > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Priority", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PriorityConfigurationList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Priority > List"');
    });
  });

  test(qase(405, "[UAT] Verify if page 'PriorityConfigurationNew.aspx' is available WHEN Menu item: 'Configuration > Masters > Priority > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Priority > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Priority", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PriorityConfigurationNew.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Priority > New"');
    });
  });

  test(qase(406, "[UAT] Verify if page 'PriorityMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Priority > Priority Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Priority > Priority Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Priority", "Priority Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PriorityMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Priority > Priority Master"');
    });
  });

  test(qase(407, "[UAT] Verify if page 'CategoryMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Commodity > Category Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Commodity > Category Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Commodity", "Category Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CategoryMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Commodity > Category Master"');
    });
  });

  test(qase(408, "[UAT] Verify if page 'CommodityMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Commodity > Commodity Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Commodity > Commodity Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Commodity", "Commodity Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CommodityMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Commodity > Commodity Master"');
    });
  });

  test(qase(409, "[UAT] Verify if page 'DwellTimeConfig.aspx' is available WHEN Menu item: 'Configuration > Masters > Commodity > Dwell Time Config' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Commodity > Dwell Time Config"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Commodity", "Dwell Time Config");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/DwellTimeConfig.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Commodity > Dwell Time Config"');
    });
  });

  test(qase(410, "[UAT] Verify if page 'SpecialHandlingCodeMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Special Handling Code' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Special Handling Code"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Special Handling Code");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SpecialHandlingCodeMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Special Handling Code"');
    });
  });

  test(qase(411, "[UAT] Verify if page 'CutOffMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > CutOff Time' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > CutOff Time"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "CutOff Time");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CutOffMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Cutoff Time"');
    });
  });

  test(qase(412, "[UAT] Verify if page 'frmProductTypeMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Product Type' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Product Type"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Product Type");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/frmProductTypeMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Product Type"');
    });
  });

  test(qase(413, "[UAT] Verify if page 'IRCodes.aspx' is available WHEN Menu item: 'Configuration > Masters > Irregularity Codes' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Irregularity Codes"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Irregularity Codes");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/IRCodes.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Irregularity Codes"');
    });
  });

  test(qase(414, "[UAT] Verify if page 'ExchRateMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Exchange Rate' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Exchange Rate"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Exchange Rate");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ExchRateMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Exchange Rate"');
    });
  });

  test(qase(415, "[UAT] Verify if page 'OCMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Other Charges' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Other Charges"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Other Charges");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/OCMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Other Charges"');
    });
  });

  test(qase(416, "[UAT] Verify if page 'HolidayMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Holiday' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Holiday"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Holiday");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/HolidayMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Holiday"');
    });
  });

  test(qase(417, "[UAT] Verify if page 'UploadRates.aspx' is available WHEN Menu item: 'Configuration > Masters > Upload Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Upload Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Upload Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/UploadRates.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Upload Master"');
    });
  });

  test(qase(418, "[UAT] Verify if page 'SpotApprovalMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Spot Approval Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Spot Approval Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Spot Approval Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SpotApprovalMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Spot Approval Master"');
    });
  });

  test(qase(419, "[UAT] Verify if page 'QueueMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Queue Code Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Queue Code Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Queue Code Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/QueueMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Queue Code Master"');
    });
  });

  test(qase(420, "[UAT] Verify if page 'ZipCodeMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Zip Code Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Zip Code Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Zip Code Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ZipCodeMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Zip Code Master"');
    });
  });

  test(qase(421, "[UAT] Verify if page 'FrmDriverMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Driver Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Driver Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Driver Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmDriverMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Driver Master"');
    });
  });

  test(qase(422, "[UAT] Verify if page 'DeviceMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > Device Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Device Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "Device Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/DeviceMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Device Master"');
    });
  });

  test(qase(423, "[UAT] Verify if page 'CityMaster.aspx' is available WHEN Menu item: 'Configuration > Masters > City Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > City Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters", "City Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CityMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > City Master"');
    });
  });

  test(qase(424, "[UAT] Verify if page 'PasswordSecurityScreen.aspx#' is available WHEN Menu item: 'Configuration > Masters > Password Policy' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Masters > Password Policy"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Masters");
      const passwordPolicyLink = page.getByRole('link', { name: 'Password Policy' });
      await passwordPolicyLink.evaluate(el => (el as HTMLElement).click());
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/PasswordSecurityScreen.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Masters > Password Policy"');
    });
  });

  test(qase(425, "[UAT] Verify if page 'HistoryCapacity.aspx' is available WHEN Menu item: 'Configuration > Capacity > Historic' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Capacity > Historic"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Capacity", "Historic");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/HistoryCapacity.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Capacity > Historic"');
    });
  });

  test(qase(426, "[UAT] Verify if page 'CapacityMaster.aspx' is available WHEN Menu item: 'Configuration > Capacity > Capacity Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Capacity > Capacity Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Capacity", "Capacity Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/CapacityMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Capacity > Capacity Master"');
    });
  });

  test(qase(427, "[UAT] Verify if page 'FlightBudgetMaster.aspx' is available WHEN Menu item: 'Configuration > Capacity > Flight Budget' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Capacity > Flight Budget"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Capacity", "Flight Budget");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FlightBudgetMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Capacity > Flight Budget"');
    });
  });

  test(qase(428, "[UAT] Verify if page 'ListRateCard.aspx' is available WHEN Menu item: 'Configuration > Rates > Rate Cards > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Rate Cards > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Rate Card", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListRateCard.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rates > Rate Cards > List"');
    });
  });

  test(qase(429, "[UAT] Verify if page 'RateCardMaster.aspx' is available WHEN Menu item: 'Configuration > Rates > Rate Cards > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Rate Cards > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Rate Card", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/RateCardMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rates > Rate Cards > New"');
    });
  });

  test(qase(430, "[UAT] Verify if page 'ListRateLine.aspx' is available WHEN Menu item: 'Configuration > Rates > Rate Line > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Rate Line > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Rate Line", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListRateLine.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rates > Rate Line > List"');
    });
  });

  test(qase(431, "[UAT] Verify if page 'MaintainRates.aspx' is available WHEN Menu item: 'Configuration > Rates > Rate Line > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Rate Line > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Rate Line", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/MaintainRates.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rates > Rate Line > New"');
    });
  });

  test(qase(432, "[UAT] Verify if page 'RateLineConfigPriority.aspx' is available WHEN Menu item: 'Configuration > Rates > Rate Parameter Priority' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Rate Parameter Priority"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Rate Parameter Priority");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/RateLineConfigPriority.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Rate Parameter Priority"');
    });
  });

  test(qase(433, "[UAT] Verify if page 'ListOtherCharges.aspx' is available WHEN Menu item: 'Configuration > Rates > Other Charges > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Other Charges > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Other Charges", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListOtherCharges.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Other Charges > List"');
    });
  });

  test(qase(434, "[UAT] Verify if page 'OtherCharges.aspx' is available WHEN Menu item: 'Configuration > Rates > Other Charges > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Other Charges > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Other Charges", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/OtherCharges.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Other Charges > New"');
    });
  });

  test(qase(435, "[UAT] Verify if page 'ListSpotRateApproval.aspx?id=1' is available WHEN Menu item: 'Configuration > Rates > Spot Rates > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Spot Rates > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Spot Rates", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListSpotRateApproval.aspx?id=1');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Spot Rates > List"');
    });
  });

  test(qase(436, "[UAT] Verify if page 'SpotRateMaster.aspx' is available WHEN Menu item: 'Configuration > Rates > Spot Rates > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Spot Rates > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Spot Rates", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SpotRateMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Spot Rates > New"');
    });
  });

  test(qase(437, "[UAT] Verify if page 'ListSpotRateApproval.aspx' is available WHEN Menu item: 'Configuration > Rates > Spot Rates > Approval' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Spot Rates > Approval"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Spot Rates", "Approval");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListSpotRateApproval.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Spot Rates > Approval"');
    });
  });

  test(qase(438, "[UAT] Verify if page 'TaxLineList.aspx?id=1' is available WHEN Menu item: 'Configuration > Rates > Tax Line > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Tax Line > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Tax Line", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/TaxLineList.aspx?id=1');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Tax Line > List"');
    });
  });

  test(qase(439, "[UAT] Verify if page 'TaxLine.aspx' is available WHEN Menu item: 'Configuration > Rates > Tax Line > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Tax Line > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Tax Line", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/TaxLine.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Tax Line > New"');
    });
  });

  test(qase(440, "[UAT] Verify if page 'ListConfig.aspx' is available WHEN Menu item: 'Configuration > Rates > Config Line > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Config Line > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Config Line", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListConfig.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Config Line > List"');
    });
  });

  test(qase(441, "[UAT] Verify if page 'SCMConfigLine.aspx' is available WHEN Menu item: 'Configuration > Rates > Config Line > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rate > Config Line > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Config Line", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SCMConfigLine.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Config Line > New"');
    });
  });

  test(qase(442, "[UAT] Verify if page 'ProRateMaster.aspx' is available WHEN Menu item: 'Configuration > Rates > Airline Proration' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Airline Proration"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Airline Proration");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ProRateMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Airline Proration"');
    });
  });

  test(qase(443, "[UAT] Verify if page 'VolumetricExepList.aspx' is available WHEN Menu item: 'Configuration > Rates > Vol. Exemption > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Vol. Exemption > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Vol. Exemption", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/VolumetricExepList.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Vol. Exemption > List"');
    });
  });

  test(qase(444, "[UAT] Verify if page 'VolumetricException.aspx' is available WHEN Menu item: 'Configuration > Rates > Vol. Exemption > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Rates > Vol. Exemption > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Rates", "Vol. Exemption", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/VolumetricException.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Rate > Vol. Exemption > New"');
    });
  });

  test(qase(445, "[UAT] Verify if page 'ListPartner.aspx' is available WHEN Menu item: 'Configuration > Partner > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Partner > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Partner", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListPartner.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Partner > List"');
    });
  });

  test(qase(446, "[UAT] Verify if page 'AirlineMaster.aspx' is available WHEN Menu item: 'Configuration > Partner > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Partner > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Partner", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AirlineMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Partner > New"');
    });
  });

  test(qase(447, "[UAT] Verify if page 'ListAgentMaster.aspx' is available WHEN Menu item: 'Configuration > Agent > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Agent > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Agent", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListAgentMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Agent > List"');
    });
  });

  test(qase(448, "[UAT] Verify if page 'AgentMaster.aspx' is available WHEN Menu item: 'Configuration > Agent > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Agent > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Agent", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/AgentMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Agent > New"');
    });
  });

  test(qase(449, "[UAT] Verify if page 'ShipperMaster.aspx' is available WHEN Menu item: 'Configuration > Shipper Consignee > Shipper Consignee' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Shipper Consignee > Shipper Consignee"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Shipper Consignee", "Shipper Consignee");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ShipperMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Shipper Consignee > Shipper Consignee"');
    });
  });

  test(qase(450, "[UAT] Verify if page 'ListFrmMessageConfiguration.aspx' is available WHEN Menu item: 'Configuration > Message Configuration > List' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Message Configuration > List"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Message Configuration", "List");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/ListFrmMessageConfiguration.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Message Configuration > List"');
    });
  });

  test(qase(451, "[UAT] Verify if page 'FrmMessageConfiguration.aspx' is available WHEN Menu item: 'Configuration > Message Configuration > New' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Message Configuration > New"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Message Configuration", "New");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmMessageConfiguration.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Message Configuration > New"');
    });
  });

  test(qase(452, "[UAT] Verify if page 'uploadmaster.aspx' is available WHEN Menu item: 'Configuration > Upload Master' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Upload Master"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Upload Master");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/uploadmaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Upload Master"');
    });
  });

  test(qase(453, "[UAT] Verify if page 'FrmNotifications.aspx' is available WHEN Menu item: 'Configuration > Notification' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Notification"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Notification");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/FrmNotifications.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Notification"');
    });
  });

  test(qase(454, "[UAT] Verify if page 'StoreSLAMaster.aspx' is available WHEN Menu item: 'Configuration > SLA > Store SLA' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > SLA > Store SLA"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "SLA", "Store SLA");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/StoreSLAMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > SLA > Store SLA"');
    });
  });

  test(qase(455, "[UAT] Verify if page 'StationSLAMaster.aspx' is available WHEN Menu item: 'Configuration > SLA > A2A Config' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > SLA > A2A Config"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "SLA", "A2A Config");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/StationSLAMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > SLA > A2A Config"');
    });
  });

  test(qase(456, "[UAT] Verify if page 'SLACalculator.aspx' is available WHEN Menu item: 'Configuration > SLA > SLA Calculator' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > SLA > SLA Calculator"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "SLA", "SLA Calculator");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/SLACalculator.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > SLA > SLA Calculator"');
    });
  });

  test(qase(457, "[UAT] Verify if page 'QueueConfiguration.aspx' is available WHEN Menu item: 'Configuration > Queue Configuration' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Queue Configuration"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Queue Configuration");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/QueueConfiguration.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Queue Configuration"');
    });
  });

  test(qase(458, "[UAT] Verify if page 'DensityCodeMaster.aspx' is available WHEN Menu item: 'Configuration > Density Codes' is clicked"), { tag: '@smoketest' }, async ({ pm, page }) => {
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

    await test.step(`Click on Menu item: "Configuration > Density Codes"`, async () => {
      await pm.navbar.navigateToMenu("Configuration", "Density Codes");
      await pm.navbar.verify_page_url('https://cebutesting.smartkargo.com/DensityCodeMaster.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "Configuration > Density Codes"');
    });
  });
});
