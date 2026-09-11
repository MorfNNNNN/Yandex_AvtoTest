// Exact example from grafana/k6
// Repository: https://github.com/grafana/k6
// Path: examples/http_get.js
// SHA: 029fa72169a5148f591364d1832bfb13e87e8807

import http from 'k6/http';

export default function () {
  http.get('https://quickpizza.grafana.com');
};
