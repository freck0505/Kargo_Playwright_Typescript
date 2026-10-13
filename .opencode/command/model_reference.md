---
description: Output the QA Engineer Model Reference Guide (OpenCode Go) in table format.
agent: build
---

You are a QA reference assistant. Output the OpenCode Go model reference guide
below EXACTLY in the table format given. Do not add, remove, or reword content.
Do not include this instruction — output only the tables and their headings.

# QA Engineer Model Reference Guide
## QASE Test Cases & Playwright TypeScript Automation — OpenCode Go Edition

All models are available through the OpenCode Go subscription ($5 first month, then $10/month).
IDs use the format `opencode-go/<model-id>`. Limits are dollar-based: $12/5h, $30/week, $60/month.
Grok 4.5, Kimi K3, GPT 5.6 Luna are premium-tier and burn quota fast; MiMo, DeepSeek V4 Flash,
MiniMax are the volume options. Run `/models` for the live list.

## Top Recommended Models (Tier 1)

| Model | ID | Tokens (Context / Output) | Requests / Month (est.) | Best For | Use When |
|-------|----|---------------------------|--------------------------|----------|----------|
| Grok 4.5 | `opencode-go/grok-4-5` | 256K / 128K | ~10,000 | Test planning, edge cases, POM, code review, architecture | Initial test plans, complex E2E flows, refactoring suites, thorough coverage reasoning |
| GLM-5.2 / 5.3 | `opencode-go/glm-5-2` or `opencode-go/glm-5-3` | 128K / 64K | ~25,000 | Structured QASE cases, Playwright TS code, fixtures, API helpers | Day-to-day test writing, manual-to-auto conversion, repetitive patterns, best quality/quota balance |
| GPT 5.6 Luna | `opencode-go/gpt-5-6-luna` | 400K / 128K | ~7,500 | Playwright TS code, config files, CI/CD setup, TS types | New Playwright projects, locator strategies, TS interfaces, test environment config |

## Strong Alternatives (Tier 2)

| Model | ID | Tokens (Context / Output) | Requests / Month (est.) | Best For | Use When |
|-------|----|---------------------------|--------------------------|----------|----------|
| Kimi K3 | `opencode-go/kimi-k3` | 256K / 128K | ~9,000 | Long-context suites, multi-file analysis, test data manipulation | Working across many test files, 1M context window needed, large suite analysis |
| DeepSeek V4 Pro | `opencode-go/deepseek-v4-pro` | 128K / 128K | ~40,000 | Large-scale suites, data-driven tests, performance scripts | Big refactors, extensive test matrices, multi-file organization |
| DeepSeek V4 Flash | `opencode-go/deepseek-v4-flash` | 128K / 64K | ~158,250 | Highest-volume bulk generation (~31,650 req/5h) | Bulk test case generation, max output volume per dollar |
| Qwen3.8 Max / 3.7 Max | `opencode-go/qwen3-8-max` or `opencode-go/qwen3-7-max` | 256K / 128K | ~30,000 | Quick tests, simple scripts, test data, docs | Rapid prototyping, simple CRUD, budget operations |
| MiniMax M3 / M2.7 | `opencode-go/minimax-m3` or `opencode-go/minimax-m2-7` | 128K / 16K | ~60,000 | High-volume low-cost generation, repetitive patterns | Budget bulk operations, quota efficiency |

## Cost-Effective Alternatives

| Model | ID | Tokens (Context / Output) | Requests / Month (est.) | Best For |
|-------|----|---------------------------|--------------------------|----------|
| MiMo-V2.5 / V2.5-Pro | `opencode-go/mimo-v2-5` or `opencode-go/mimo-v2-5-pro` | 256K / 16K | ~100,000 | Cheapest volume work, bulk data fixtures |
| DeepSeek V4 Flash | `opencode-go/deepseek-v4-flash` | 128K / 64K | ~158,250 | Highest request volume on Go |
| Qwen3.7 Plus / 3.6 Plus | `opencode-go/qwen3-7-plus` or `opencode-go/qwen3-6-plus` | 128K / 64K | ~50,000 | Simple tests, cost-conscious generation |
| Kimi K2.7 Code / K2.6 | `opencode-go/kimi-k2-7-code` or `opencode-go/kimi-k2-6` | 256K / 128K | ~20,000 | Cheaper Kimi tier for code-focused tests |
| GLM-5.1 | `opencode-go/glm-5-1` | 128K / 32K | ~30,000 | Standard QASE cases |
| Hy3 | `opencode-go/hy3` | 128K / 32K | ~15,000 | Experimental / light usage |
| Muse Spark 1.2 Contributor | `opencode-go/muse-spark-1-2` | 32K / 8K | ~40,000 | Discounted tokens (trains Meta models; limited regions) |

> Token figures are per-model-family estimates, not official specs.
> Requests/month are estimates: monthly budget ($60) ≈ 5× the $12/5h window, so req/month ≈ 5 × req/5h (DeepSeek V4 Flash: 31,650 × 5 ≈ 158,250).

## QA Task Recommendations

### QASE Test Case Writing
| Task | Recommended Model | Why |
|------|------------------|-----|
| Test case planning | Grok 4.5 | Strongest reasoning for edge cases |
| Detailed test steps | GLM-5.2/5.3 | LMArena #1 code, balanced quality/quota |
| Bulk test generation | DeepSeek V4 Flash | Highest output volume per dollar |
| Test data creation | MiMo-V2.5 / Qwen3.8 Max | Fast, cost-effective |

### Playwright TypeScript Automation
| Task | Recommended Model | Why |
|------|------------------|-----|
| Page Object creation | GPT 5.6 Luna | Strong on hard code tasks |
| Locator strategies | GLM-5.2/5.3 | Understands web selectors well |
| Test config setup | GPT 5.6 Luna | Best for configuration files |
| API test helpers | GLM-5.2/5.3 | Clean code generation |
| Fixtures & hooks | GLM-5.2/5.3 or GPT 5.6 Luna | Good with Playwright APIs |

## Quick Reference Commands
| Task | Model | Command |
|------|-------|---------|
| Complex test planning | Grok 4.5 | `/models opencode-go/grok-4-5` |
| Day-to-day QASE/Playwright | GLM-5.2 | `/models opencode-go/glm-5-2` |
| Playwright code | GPT 5.6 Luna | `/models opencode-go/gpt-5-6-luna` |
| Bulk generation | DeepSeek V4 Flash | `/models opencode-go/deepseek-v4-flash` |

## Tips
1. Use Grok 4.5 for test planning and edge case discovery — sparingly (premium tier).
2. Use GPT 5.6 Luna for TypeScript-heavy Playwright code — sparingly.
3. Use GLM-5.2/5.3 for daily test case writing (best quality/quota balance).
4. Use MiMo / Qwen / MiniMax for quick, simple test generation.
5. Use DeepSeek V4 Flash when you need maximum request volume.