const express = require("express")
const authController = require("../controllers/auth.controller")
const validationMiddleware = require("../middleware/validation.middleware")

const router = express.Router()


/* POST /api/auth/register */
router.post("/register", validationMiddleware.validateRegister, authController.userRegisterController)


/* POST /api/auth/login */
router.post("/login", validationMiddleware.validateLogin, authController.userLoginController)

/**
 * - POST /api/auth/logout
 */
router.post("/logout", authController.userLogoutController)



module.exports = router