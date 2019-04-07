import React from "react";
import Form from "./Form";

export default props => {
  const id = props.match.params.id;
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  return (
    <div>
      <Form friend={friend} {...props} action={props.editFriend} />
    </div>
  );
};
