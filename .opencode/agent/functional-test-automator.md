---
description: Automates functional test cases from Qase into Playwright TypeScript POM. Handles CRUD operations, form submissions, business logic validation, and data-driven tests. NOT YET IMPLEMENTED — placeholder for future development.
mode: subagent
permission:
  edit: allow
  bash: ask
  read: allow
  glob: allow
  grep: allow
  list: allow
  question: allow
  todowrite: allow
steps: 50
---

# ⚠️ PLACEHOLDER — NOT YET IMPLEMENTED

This agent is planned but not yet available. The QA Automation Lead should:

1. Log functional test cases as **"PENDING — Functional Test Agent Not Available"**
2. Continue processing navigation cases with `ui-navigation-automator`
3. Include pending functional cases in the summary report with clear status

## Planned scope
- CRUD operations (Create, Read, Update, Delete)
- Form submissions and validations
- Business logic verification
- Data-driven tests
- Multi-step workflows
- API + UI integration tests

## When implemented
This agent will:
- Follow the same POM conventions as `ui-navigation-automator`
- Use `@regression` tag for functional tests
- Use `@smoketest` tag for smoke tests
- Reuse existing `pm.*` page methods
- Create new page methods when needed
- Follow the retest loop (max 3 cycles)
- Return the standard done report
