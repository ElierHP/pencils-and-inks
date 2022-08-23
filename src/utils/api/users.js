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

// Logout
export const logout = async (setUser, setCart, router) => {
  const res = await axios.delete(`${BASE_URL}/logout`);
  if (res.status === 204) {
    // Reset user and cart to default.
    setUser(null);
    setCart([]);
    // Re-route to home page.
    router.push("/");
  }
};

// Update User
export const updateUser = async (id, data) =>
  await axios.patch(`${BASE_URL}/users/${id}`, { user: data });
