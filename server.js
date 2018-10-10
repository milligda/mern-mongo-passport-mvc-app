// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const mongoStore = require("connect-mongo")(session);
const dbConnection = require("./database");
const routes = require("./routes");

// ==============================================================================
// Express & Middleware
// ==============================================================================

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ==============================================================================
// Passport
// ==============================================================================

app.use(
  session({
    secret: "ur-secret-key",
    store: new mongoStore({ mongooseConnection: dbConnection }),
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ==============================================================================
// Routing (API and React Views)
// ==============================================================================

app.use(routes);

// ==============================================================================
// Initialize Passport Strategy
// ==============================================================================

require("./config/passport")(passport);

// ==============================================================================
// Server
// ==============================================================================

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
