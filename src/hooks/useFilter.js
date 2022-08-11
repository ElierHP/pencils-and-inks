import { useState } from "react";

export default function useFilter(
  checkboxes,
  setQuery,
  category,
  setShowFilters
) {
  // Price input values
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hide the filters display
    setShowFilters(false);

    let tags = "";

    checkboxes.forEach((item) => {
      if (item.checked) tags += item.tag + ",";
    });

    // If user changes price input, add this price query to the GET request.
    let priceQuery = "";
    if (minNum > 0 || maxNum < 100) {
      priceQuery = `&price=${minNum},${maxNum}`;
    }

    // If category is "all", search by tags only.
    if (category === "all") {
      setQuery(`/products?tags=${tags.slice(0, -1)}${priceQuery}`);
    } else {
      // Else if there's a category, search by category.
      tags === ""
        ? setQuery(`/products?category=${category}${priceQuery}`)
        : setQuery(
            `/products?category=${category}&tags=${tags.slice(
              0,
              -1
            )}${priceQuery}`
          );
    }
  };

  // Reset all the checkboxes.
  const resetFilters = () => {
    checkboxes.forEach((item) => item.setChecked(false));
    setMinNum(0);
    setMaxNum(100);
  };

  return [minNum, setMinNum, maxNum, setMaxNum, handleSubmit, resetFilters];
}
