import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get wishlist from server
export const getWishlist = async () =>
  await axios.get(`${BASE_URL}/wishlists`).then((res) => res.data);

// Add new wishlist
export const createWishlist = async (id) =>
  await axios.post(`${BASE_URL}/wishlists`, { wishlist: { product_ids: id } });

// Update wishlist (adds new item to it)
export const updateWishlist = async (id) =>
  await axios.patch(`${BASE_URL}/wishlists`, { wishlist: { product_ids: id } });

// Delete a single item from the wishlist.
export const deleteWishlistItem = async (id) =>
  await axios.delete(`${BASE_URL}/wishlists/${id}`);

// Delete wishlist from db
export const deleteWishlist = async () =>
  await axios.delete(`${BASE_URL}/wishlists`);
