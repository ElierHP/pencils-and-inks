import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get products from server
export const getProducts = async (query = "/products") =>
  await axios.get(BASE_URL + query).then((res) => res.data);
