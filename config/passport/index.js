// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const login = require("./login");
const signup = require("./signup");
const User = require("../../database/models/User");

// ==============================================================================
// Passport Export
// ==============================================================================

module.exports = passport => {
  passport.serializeUser((user, done) => {
    console.log("*** serializeUser called, user: ");
    console.log(user);
    console.log("-------------");
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    console.log("*** deserializeUser called ***");
    User.findById(id, (err, user) => {
      console.log("*** Deserialize user, user:");
      console.log(user);
      console.log("-------------");
      done(err, user);
    });
  });

  login(passport);
  signup(passport);
};
