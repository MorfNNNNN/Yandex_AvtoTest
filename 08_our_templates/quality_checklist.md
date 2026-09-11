# Autotest quality checklist

- deterministic test data and isolated state
- explicit Arrange / Act / Assert structure
- stable selectors (role/label/accessibility IDs where possible)
- negative cases and boundary values
- authentication/authorization matrix for APIs
- parametrization instead of copy-paste test bodies
- fixtures for setup/teardown
- useful logs and screenshots/traces on failure
- parallel-safe tests
- CI execution on pull requests
- artifacts/reports retained after failures
- retries only for known infrastructure flakiness, not to hide product defects
