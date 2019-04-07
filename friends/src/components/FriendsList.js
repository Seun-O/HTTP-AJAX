import React from "react";
import FriendCard from "../components/FriendCard";
import Form from "./Form";

export default props => (
  <div>
    <Form action={props.action} />
    {props.friends.map(friend => (
      <FriendCard key={friend.id} friend={friend} />
    ))}
  </div>
);
