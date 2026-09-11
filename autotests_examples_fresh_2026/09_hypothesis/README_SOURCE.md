# Hypothesis — property-based testing

Repository: https://github.com/HypothesisWorks/hypothesis

Hypothesis is a property-based testing library for Python. Tests are written as properties and the engine generates many inputs, including edge cases; failing cases are minimized to simpler examples.

Real source example:
```python
from hypothesis import given, strategies as st

@given(st.lists(st.integers()))
def test_matches_builtin(ls):
    assert sorted(ls) == my_sort(ls)
```

The project uses automated input generation and shrinking to find compact counterexamples.

Source:
https://github.com/HypothesisWorks/hypothesis
