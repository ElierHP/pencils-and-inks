import { BASE_URL } from ".";
import axios from "axios";

axios.defaults.withCredentials = true;

// Get reviews from server
export const getReviews = async () =>
  await axios.get(`${BASE_URL}/reviews`).then((res) => res.data);
