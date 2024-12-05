Here's the information in a text message format:

---

**URL Shortener API**

This API has two endpoints for working with URLs:

1. **POST /url**  
   - **Description**: Accepts a long URL and returns a shortened version.  
   - **Request Body** (Example):
     ```json
     {
       "long_url": "https://example.com/some-long-url"
     }
     ```
   - **Response**:
     ```json
     {
       "short_url": "https://short.ly/abc123"
     }
     ```

2. **GET /url**  
   - **Description**: Accepts a shortened URL and returns the original long URL.  
   - **Request Parameter**:  
     - `short_url`: The shortened URL (e.g., `https://short.ly/abc123`).  
   - **Response**:
     ```json
     {
       "long_url": "https://example.com/some-long-url"
     }
     ```

**Example Usage**:  
- **POST** `/url` with a JSON body to shorten a URL.  
- **GET** `/url?short_url=https://short.ly/abc123` to retrieve the original URL.

---

This should cover how the endpoints work in a simplified text format!
