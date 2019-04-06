import React from "react";
import Friends from "./Friends";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FriendForm from "./FriendForm";

const SContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;

const FriendList = styled.div`
  width: 65%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: black;
  }
`;

const FormContainer = styled.div`
  width: 25%;
  margin: 0 auto;
`;

export default props => {
  return (
    <SContainer>
      <FormContainer>
        <FriendForm createFriend={props.createFriend} />
      </FormContainer>
      <FriendList>
        {props.friends.map(friend => {
          return (
            <Friends
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id={friend.id}
            />
          );
        })}
      </FriendList>
    </SContainer>
  );
};
