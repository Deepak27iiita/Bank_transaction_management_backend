const { Router } = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const transactionController = require("../controllers/transaction.controller")
const validationMiddleware = require("../middleware/validation.middleware")
const transactionRoutes = Router();

/**
 * - POST /api/transactions/
 * - Create a new transaction
 */

transactionRoutes.post("/", authMiddleware.authMiddleware, validationMiddleware.validateTransaction, transactionController.createTransaction)

/**
 * - GET /api/transactions/
 * - Fetch transactions with pagination and date filter
 */
transactionRoutes.get("/", authMiddleware.authMiddleware, transactionController.getTransactions)


/**
 * - POST /api/transactions/system/initial-funds
 * - Create initial funds transaction from system user
 */
transactionRoutes.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, validationMiddleware.validateInitialFunds, transactionController.createInitialFundsTransaction)

module.exports = transactionRoutes;