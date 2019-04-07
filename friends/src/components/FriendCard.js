import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const { id, name, age, email } = props.friend;
  return (
    <div>
      <Link to={`/friends/${id}`}>
        <h1>{name}</h1>
      </Link>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};
