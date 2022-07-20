// Loops through pencil products and returns a filtered array based on user selected filters.
const filterPencils = (products, graphiteChecked, coloredChecked, featured) => {
  let filteredProducts = products;

  if (graphiteChecked || coloredChecked || featured) {
    filteredProducts = products
      .map((product) => {
        if (graphiteChecked && product.tags.includes("graphite-pencil"))
          return product;
        if (coloredChecked && product.tags.includes("colored-pencil"))
          return product;
        if (featured && product.tags.includes("featured")) return product;
      })
      .filter((product) => product !== undefined);
  }

  return filteredProducts;
};

export default filterPencils;
