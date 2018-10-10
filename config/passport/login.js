// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../database/models/User");

// ==============================================================================
// PassPort Login Strategy
// ==============================================================================

module.exports = passport => {
  const isValidPassword = (user, password) => {
    return bCrypt.compareSync(password, user.password);
  };

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
          if (err) return done(err);

          if (!user) {
            console.log(`${username} not found`);
            return done(null, false);
          }

          if (!isValidPassword(user, password)) {
            console.log("Invalid Password");
            return done(null, false);
          }

          return done(null, user);
        });
      }
    )
  );
};
