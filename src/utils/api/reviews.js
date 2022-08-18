import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get reviews from server
export const getReviews = async (id) =>
  await axios
    .get(`${BASE_URL}/reviews`, { params: { product_id: id } })
    .then((res) => res.data);

// Post new review
export const createReview = async (data) =>
  await axios
    .post(`${BASE_URL}/reviews`, { review: data })
    .then((res) => res.data);

// Delete review
export const deleteReview = async (id, refetch) => {
  await axios.delete(`${BASE_URL}/reviews/${id}`);
  refetch();
};
