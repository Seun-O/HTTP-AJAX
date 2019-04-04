import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  background: lemonchiffon;
  width: 100%;
  border-bottom: 4px solid purple;
  border-radius: 12px 12px 0 0;
  text-align: center;
`;
export default ({ name, age, email }) => {
  return (
    <SDiv>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
    </SDiv>
  );
};
