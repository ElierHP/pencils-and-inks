import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get products from server
export const getProducts = async (query = "/products") =>
  await axios.get(BASE_URL + query).then((res) => res.data);

// Add new product
export const createProduct = async (data) =>
  await axios.post(`${BASE_URL}/products`, { product: data });

// Edit product from db
export const editProduct = async (id, data) =>
  await axios.patch(`${BASE_URL}/products/${id}`, { product: data });

// Delete product from db
export const deleteProduct = async (id) =>
  await axios.delete(`${BASE_URL}/products/${id}`);
