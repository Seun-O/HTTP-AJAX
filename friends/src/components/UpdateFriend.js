import React from "react";
import Form from "./Form";

export default props => {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );

  const updateFriend = () => {
    props.updateFriend(friend.id);
    props.history.push(`/friends/${friend.id}`);
  };

  return (
    <div>
      <Form id={friend.id} />
    </div>
  );
};
