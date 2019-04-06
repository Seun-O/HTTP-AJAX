import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SDiv = styled.div`
  width: 400px;
  background: lightpink;
  text-align: center;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default props => {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  const deleteFriend = () => {
    props.deleteFriend(friend.id);
    props.history.push(`/`);
  };

  return (
    <SDiv>
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <div>
        <Link to={`/friends/${friend.id}/edit`}>Edit</Link>
        <button onClick={deleteFriend}>Delete</button>
      </div>
    </SDiv>
  );
};
