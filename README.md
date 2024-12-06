Here's the information in a text message format:

---

**URL Shortener API**

This API has two endpoints for working with URLs:

1. **POST /url**  
   - **Description**: Accepts a long URL and returns a shortened version.  
   - **Request Body** (Example):
     ```json
     {
       "longUrl": "https://example.com/some-long-url"
     }
     ```
   - **Response**:
     ```json
       {
       "message": "Short URL created!"
      }
     ```

2. **GET /url**  
   - **Description**: Accepts a shortened URL and returns the original long URL.  
   - **Request Parameter**:  
     - **Request Body** (Example):
     ```json
     {
       "longUrl": "https://example.com/some-long-url"
     }
     ```
   - **Response**:
     ```json
     {
       "longUrl": "https://example.com/some-long-url",
     "shortUrl": "aUnp"

     }
     ```

**Example Usage**:  
- **POST** `/url` with a JSON body to shorten a URL.  
- **GET** `/url?short_url=https://short.ly/abc123` to retrieve the original URL.

---

This should cover how the endpoints work in a simplified text format!


---

**URL Shortener API**


3. **GET /:shortUrl**  
   - **Description**: Redirects to the original URL associated with the `shortUrl`.  
   - **Path Parameter**:  
     - `shortUrl` (Example: `/abcd`)  
   - **If the `shortUrl` exists**:  
     - Redirects to the original URL (e.g., `https://example.com`).  
   - **If the `shortUrl` does not exist**:  
     **Response**:  
     ```json
     {
       "message": "Short URL not found"
     }
     ```

**Example Usage**:  
- **POST** `/url` with a JSON body to generate a shortened URL.  
- **GET** `/abcd` to redirect to the original URL.

--- 
