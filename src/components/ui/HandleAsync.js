import React from "react";
import { ErrorMessage, Spinner } from "../../components/ui";

export default function HandleAsync({ children, isLoading, isError }) {
  return (
    <>
      {!isLoading && !isError ? (
        <>{children}</>
      ) : (
        <>
          {/* Loading Display */}
          {isLoading && <Spinner />}

          {/* Error Display */}
          {isError && (
            <ErrorMessage>Error: Couldn't load products.</ErrorMessage>
          )}
        </>
      )}
    </>
  );
}
