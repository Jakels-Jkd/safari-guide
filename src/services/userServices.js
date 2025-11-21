import api from "@/Apis/api.js";
// SIGN UP / REGISTER
export const registerUser = (data) => {
  return api.post("/register", data);
};

// LOGIN
export const loginUser = (data) => {
  return api.post("/login", data);
};
