# AI Browser Tester — source snapshot

Repository: https://github.com/Ryn-Mic/ai-browser-tester
Source SHA: f634abaf60c8447f0b8a490ff628db3b61faf652

The project describes an MCP-first browser-control and automated-testing toolkit for Codex, Claude Code, and other MCP clients.

Core loop:
snapshot -> ref -> action -> result -> snapshot -> assertion

Architecture:
MCP-shaped tool call / bridge -> Node bridge (policy + audit) -> WebSocket JSON-RPC -> MV3 extension -> content script -> page DOM -> structured results / audit log.

Real commands documented by the project:
```bash
pnpm install
pnpm build
pnpm test
pnpm test:e2e
pnpm test:agent
pnpm preflight:mcp-live
pnpm smoke:npm
pnpm package:mcp
pnpm package:extension
pnpm release:gate
```

Production-oriented safety controls described in the source include default-deny policy, explicit allowlists, ref-only actions, origin checks, pairing tokens, redaction, audit logging and fail-closed behavior.

Source:
https://github.com/Ryn-Mic/ai-browser-tester/blob/main/README.md
