---
name: playwright-no-duplicate-assets
description: Prevents duplicate Playwright locators and page methods; requires create-if-missing when no reusable asset exists. Use when adding locators, functions, page objects, or automating Qase cases into POM.
---

# No-duplicate locators & functions (create if missing)

## Goal
Never add a second locator or method for the same UI element or action. When nothing reusable exists, **create** a proper new asset.

This is a two-phase gate. Both phases are mandatory before writing specs.

## Phase A — Search (mandatory)

Search before any new symbol:

| Area | Paths |
|------|--------|
| Locators | `main/locators/**/*.ts` |
| Methods / page objects | `main/functions/**/*.ts` |
| Wiring | `main/utils/page.manager.ts` |
| Specs | `tests/**/*.spec.ts` |

Search by:
- Semantic name (e.g. `loginButton`, `submit`, `email`)
- Visible text / role / label / placeholder
- Selector strings (CSS, xpath, test id)
- Method names and flow verbs (`navigate`, `fill_`, `verify_`, `handle`)

Use grep/glob/read. Do not skip the scan because the case “looks new.”

## Phase B — Decide

| Result | Action |
|--------|--------|
| Exact or clear semantic match | **Reuse** — call existing locator binding / method |
| Partial match (same area, incomplete API) | **Extend** the existing locator object or class method |
| No match after search | **Create** new locator and/or method (required) |
| New page/area with no files | **Create** `*Locators.ts` + `*Methods.ts` + `PageManager` getter |

### Create-if-missing (required when no match)

When Phase B = create:

1. Add locator definition(s) in the correct `main/locators/<area>Locators.ts` (create the file if absent).
2. Bind locator(s) on the page class in `main/functions/<area>Methods.ts` (create class/file if absent).
3. Add `async` method(s) that implement the flow (`test.step`, logging patterns used in-repo).
4. If a new page object was added: register a lazy getter on `main/utils/page.manager.ts`.
5. Spec only calls `pm.<page>.<method>` — **never** define locators inside `*.spec.ts`.
6. Prefer validating new selectors with Playwright MCP before finalizing.

### Forbidden
- Duplicate locator for the same element under a new key/name
- Duplicate method that only renames an existing action
- Locators or raw `page.getBy*` chains left only in the spec
- TODO / empty methods for steps required by the Qase case
- Skipping creation because “reuse only” — missing assets must be created

### Allowed efficiency moves
- Compose existing methods from a new higher-level method
- Extend an existing method with optional params instead of a near-copy
- Share modal helpers under `main/functions/modals/`

## Output line (required in agent report)

```text
Reused: <list or none> | Extended: <list or none> | Created: <list or none>
```

## Completeness
Automation is incomplete until every required Qase step is covered by a reusable or newly created locator/method path. Create missing pieces; do not stop at the reuse scan.
