import { useState } from "react";

export default function useFilter(
  checkboxes,
  setQuery,
  category,
  queryTag = "",
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

    // If category is "all", search by tags only.
    if (category === "all") {
      tags === ""
        ? setQuery(`/products?tags=${queryTag}`)
        : setQuery(`/products?tags=${tags.slice(0, -1)}`);
    } else {
      // Else if there's a category, search by category.
      tags === ""
        ? setQuery(`/products?category=${category}`)
        : setQuery(`/products?category=${category}&tags=${tags.slice(0, -1)}`);
    }
  };

  // Reset all the checkboxes.
  const resetFilters = () =>
    checkboxes.forEach((item) => item.setChecked(false));
  return [minNum, setMinNum, maxNum, setMaxNum, handleSubmit, resetFilters];
}
