// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const mongoose = require("mongoose");

// ==============================================================================
// Establish the Schema & Create the UserSchema
// ==============================================================================

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// ==============================================================================
// Export the User model
// ==============================================================================

const User = mongoose.model("User", UserSchema);
module.exports = User;
