---
description: Automate a Qase test case into Playwright POM (clarify, reuse or create assets, write spec, retest up to 3 times).
agent: ui-navigation-automator
---

Automate the given Qase test case into this repository's Playwright TypeScript POM structure.

Case ID and any extra instructions:
$ARGUMENTS

Defaults:
- Qase project: CCRM (unless overridden in the arguments)
- Reuse existing locators/functions when they match
- Create new locators/functions (and PageManager wiring) when they do not exist
- Specs only orchestrate via `pm.*`
- Retest and fix up to 3 cycles

If the case ID is missing, ask for it. Follow your full workflow and load the supporting skills.
