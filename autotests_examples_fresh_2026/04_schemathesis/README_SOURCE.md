# Schemathesis — source snapshot

Repository: https://github.com/schemathesis/schemathesis
Source SHA: 4433d725270a09d142c5b505077029a2802586ab

Schemathesis automatically generates many test cases from OpenAPI or GraphQL schemas and targets edge cases such as server errors, schema violations, validation bypasses, integration mismatches and stateful workflow bugs.

Real example from the README:
```python
import schemathesis

schema = schemathesis.openapi.from_url("https://your-api.com/openapi.json")

@schema.parametrize()
def test_api(case):
    case.call_and_validate()

APIWorkflow = schema.as_state_machine()
TestAPI = APIWorkflow.TestCase
```

CLI:
```bash
uv pip install schemathesis
schemathesis run https://your-api.com/openapi.json
```

CI example:
```yaml
- uses: schemathesis/action@v2
  with:
    schema: "https://your-api.com/openapi.json"
```

Source:
https://github.com/schemathesis/schemathesis/blob/master/README.md
