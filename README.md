# bitespeed_assignment
# URL Shortener API

This is a simple API to shorten long URLs. It provides two endpoints: one for shortening a URL (`POST`) and one for retrieving the original long URL (`GET`).

## Endpoints

### `POST /url`

**Description**:  
This endpoint accepts a long URL and returns a shortened version.

**Request Body**:
```json
{
  "long_url": "https://example.com/some-long-url"
}
