import axios from "axios";

export default {
  signupUser: userData => {
    return axios.post("/api/users/signup", userData);
  },
  loginUser: userData => {
    return axios.put("/api/users/login", userData);
  },
  logoutUser: () => {
    return axios.get("/api/users/logout");
  }
};
