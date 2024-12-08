// VERSION 1

// Utility function to handle asynchronous errors in route handlers
const asyncHandler = (requestHandler) => {
    // Wrap the request handler in a promise
    Promise.resolve(
        // Call the asynchronous request handler with req, res, and next
        requestHandler(req, res, next)
    ).catch(
        // Catch any errors and pass them to the next middleware
        (error) => next(error)
    )
}

// Export the utility function to use in other files
export { asyncHandler }


// VERSION 2

// Utility function to handle asynchronous errors in route handlers

/*
const asyncHandler = (fn) => 
    // Return a new asynchronous function that wraps the original function
    async (req, res, next) => {
        try {
            // Try to execute the asynchronous function
            await fn(req, res, next)
        } catch (error) {
            // If an error occurs, send a JSON response with error details
            res.status(error.code || 500).json({
                success: false, // Indicate failure
                message: error.message // Include the error message
            })
        }
    }

*/