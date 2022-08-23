import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { useRouter } from "next/router";
import { User } from "../context/UserProvider";
import { Cart } from "../context/CartProvider";

axios.defaults.withCredentials = true;

// Create new account or login the user.
const useAccount = () => {
  const [error, setError] = useState({
    error: false,
    status: 200,
    message: "Ok",
  });
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useContext(User);
  const [, setCart] = useContext(Cart);

  const router = useRouter();

  // Redirect to home page if a user is already logged in.
  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  const postRequest = async (data, request) => {
    setLoading(true);
    try {
      // Send login or create new user request based on params
      const res =
        request === "login"
          ? await axios.post(`${BASE_URL}/login`, { session: data })
          : await axios.post(`${BASE_URL}/users`, { user: data });

      // Redirect to home page if successful
      if (res.status === 200 || res.status === 201) {
        setUser(res.data);
        setCart([]);
        await router.push("/");
        setLoading(false);
      }
    } catch (err) {
      // If unauthorized(login) or conflict(register), return correct error.
      if (err.response.status === 401 || err.response.status === 409) {
        setError({
          error: true,
          status: err.response.status,
          message:
            err.response.status === 401
              ? "Incorrect Email or Password."
              : "Account with that email already exists.",
        });
        // Else the server is down.
      } else {
        setError({
          error: true,
          status: err.response.status,
          message: "Server Error. Please wait a few minutes and try again.",
        });
      }
      setLoading(false);
    }
  };
  return [postRequest, error, loading];
};

export default useAccount;
