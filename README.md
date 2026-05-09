# 💰 Wallet API (Personal Expense Tracker)

A minimalist RESTful API built with Node.js and Express.js to help users manage their daily expenses and incomes. This project serves as a lightweight backend for personal finance tracking.

## 🚀 Features
- **List Expenses:** Fetch all recorded transactions.
- **Add Transactions:** Record new expenses or incomes with description, amount, and category.
- **Delete Records:** Remove transactions securely using their unique ID.
- **Balance Overview:** Get real-time data on your total balance and the number of transactions.

## 🛠 Tech Stack
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast and minimalist web framework for Node.js.
- **JavaScript (ES6+)**: Programming language.

## 📦 Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/oykunazergelen/wallet-api.git](https://github.com/oykunazergelen/wallet-api.git)
   cd wallet-api

2. **Install dependencies:**
    ```bash
    npm install

3. **Start the server:**
    ```bash
    node app.js

    The API will be running at http://localhost:3000 by default.

## 📍 API Endpoints

* **GET `/expenses`**
    * Returns a list of all transactions in the system.
* **POST `/add`**
    * Adds a new transaction (income or expense) to the record.
* **DELETE `/delete/:id`**
    * Deletes a specific transaction using its unique ID.
* **GET `/balance`**
    * Calculates and returns the total balance and a summary of transactions.

## Example Request Body (POST /add)
    ```JSON
    {
  "description": "Coffee",
  "amount": -80,
  "category": "Food & Drink"
    }   

📝 Roadmap
-[ ] Implement a database (MongoDB or PostgreSQL) for persistent storage.

-[ ] Add User Authentication (JWT) for private accounts.

-[ ] Filter transactions by date or category.

## 👤 Author

**Öykü Naz Ergelen**
* GitHub: [@oykunazergelen](https://github.com/oykunazergelen)
* LinkedIn: [Öykü Naz Ergelen](https://www.linkedin.com/in/öykü-naz-ergelen-784960334/)
---
