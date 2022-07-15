import React from "react";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { getProducts } from "../../utils/api/products";

export default function Admin() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts());

  return (
    <section>
      {/* Check for loading & errors, then display UL. */}
      {!isLoading && !isError ? (
        <ul>
          {products.map((product) => (
            <li key={uuidv4()}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <>
          {/* Loading Display */}
          {isLoading && <p>Loading</p>}

          {/* Error Display */}
          {isError && <p>Error</p>}
        </>
      )}
    </section>
  );
}
