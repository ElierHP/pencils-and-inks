import { useContext } from "react";
import { useRouter } from "next/router";
import { createWishlist, updateWishlist } from "../utils/api/wishlist";
import { User } from "../context/UserProvider";

export default function useWishlist(id) {
  const [user, , setLoading] = useContext(User);
  const router = useRouter();

  const addToWishlist = async () => {
    // If user is not logged in, re-route to /login
    if (user === null) {
      router.push("/login");
    }

    setLoading(true);
    try {
      const res = await createWishlist(id);
      // If wishlist already exists, edit it instead.
      if (res.data === "wishlist already exists") {
        await updateWishlist(id);
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => setLoading(false), 250);
  };
  return addToWishlist;
}
