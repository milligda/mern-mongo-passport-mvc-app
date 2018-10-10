// ==============================================================================
// Dependencies & Set Promise Library
// ==============================================================================

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// ==============================================================================
// Create Mongoose Connection
// ==============================================================================

const databaseName = "mernPassportDB";

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/${databaseName}`
);

module.exports = mongoose.connection;
