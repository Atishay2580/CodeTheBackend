// Define a custom error class `apiError` that extends the built-in `Error` class
class apiError extends Error {
    constructor(
        statusCode,            // HTTP status code (e.g., 404 for Not Found, 500 for Internal Server Error)
        message = "Something went wrong", // Default error message if none is provided
        errors = [],           // Additional error details (e.g., validation errors)
        stack = ""             // Optional custom stack trace
    ) {
        super(message) // Call the parent `Error` constructor with the message
        this.statusCode = statusCode // Set the HTTP status code
        this.data = null // Placeholder for any additional data (optional)
        this.message = message // Set the error message
        this.success = false // Indicates the operation was unsuccessful
        this.errors = errors // Store any additional error details

        // Configure the stack trace
        if (stack) {
            this.stack = stack // Use the provided custom stack trace
        } else {
            // Automatically capture the stack trace if no custom trace is provided
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// Export the custom error class for use in other files
export { apiError }
