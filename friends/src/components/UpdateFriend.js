import React from "react";

export default props => {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );

  const updateFriend = () => {
    props.updateFriend(friend.id);
    props.history.push(`/friends/${friend.id}`);
  };

  return (
    <form>
      <input type="text" value={friend.name} />
      <input type="number" value={friend.age} />
      <input type="email" value={friend.email} />
      <div>
        <button onClick={updateFriend}>Save</button>
      </div>
    </form>
  );
};
