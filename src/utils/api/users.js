import axios from "axios";
import { BASE_URL } from "./";

axios.defaults.withCredentials = true;

// Get Current User
export const getUser = async (setUser) => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    setUser(res.data);
  } catch (error) {
    setUser(null);
  }
};

// User Login
export const loginUser = async (data, setUser, setLoginError, router) => {
  try {
    // Send login request to server
    const res = await axios.post(`${BASE_URL}/login`, { session: data });

    // Redirect to home page if successful
    if (res.status === 200) {
      setUser(res.data);
      router.push("/");
    }
  } catch (error) {
    setLoginError(true);
  }
};

// Create new account
export const createUser = async (data, setUser, setRegisterError, router) => {
  try {
    // Send register request to server
    const res = await axios.post(`${BASE_URL}/users`, { user: data });

    // Redirect to home page if successful
    if (res.status === 201) {
      setUser(res.data);
      router.push("/");
    }
  } catch (error) {
    setRegisterError(true);
  }
};
