// Import the expense-related controller functions
const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expenseController");
// Import the income-related controller functions
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/incomeController");

// Import the express router
const router = require("express").Router();

// Define the routes for handling income and expense operations
router
  // Route for adding a new income
  .post("/add-income", addIncome)
  // Route for adding a new expense
  .post("/add-expense", addExpense)
  // Route for fetching all expenses
  .get("/get-expenses", getExpense)
  // Route for deleting an expense by ID
  .delete("/delete-expense/:id", deleteExpense);

// Export the configured router
module.exports = router;
