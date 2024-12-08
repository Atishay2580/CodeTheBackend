// Define a custom class `apiResponse` to standardize API responses
class apiResponse {
    constructor(
        statusCode,       // HTTP status code for the response (e.g., 200 for OK, 400 for Bad Request)
        data,             // The data to be included in the response (can be null if no data is needed)
        message = "Success" // A default success message if none is provided
    ) {
        this.statusCode = statusCode // Set the HTTP status code
        this.data = data // Attach the response data (e.g., user details, list of items, etc.)
        this.message = message // Include a descriptive message about the response
        this.success = statusCode < 400 // Mark the response as successful if the status code is less than 400
    }
}
