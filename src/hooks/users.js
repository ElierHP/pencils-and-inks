import React, { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { useRouter } from "next/router";
import { User } from "../context/UserProvider";

axios.defaults.withCredentials = true;

export const useLogout = () => {
  const [, setUser] = useContext(User);
  const router = useRouter();
  // Logout
  const logout = async () => {
    const res = await axios.delete(`${BASE_URL}/logout`);
    if (res.status === 204) {
      setUser(null);
      router.push("/");
    }
  };

  return logout;
};

// User Login
export const useLogin = () => {
  const [loginError, setLoginError] = useState(false);
  const [, setUser] = useContext(User);
  const router = useRouter();

  const login = async (data) => {
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
  return [login, loginError];
};
