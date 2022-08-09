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
  const [initialQuery] = useState(query);

  const handleSort = (e) => {
    let value = e.target.value;

    if (value === "default") {
      setQuery(initialQuery);
    } else {
      category === "all"
        ? setQuery(query + `?sort=${value}`)
        : setQuery(query + `&sort=${value}`);
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
