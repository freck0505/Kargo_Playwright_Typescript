---
description: Orchestrate automation of a full Qase suite or batch of cases. Analyzes suite, delegates to specialized sub-agents, audits work, and delivers ISTQB summary report.
agent: qa-automation-lead
---

Orchestrate the automation of the given Qase suite or test cases.

Input (suite ID, case IDs, or mixed):
$ARGUMENTS

Defaults:
- Qase project: SMARTKARGO (unless overridden)
- Analyze suite/case titles to route to correct sub-agent
- Audit all completed work
- Deliver ISTQB-style summary report

Routing logic:
- "Navigation" / "Menu" in title → ui-navigation-automator
- "Functional" / "Core" in title → functional-test-automator (when available)
- Mixed/unclear → analyze case details to classify

If the case ID or suite ID is missing, ask for it. Follow your full workflow: Discovery → Classification → Planning → Delegation → Auditing → Summary Report.
