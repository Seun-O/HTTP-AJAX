import React from "react";
import Friends from "./Friends";

export default props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friends
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        );
      })}
    </div>
  );
};
