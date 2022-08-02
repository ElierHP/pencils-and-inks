import { BASE_URL } from "./";
import axios from "axios";

axios.defaults.withCredentials = true;

// Post /cart - Adds product_id to cart session.
export const postCart = async (id) =>
  await axios
    .post(`${BASE_URL}/cart`, { product_id: id })
    .then((res) => res.data);

// Get /cart - get all product_ids in cart session.
export const getCart = async () =>
  await axios.get(`${BASE_URL}/cart`).then((res) => res.data);
