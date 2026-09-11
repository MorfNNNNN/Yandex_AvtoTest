import pytest
import requests

@pytest.mark.parametrize('status', [200, 201])
def test_create_resource(api_url, status):
    response = requests.post(f'{api_url}/resources', json={'name': 'example'}, timeout=10)
    assert response.status_code == status
    body = response.json()
    assert body['name'] == 'example'
    assert body['id']
