// Import the mongoose library
const mongoose = require("mongoose");

// Define an async function to connect to the database
const db = async () => {
  try {
    // Disable strict query mode in mongoose
    mongoose.set("strictQuery", false);
    // Connect to the MongoDB database using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URL);
    // Log a message to the console if the connection is successful
    console.log("DB Connection Successful!");
  } catch (error) {
    // Log an error message to the console if the connection fails
    console.log("DB Connection Error");
  }
};

// Export the db function for use in other parts of the application
module.exports = { db };
