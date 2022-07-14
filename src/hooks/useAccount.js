import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { useRouter } from "next/router";
import { User } from "../context/UserProvider";

axios.defaults.withCredentials = true;

// Create new account or login the user.
const useAccount = () => {
  const [error, isError] = useState(false);
  const [user, setUser] = useContext(User);
  const router = useRouter();

  // Redirect to home page if a user is already logged in.
  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  const postRequest = async (data, request) => {
    try {
      // Send login or create new user request based on params
      const res =
        request === "login"
          ? await axios.post(`${BASE_URL}/login`, { session: data })
          : await axios.post(`${BASE_URL}/users`, { user: data });

      // Redirect to home page if successful
      if (res.status === 200 || res.status === 201) {
        setUser(res.data);
        router.push("/");
      }
    } catch (error) {
      isError(true);
    }
  };
  return [postRequest, error];
};

export default useAccount;
