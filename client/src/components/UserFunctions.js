import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,

      email: newUser.email,
      mobile: newUser.mobile,
      password: newUser.password,
      address: newUser.address,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })

    .then((response) => {
      console.log(response.data);
      if (typeof response.data === "string") {
        localStorage.setItem("usertoken", response.data);
        return response.data;
      } else {
        console.log("password incorrect");
        //
         alert("Invalid email or passord");
      }
    });
};

export const getProfile = (user) => {
  return axios
    .get("users/profile", {})
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
