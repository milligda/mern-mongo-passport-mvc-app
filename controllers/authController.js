// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const db = require("../database/models");

// ==============================================================================
// AuthController Methods
// ==============================================================================

module.exports = {
  signup: (req, res) => {
    console.log("signed up", req.user);
    const userInfo = {
      username: req.user.username,
      id: req.user._id
    };
    res.send(userInfo);
  },
  login: (req, res) => {
    console.log("logged in", req.user);
    const userInfo = {
      username: req.user.username,
      id: req.user._id
    };
    res.send(userInfo);
  },
  logout: (req, res) => {
    if (req.user) {
      let userId = req.user._id;
      req.logout();
      res.json({ message: "logging out", userId: userId });
    } else {
      res.send({ message: "no user to logout" });
    }
  }
};
