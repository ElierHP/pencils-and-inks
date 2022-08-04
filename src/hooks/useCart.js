import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { Cart } from "../context/CartProvider";

export default function useCart() {
  const [cart, isLoading, isError] = useContext(Cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const serverRequest = async () => {
      let cartIds = "";

      // Get all product ids from shopping cart session as a string.
      if (!isLoading) {
        cart.forEach((item) => {
          if (cart.length <= 1) {
            cartIds = item.product_id;
          } else {
            cartIds += item.product_id + ",";
          }
        });

        // If there's more than 1 id, slice the last comma.
        // If it's a number, it means there is only 1 id.
        if (typeof cartIds !== "number") cartIds = cartIds.slice(0, -1);
      }

      // If cart ids aren't empty, send fetch request to server for products.
      if (cartIds !== "") {
        const res = await axios.get(`${BASE_URL}/products/${cartIds}`);

        // Index is used to add cart quantity to each product.
        let index = 0;
        let productRes = [];

        // Check if response is an array or an object.
        if (res.data.constructor.toString().indexOf("Array") != -1) {
          // Loop through each product and add cart quantity.
          productRes = res.data.map((product) => {
            index += 1;
            return { ...product, quantity: cart[index - 1].quantity };
          });
        } else {
          // If response is an object, turn it into an array.
          productRes = [{ ...res.data, quantity: cart[index].quantity }];
        }
        // Set products to the modified response.
        setProducts(productRes);
      }
    };

    serverRequest();
  }, [cart]);
  return [products, isLoading, isError];
}
