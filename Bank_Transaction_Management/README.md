<div align="center">
  <h1>🏦 Bank Transaction Management API</h1>
  <p><strong>A secure, scalable, and production-ready RESTful backend for financial operations.</strong></p>
</div>

<br />

## 📖 Overview

The **Bank Transaction Management API** is a high-performance backend system built with Node.js and Express. It provides a robust foundation for modern banking applications, managing user authentication, multiple bank accounts, immutable ledger entries, and atomic financial transactions with guaranteed data integrity.

---

## ✨ Core Capabilities

- **🔐 Advanced Security & Auth:** 
  - JWT-based authentication with token blacklisting.
  - Hardened HTTP headers via `helmet`.
  - Rate-limiting middleware to prevent brute-force and DDoS attacks.
- **⚡ ACID-Compliant Transactions:** 
  - Utilizes MongoDB transactions with automatic rollbacks.
  - Guarantees zero financial discrepancy during money transfers.
- **🛡️ Strict Input Validation:** 
  - Comprehensive schema validation utilizing `express-validator`.
  - Protects against invalid data, negative amounts, and malformed requests.
- **📈 Data Management:**
  - Double-entry ledger system mapping every DEBIT and CREDIT securely.
  - Paginated and date-filtered endpoints for optimized transaction history retrieval.

---

## 🛠️ Architecture & Tech Stack

| Category | Technologies Used |
|----------|------------------|
| **Core Runtime** | Node.js, Express.js |
| **Database & ORM** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs |
| **Security Validation** | express-validator, Helmet, express-rate-limit |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local environment:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local instance or Atlas cluster URI)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Bank_Transaction_Management
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and define the following variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/Bank_Transaction_Management
   JWT_SECRET=your_secure_jwt_secret_key
   ```

4. **Initialize the Server:**
   ```bash
   # For development with auto-reload
   npm run dev

   # For standard execution
   npm start
   ```
   *The server will boot up and establish a connection to the MongoDB instance.*

---

## 📚 API Reference Overview

The API exposes several RESTful endpoints grouped by functionality. All secure endpoints require a Bearer JWT Token in the `Authorization` header.

### Authentication (`/api/auth`)
- `POST /register` - Register a new user profile.
- `POST /login` - Authenticate user and retrieve JWT.
- `POST /logout` - Invalidate current session token.

### Accounts (`/api/accounts`)
- `POST /` - Provision a new bank account for the user.
- `GET /` - Retrieve all accounts linked to the user profile.
- `GET /balance/:accountId` - Fetch the real-time balance of an account.

### Transactions (`/api/transactions`)
- `POST /` - Initiate a secure, atomic money transfer between accounts.
- `GET /` - Retrieve paginated transaction history with optional date filtering.

> **Note:** A complete, import-ready `Postman Collection` is included in the root directory (`Bank_Transaction_Management_Postman_Collection.json`) for seamless testing of all endpoints.

---

## 📝 License

This project is licensed under the ISC License.

---
*Developed and maintained by VICTUS.*
