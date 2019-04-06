import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SNav = styled.nav`
  h1 {
    color: white;
    padding: 0 2rem;
  }
  a {
    text-decoration: none;
  }
`;
export default () => {
  return (
    <SNav>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </SNav>
  );
};
