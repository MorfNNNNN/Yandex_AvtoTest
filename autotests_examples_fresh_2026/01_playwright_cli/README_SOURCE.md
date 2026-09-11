# Microsoft Playwright CLI — source snapshot

Repository: https://github.com/microsoft/playwright-cli
Source SHA: f634abaf60c8447f0b8a490ff628db3b61faf652

Extracted from the repository README:
Playwright CLI with SKILLS.

CLI is positioned for coding agents because commands are token-efficient and avoid loading large tool schemas and verbose accessibility trees into the model context.

Install:
```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Example:
```bash
playwright-cli open https://demo.playwright.dev/todomvc/ --headed
playwright-cli type "Buy groceries"
playwright-cli press Enter
playwright-cli screenshot
```

Useful automation capabilities include browser sessions, persistent storage, snapshots, locators, network routing, tracing, recording, video, screenshots, and code generation.
