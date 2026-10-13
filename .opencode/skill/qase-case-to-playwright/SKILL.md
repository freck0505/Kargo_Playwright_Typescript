---
name: qase-case-to-playwright
description: End-to-end workflow to automate a Qase test case into Playwright TypeScript POM. Use when Qase case ID, automate from Qase, write Playwright from test case, CCRM case, or /automate-qase.
---

# Qase case → Playwright automation

## When to use
Use for turning a Qase TestOps case into runnable Playwright code in this repo.

## Defaults
- Qase project code: **SMARTKARGO** (override only if the user specifies another)
- Max fix/retest cycles after implementation: **3**

## Also load
1. `playwright-no-duplicate-assets`
2. `playwright-pom-conventions`
3. `playwright-secure-efficient`

## Workflow

### 1. Intake
- Require a numeric Qase case ID (ask if missing).
- Use project SMARTKARGO unless the user names another code.

### 2. Fetch
- Qase MCP: `get_case` with `code` + `id`.
- Capture title, description, preconditions, steps (action / data / expected), suite, tags.
- **Identify the first menu item** from the test steps to determine spec file routing.

### 3. Clarify
- Ask before coding when steps, data, environment, or expected results are incomplete.
- Optional: Playwright MCP to inspect the live app for ambiguous UI.

### 4. Inventory
- Search existing locators, methods, and specs (see `playwright-no-duplicate-assets`).
- Map each Qase step to reuse / extend / create.

### 5. Implement
- Create any **missing** locators and functions required for full coverage.
- Do not ship partial specs with unimplemented steps needed by the case.
- Follow `playwright-pom-conventions` for file placement and patterns.
- Wire new page objects on `PageManager`.
- Keep specs thin (`main/utils/base.fixture`).

### 6. Verify
```text
npx playwright test <spec> --project=GChrome
```
- On fail: fix → re-run (max 3 cycles).
- On pass or after 3 fails: report results.

## Spec file routing (MANDATORY)
Route based on the **first menu item** in the Qase test case steps:

| First menu item | Spec file | Action |
|----------------|-----------|--------|
| Sales | `tests/salesPageTest.spec.ts` | Append to existing |
| Planning | `tests/planningPageTest.spec.ts` | Create if missing |
| Booking | `tests/bookingPageTest.spec.ts` | Create if missing |
| Warehouse | `tests/warehousePageTest.spec.ts` | Create if missing |
| Operations | `tests/operationsPageTest.spec.ts` | Create if missing |
| Other main menu | `tests/<menu>PageTest.spec.ts` | Create if missing |

## Completeness rule
After the reuse scan, **every** step required by the Qase case must be executable via existing or **newly created** locators/methods. Prefer creating assets over leaving gaps.

## Report checklist
- Case ID / title
- Reused | Extended | Created
- Files touched
- Command + pass/fail
- Open questions
