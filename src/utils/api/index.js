export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://pencils-and-inks-server.herokuapp.com";
