import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get reviews from server
export const getReviews = async (id) =>
  await axios.get(`${BASE_URL}/reviews/${id}`).then((res) => res.data);
