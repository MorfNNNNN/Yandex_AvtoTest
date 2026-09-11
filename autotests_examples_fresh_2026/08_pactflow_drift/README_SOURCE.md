# PactFlow Drift — source snapshot

Repository: https://github.com/pactflow/example-bi-directional-provider-drift
Source SHA: d658015cd9c4ce9bd53e5d4656edbd22484cf4ab

The example is a NodeJS provider using Drift, PactFlow and GitHub Actions for bi-directional contract testing.

The documented pipeline:
1. run Drift to verify API conformance to OpenAPI
2. publish OAS + Drift results as the provider contract
3. run can-i-deploy
4. deploy only when safe
5. record deployment

The repository also demonstrates Drift lifecycle hooks, reusable datasets, in-memory and PostgreSQL state strategies, and JUnit output.

Real commands:
```bash
drift auth login
npm install
make test
make fake_ci
npm run db:start
npm run start:postgres
npm run test:postgres
```

Source:
https://github.com/pactflow/example-bi-directional-provider-drift/blob/main/README.md
