import React from "react";
import FriendForm from "./FriendForm";

export default props => {
  return (
    <div>
      <FriendForm btnAction={props.btnAction} />
    </div>
  );
};
