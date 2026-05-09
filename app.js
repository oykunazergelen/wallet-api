const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Data storage (in-RAM)
let expenses = [
    { id: 1, description: "Starting balance", amount: 0 , category: "Initial" }
];

// Get all expenses
app.get('/expenses', (req, res) => {
    res.json(expenses);
});

// Add a new expense or income
app.post('/add', (req, res) => {
    const newExpense = {
        id: expenses.length + 1,
        description: req.body.description,
        amount: req.body.amount,
        category: req.body.category
    };
    expenses.push(newExpense);
    res.send(`Expense added: ${newExpense.description}`);
});

//Deleting an expense
app.delete('/delete/:id', (req, res) => {
    const deletionID = parseInt(req.params.id);

    const oldNumber = expenses.length;
    expenses = expenses.filter(e => e.id !== deletionID);

    if (expenses.length < oldNumber) {
        res.send(`The expense with the ID ${deletionID} is succesfully removed.`);
    } else {
        res.status(404).send("There is no expense with that ID, please try again.");
    }
});

// Calculate total balance
app.get('/balance', (req, res) => {
   let balance = 0;

   // Add up all expenses and incomes using loops
    for (let i = 0; i < expenses.length; i++) {
        balance += expenses[i].amount;
    }

    const balanceMessage = `Current balance: ${balance}`;

    res.json({
        balance: balance,
        message: balanceMessage,
        expenseNumber: expenses.length
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
