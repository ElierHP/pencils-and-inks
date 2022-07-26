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

// Get 4 similar products from server
export const getSimilarProducts = async (category, tags, sku) => {
  let res = await axios
    .get(BASE_URL + `/products?category=${category}&tags=${tags}`)
    .then((res) => res.data);

  // If 4 or less products are available, send get request to the whole category.
  if (res.length <= 4) {
    res = await axios
      .get(BASE_URL + `/products?category=${category}`)
      .then((res) => res.data);
  }

  // Filter out the product with the same as SKU as the show page.
  const products = res.filter((product) => product.sku !== sku);

  return products;
};
