// Import the mongoose library
const mongoose = require("mongoose");

// Create a new mongoose schema for expenses
const ExpenseSchema = new mongoose.Schema(
  {
    // Define the title field with constraints
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    // Define the amount field with constraints
    amount: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    // Define the type field with a default value
    type: {
      type: String,
      default: "expense",
    },
    // Define the date field with constraints
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    // Define the category field with constraints
    category: {
      type: String,
      required: true,
      trim: true,
    },
    // Define the description field with constraints
    description: {
      type: String,
      required: true,
      maxLength: 20,
      trim: true,
    },
  },
  // Enable timestamps to store createdAt and updatedAt fields
  { timestamps: true }
);

// Export the Expense model based on the ExpenseSchema
module.exports = mongoose.model("Expense", ExpenseSchema);
