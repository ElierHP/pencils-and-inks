import { BASE_URL } from "./";
import axios from "axios";

axios.defaults.withCredentials = true;

// Post /cart - Adds product_id to cart session.
export const postCart = async (id, quantity = 1) =>
  await axios
    .post(`${BASE_URL}/cart`, { product_id: id, quantity })
    .then((res) => res.data);

// Get /cart - get all product_ids in cart session.
export const getCart = async () =>
  await axios.get(`${BASE_URL}/cart`).then((res) => res.data);

// Destroy /cart/id
export const deleteCart = async (id) =>
  await axios.delete(`${BASE_URL}/cart/${id}`).then((res) => res.data);

// Patch/Put /card/id
export const updateCart = async (id, quantity) =>
  await axios.patch(`${BASE_URL}/cart/${id}`, { quantity });
