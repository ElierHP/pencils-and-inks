import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/api";
import { Cart } from "../context/CartProvider";
import { deleteCart, deleteCartSession, getCart } from "../utils/api/cart";
import { useRouter } from "next/router";

export default function useCart() {
  const [cart, setCart, isLoading, , isError, setIsError] = useContext(Cart);
  const [products, setProducts] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const serverRequest = async () => {
      let cartIds = "";

      // Get all product ids from shopping cart session as a string.
      if (!isLoading && !isError) {
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
          productRes = res.data
            .sort((a, b) => a.id - b.id)
            .map((product) => {
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

  // Find total cost of all products in cart.
  const subTotal = () => {
    let total = 0;
    if (products.length > 0) {
      products.forEach((product) => {
        total += parseFloat(product.quantity) * parseFloat(product.price);
      });
    }
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  // Delete shopping cart item
  const handleDelete = async (id) => {
    try {
      await deleteCart(id);
      const res = await getCart();
      setCart(res);
      if (res.length < 1) router.push("/");
    } catch (error) {
      setIsError(true);
    }
  };

  // Handles the order checkout
  const handleCheckout = async (isCheckout, setIsCheckout) => {
    try {
      // Delete cart session
      await deleteCartSession();
      // Get the new empty session and change global cart state to it.
      const res = await getCart();
      setCart(res);

      // Change checkout display state
      setIsCheckout(!isCheckout);
    } catch (error) {
      setIsError(true);
    }
  };

  return [products, isLoading, isError, subTotal, handleDelete, handleCheckout];
}
