import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function Sort({
  showFilters,
  setShowFilters,
  query,
  setQuery,
  category = "",
}) {
  // Save the initial query to a state, used for "default" sort.
  const [initialQuery] = useState(query);

  const handleSort = (e) => {
    // value refers to the current option value in the select.
    let value = e.target.value;

    // find index of the word "sort" in the query
    let index = query.search("sort");

    // sanitizedQuery is used to remove the "&sort=asc" params from the query before setting a new one.
    let sanitizedQuery = query;

    // If "sort" was found in the query, slice it off.
    if (index !== -1) {
      sanitizedQuery = query.slice(0, index - 1);
    }

    // If value is set to default, use the initial query that was saved.
    if (value === "default") {
      setQuery(initialQuery);
    } else {
      // Else add the sort params to the query
      category === "all"
        ? setQuery(sanitizedQuery + `?sort=${value}`)
        : setQuery(sanitizedQuery + `&sort=${value}`);
    }
  };

  return (
    <SelectContainer>
      <SortBy>
        <SortTitle>Sort By: </SortTitle>
        <Select name="product-sort" onChange={(e) => handleSort(e)}>
          <option value="default">Default</option>
          <option value="asc">Title Ascending</option>
          <option value="desc">Title Descending</option>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
        </Select>
      </SortBy>
      <FilterBtn onClick={() => setShowFilters(!showFilters)}>
        <div>Filters</div>
      </FilterBtn>
    </SelectContainer>
  );
}

// Styles
const SelectContainer = styled.div`
  display: flex;
  align-items: left;
  gap: 1rem;
  flex-direction: column;
  ${theme.mq()[0]} {
    align-items: center;
    flex-direction: row;
    gap: 2rem;
  }
`;

const SortBy = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  align-items: center;
  ${theme.mq()[0]} {
    display: flex;
  }
`;

const Select = styled.select`
  border-color: ${theme.colors.neutral};
  padding: 0.2rem 0.5rem;
  width: 100%;
  ${theme.mq()[0]} {
    width: initial;
  }
`;

const SortTitle = styled.h3`
  width: 78px;
`;

const FilterBtn = styled.div`
  border-color: ${theme.colors.neutral};
  padding: 0.1rem 0;
  border-radius: 4px;
  border: 2px solid ${theme.colors.neutral};
  text-align: center;
  width: 100%;
  margin-bottom: 1.5rem;
  ${theme.mq()[0]} {
    margin-bottom: 0;
  }
  ${theme.mq()[1]} {
    display: none;
  }
`;
