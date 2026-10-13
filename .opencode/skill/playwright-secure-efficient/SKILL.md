---
name: playwright-secure-efficient
description: Security and efficiency rules for Playwright TypeScript automation—secrets, PII, stable locators, waits, and flaky-test avoidance. Use when writing, fixing, or reviewing specs, page objects, or fixtures.
---

# Secure & efficient Playwright automation

## Security (mandatory)

- Never hardcode passwords, API tokens, cookies, connection strings, or live PII in source.
- Load secrets from environment variables or existing helpers (`credential.decoder`, `data/*` encoded values).
- Do not commit or edit `.env` with real secrets in chat output.
- Do not log secrets, tokens, full auth headers, or raw passwords (`Logger`, traces titles, soft assert messages).
- Prefer synthetic test data for names/emails/phones in specs.
- Do not write secrets into screenshot filenames, test titles, or Allure/Qase attachments content you author.
- Avoid `page.evaluate` with untrusted strings; do not open unchecked external URLs from fixtures.
- Least privilege: use the smallest test account the case needs.

## Locator efficiency & stability

Prefer (best → acceptable):
1. `getByRole` + accessible name
2. `getByLabel` / `getByPlaceholder` / `getByText` (exact when needed)
3. `getByTestId` if the app exposes test ids
4. Stable CSS only when necessary
5. XPath last resort (as already used sparingly in-repo)

Avoid:
- Positional chains (`nth`, absolute xpath) unless unavoidable and commented by structure
- Copy-pasted duplicate selectors across files
- Locators coupled to volatile CSS animation classes when a role/name exists

## Waits & assertions

- Rely on Playwright auto-waiting and web-first assertions (`expect(locator).toBeVisible()`, etc.).
- Do not use `waitForTimeout` unless there is no better signal and the reason is clear.
- Prefer `waitForLoadState` / locator-scoped expects over fixed sleeps.
- Set timeouts on the assertion/locator that needs them, not globally in random places.

## Test design efficiency

- Reuse `pm` fixtures and existing page methods; do not re-implement flows in the spec.
- Keep specs orchestration-only; put reusable multi-step work in page methods.
- Prefer serial mode only when the product flow truly requires shared state (match existing suite style).
- Avoid order dependence across files when possible.
- One logical behavior per test when practical; shared `beforeEach` for common navigation/cookies.
- Capture screenshots via existing `ScreenshotHelper` / `pm.screenshot` patterns — not ad-hoc dumps of sensitive pages without need.

## Failure fixing

When a test fails:
1. Read the error and failed step
2. Prefer fixing locator stability or missing await over adding sleeps
3. Re-check reuse before adding yet another locator
4. Keep fixes scoped to the case under automation

## Quick checklist before marking done

- [ ] No secrets in diff
- [ ] No duplicate locators/methods
- [ ] Missing assets created properly (locator → method → pm → spec)
- [ ] No unjustified hard waits
- [ ] Spec runs via project command and is understandable by another engineer
