---
name: playwright-pom-conventions
description: Project Playwright TypeScript POM layout and coding patterns for locators, page methods, PageManager, fixtures, and specs. Use when writing or extending automation under main/ or tests/.
---

# Playwright POM conventions (this repo)

## Layout

```text
tests/<area>.spec.ts                 # thin orchestration only
tests/<area>PageTest.spec.ts         # SmartKargo test files (e.g., salesPageTest.spec.ts)
main/locators/<area>Locators.ts      # exported locator config objects
main/functions/<area>Methods.ts      # page class + actions
main/functions/modals/<name>.ts      # modal/dialog helpers
main/utils/page.manager.ts           # lazy pm.* getters
main/utils/base.fixture.ts           # test/expect + pm fixtures
main/utils/logger.ts                 # logging
main/utils/screenshot.ts             # step screenshots
main/utils/credential.decoder.ts     # credentials from data/
data/                                # non-secret or encoded test data
```

## Specs (`tests/*.spec.ts`)

```ts
import { test, expect } from "main/utils/base.fixture";

test.describe("…", () => {
  test.beforeEach(async ({ pm, page }) => {
    // navigate + cookies via pm when needed
  });

  test("…", async ({ pm }) => {
    await pm.somePage.someAction();
  });
});
```

Rules:
- Import `test` / `expect` only from `main/utils/base.fixture`
- Use `pm` (or `pmWithCookies`) — do not instantiate page classes in specs
- No locator definitions or long `page.getBy*` chains in specs
- Prefer `test.step` inside page methods (already used in-repo), not only in specs
- Name files `*.spec.ts` under `tests/`

## SmartKargo spec pattern

For SmartKargo tests, follow this pattern:

```typescript
import { test } from "main/utils/base.fixture";
import { qase } from 'playwright-qase-reporter';

test.describe.configure({ mode: 'serial' });
test.describe("<MenuArea> Page test suite", {
  annotation: { type: 'category', description: 'report' },
}, () => {
  test.setTimeout(180_000);

  test.beforeEach(async ({ pm, page }) => {
    await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
  });

  test(qase(<caseId>, "<case title>"), { tag: '@regression' }, async ({ pm, page }) => {
    await test.step('go to SmartKargo log-in page:', async () => {
      await page.goto('https://cebutesting.smartkargo.com/Login.aspx');
      await pm.screenshot.captureStep(pm.thisPage, 'go to SmartKargo log-in page', { fullPage: true });
    });

    await test.step('input test credentials and login', async () => {
      await pm.login.input_username();
      await pm.login.input_password();
      await pm.login.click_login_button();
      await pm.screenshot.captureStep(pm.thisPage, 'input test credentials and login', { fullPage: true });
    });

    await test.step(`Click on Menu item: "<menu path>"`, async () => {
      await pm.navbar.navigateToMenu("<Level1>", "<Level2>", "<Level3>");
      await pm.screenshot.captureStep(pm.thisPage, 'Click on Menu item: "<menu path>"');
    });

    // Add verification steps here
  });
});
```

## Locators (`main/locators/*Locators.ts`)

- Export a const object (e.g. `homePageLocators`, `navLocators`)
- Prefer Playwright-friendly shapes used in-repo:
  - `role` + `text: { name: "…" }` for `getByRole`
  - plain `text` for `getByText`
  - `alttext` for `getByAltText`
  - `xpath` / chained fields only when role/text is insufficient
- One concern per file (page or major area)
- Names describe the element, not the test case id

## Page methods (`main/functions/*Methods.ts`)

- Class per page/area (e.g. `homePage`, `navbarPage`)
- Constructor: bind `Locator`s from the locator module using `page.getByRole` / `getByText` / etc.
- Inject `Page`, and when needed `TestInfo` + shared `ScreenshotHelper` (see `homePage`)
- Actions are `async` methods; wrap meaningful flows in `test.step("…", async () => { … })`
- Use `Logger` for non-sensitive info messages
- Assertions that belong to the page flow may live in the method (match existing style)
- Do not navigate via hard-coded full URLs when `baseURL` / relative paths suffice unless the case requires it

## SmartKargo navigation

- Menu navigation: `await pm.navbar.navigateToMenu("Level1", "Level2", "Level3");`
- URL verification: `await pm.navbar.verify_page_url("https://cebutesting.smartkargo.com/PageName.aspx");`
- The `navigateToMenu` method handles hover for intermediate items and click for the last item.

## PageManager (`main/utils/page.manager.ts`)

When adding a **new** page class:

1. Import the class
2. Add private cache field
3. Add public lazy getter (same pattern as `home`, `navbar`, `privacyCookie`)
4. Share one `ScreenshotHelper` instance when the page needs screenshots

## New area recipe (create-if-missing)

1. `main/locators/<area>Locators.ts`
2. `main/functions/<area>Methods.ts`
3. Getter on `PageManager`
4. `tests/<area>.spec.ts` or `tests/<area>PageTest.spec.ts` (or extend an existing suite file if the case belongs there)

## Naming

| Kind | Pattern |
|------|---------|
| Locator module | `<area>Locators.ts` / `export const <area>Locators` |
| Page class file | `<area>Methods.ts` |
| Page class name | match existing style (`homePage`, `navbarPage`) |
| Methods | verb_snake or clear verbs already used (`verify_header`, `fill_lets_connect_form`, `navbar_link`) |
| Spec | `<area>.spec.ts` or `<area>PageTest.spec.ts` consistent with neighbors |

## Qase linkage (optional but preferred)

- Include case id in test title or annotation when automating from Qase, e.g. `SMARTKARGO-241` or annotation metadata, without breaking existing reporters.

## Do not

- Invent a second parallel folder structure
- Put shared locators inside specs
- Bypass `PageManager` for normal tests
- Copy entire page classes to make small variants — extend instead
