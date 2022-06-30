import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { GoSearch } from "react-icons/go";

export default function Searchbar() {
  return (
    <SearchBarMain>
      <SearchInput type="text" placeholder="Search..." />
      <SearchIcon>
        <GoSearch size={25} color={theme.colors.light} />
      </SearchIcon>
    </SearchBarMain>
  );
}

// Styles
const SearchBarMain = styled.div`
  display: flex;
  height: 50px;
  order: 3;
  grid-column: 1 / span3;
  ${theme.mq()[1]} {
    order: 2;
    grid-column: initial;
  }
`;

const SearchInput = styled.input`
  padding: 0 1rem;
  border: 2px solid ${theme.colors.gray};
  width: 100%;
  border-radius: 3px;
`;

const SearchIcon = styled.div`
  padding: 0 1.5rem;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
`;
