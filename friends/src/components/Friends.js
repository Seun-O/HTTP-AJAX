import React from "react";

export default ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};
