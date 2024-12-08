// Importing required modules
import express from "express" // Express framework for building backend applications
import cors from "cors" // Middleware to enable Cross-Origin Resource Sharing (CORS)
import cookieParser from "cookie-parser" // Middleware to parse cookies in incoming requests

// Create an Express application instance
const app = express()

// Configure CORS to allow requests from specified origins and include credentials like cookies
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests only from this origin (set via environment variable)
    credentials: true // Allow cookies and other credentials to be sent
}))

// Middleware to parse incoming JSON data with a size limit of 16KB
app.use(express.json({limit: "16kb"}))

// Middleware to parse URL-encoded data (form submissions) with a size limit of 16KB
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// Serve static files (e.g., images, CSS, JavaScript) from the "public" directory
app.use(express.static("public"))

// Middleware to parse cookies from incoming requests
app.use(cookieParser())

// Export the app instance for use in other modules (e.g., to start the server)
export { app }
