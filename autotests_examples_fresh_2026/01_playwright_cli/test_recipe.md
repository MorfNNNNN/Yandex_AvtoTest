# Real test/agent recipe

This is a faithful working recipe derived from the current Playwright CLI README.

```text
Goal: exercise TodoMVC through an agent-driven browser loop.

1. playwright-cli open https://demo.playwright.dev/todomvc/ --headed
2. playwright-cli snapshot
3. playwright-cli type "Buy groceries"
4. playwright-cli press Enter
5. playwright-cli check <todo-checkbox-ref>
6. playwright-cli screenshot
7. playwright-cli recording-start
8. reproduce a bug / interaction
9. playwright-cli recording-stop
10. inspect generated Playwright actions
```

Source:
https://github.com/microsoft/playwright-cli/blob/main/README.md
