const { body, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const validateRegister = [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('name').notEmpty().withMessage('Name is required'),
    validateRequest
];

const validateLogin = [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
    validateRequest
];

const validateTransaction = [
    body('fromAccount').notEmpty().withMessage('fromAccount is required'),
    body('toAccount').notEmpty().withMessage('toAccount is required'),
    body('amount').isNumeric().withMessage('amount must be a number').custom(value => value > 0).withMessage('amount must be greater than 0'),
    body('idempotencyKey').notEmpty().withMessage('idempotencyKey is required'),
    validateRequest
];

const validateInitialFunds = [
    body('toAccount').notEmpty().withMessage('toAccount is required'),
    body('amount').isNumeric().withMessage('amount must be a number').custom(value => value > 0).withMessage('amount must be greater than 0'),
    body('idempotencyKey').notEmpty().withMessage('idempotencyKey is required'),
    validateRequest
];

module.exports = {
    validateRegister,
    validateLogin,
    validateTransaction,
    validateInitialFunds
};
