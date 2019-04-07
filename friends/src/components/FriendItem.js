import React from "react";
import FriendCard from "./FriendCard";

export default props => {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  const deleteFriend = () => {
    props.deleteFriend(friend.id);
    props.history.push("/");
  };
  return (
    <div>
      <FriendCard friend={friend} />
      <div>
        <button
          onClick={() => props.history.push(`/friends/${friend.id}/edit`)}
        >
          Edit
        </button>
        <button onClick={deleteFriend}>Delete</button>
      </div>
    </div>
  );
};
