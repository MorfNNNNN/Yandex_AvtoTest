# loadam — source snapshot

Repository: https://github.com/DesmondSanctity/loadam
Source SHA: 58ced361f7029a30ca033d105e6aecd4ec21f3e3

loadam compiles one OpenAPI specification into multiple testing/automation rigs: a k6 load test, a Schemathesis contract suite, an MCP server, and a drift report.

Current README examples:
```bash
npm i -g loadam
loadam init ./openapi.yaml
loadam test ./openapi.yaml --target https://api.example.com
loadam contract ./openapi.yaml --target https://api.example.com
loadam mcp ./openapi.yaml
loadam diff ./openapi.yaml --target https://api.example.com -o drift.md
loadam history
loadam show latest
loadam report latest --open
```

The README states that generated sessions archive the parsed IR, exact spec source, command flags, exit code and produced artifacts locally.

Source:
https://github.com/DesmondSanctity/loadam/blob/main/README.md
