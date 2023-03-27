// Import the ExpenseModel schema
const ExpenseSchema = require("../models/ExpenseModel");

// Add a new expense to the database
exports.addExpense = async (req, res) => {
  // Destructure the request body to get the expense data
  const { title, amount, category, description, date } = req.body;

  // Create a new ExpenseSchema object with the given data
  const expense = new ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // Validate the required fields are provided
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    // Validate the amount is a positive number
    if (amount <= 0 || typeof amount !== "number") {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }
    // Save the new expense to the database
    await expense.save();
    // Respond with a success message
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    // Respond with an error message in case of server error
    res.status(500).json({ message: "Server Error" });
  }
};

// Retrieve all expenses from the database
exports.getExpense = async (req, res) => {
  try {
    // Fetch all expenses and sort them by their creation date (descending order)
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    // Respond with the fetched expenses
    res.status(200).json(expenses);
  } catch (error) {
    // Respond with an error message in case of server error
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an expense from the database
exports.deleteExpense = async (req, res) => {
  // Get the expense ID from the request parameters
  const { id } = req.params;
  // Find and delete the expense by ID
  try {
    await ExpenseSchema.findByIdAndDelete(id);
    // Respond with a success message
    res.status(200).json({ message: "Expense Deleted" });
  } catch (err) {
    // Respond with an error message in case of server error
    res.status(500).json({ message: "Server Error" });
  }
};
