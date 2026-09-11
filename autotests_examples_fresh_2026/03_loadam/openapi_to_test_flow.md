# Real-data flow

Input:
OpenAPI 3.x specification

Outputs:
1. k6 smoke/load rig
2. Schemathesis pytest project
3. MCP server (stdio + HTTP)
4. spec-vs-live drift report
5. local run/session archive
6. single-file HTML report

The project explicitly uses an intermediate representation and resource-graph inference.

This is useful for portfolio automation because the same source contract drives several independent test surfaces.
