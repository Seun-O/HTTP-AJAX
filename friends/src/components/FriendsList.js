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

const SNav = styled.nav`
  h1 {
    color: white;
    padding: 0 2rem;
  }
  a {
    text-decoration: none;
  }
`;

export default props => {
  return (
    <>
      <SNav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </SNav>
      <SContainer>
        <FormContainer>
          <FriendForm createFriend={props.createFriend} />
        </FormContainer>
        <FriendList>
          {props.friends.map(friend => {
            return (
              <Link to={`/friends/${friend.id}`}>
                <Friends
                  key={friend.id}
                  name={friend.name}
                  age={friend.age}
                  email={friend.email}
                />
              </Link>
            );
          })}
        </FriendList>
      </SContainer>
    </>
  );
};
