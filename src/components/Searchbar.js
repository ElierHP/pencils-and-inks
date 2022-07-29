import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";

export default function Searchbar() {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "" && input.length < 200)
      router.push(`/search?q=${input}`);
  };

  return (
    <SearchBarMain onSubmit={(e) => handleSearch(e)}>
      <Input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <SearchIcon>
        <GoSearch
          size={25}
          color={theme.colors.light}
          onClick={(e) => handleSearch(e)}
        />
      </SearchIcon>
    </SearchBarMain>
  );
}

// Styles
const SearchBarMain = styled.form`
  display: flex;
  height: 50px;
  /* Order was used to swap placements between searchbar and cart. */
  order: 3;
  grid-column: 1 / span3;
  ${theme.mq()[2]} {
    grid-column: initial;
  }
`;

const SearchIcon = styled.button`
  padding: 0 1.5rem;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Styles
const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
`;
