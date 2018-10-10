// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const bCrypt = require("bcrypt-nodejs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../database/models/User");

// ==============================================================================
// PassPort Signup Strategy
// ==============================================================================

module.exports = passport => {
  const createHash = password => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

  passport.use(
    "signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        findOrCreateUser = () => {
          User.findOne({ username: username }, (err, user) => {
            if (err) {
              console.log("Error in Signup: " + err);
              return done(err);
            }

            if (user) {
              console.log("User already exists");
              return done(null, false);
            } else {
              const newUser = new User();
              const hashPassword = createHash(password);

              newUser.username = username;
              newUser.password = hashPassword;

              newUser.save(err => {
                if (err) {
                  console.log(`Error in saving user: ${err}`);
                  throw err;
                }

                return done(null, newUser);
              });
            }
          });
        };
        process.nextTick(findOrCreateUser);
      }
    )
  );
};
