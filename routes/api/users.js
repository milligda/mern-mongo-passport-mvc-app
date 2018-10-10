// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const router = require("express").Router();
const passport = require("passport");
const authController = require("../../controllers/authController");

// ==============================================================================
// User API Routes
// ==============================================================================

// matches with "/api/users/signup"
router.route("/signup")
  .post(passport.authenticate("signup"), authController.signup);

// matches with "/api/users/login"
router.route("/login")
  .put(passport.authenticate("login"), authController.login);

// matches with "/api/users/logout"
router.route("/logout")
  .get(authController.logout);

// ==============================================================================
// Export Router
// ==============================================================================

module.exports = router;
