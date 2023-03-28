import React, { useState } from "react";
import IndirectChild from "./indirectChild";

export default (props) => {
  const [user, setUser] = useState({
    name: "?",
    age: 0,
    nerd: false,
  });

  const sendInfo = (name, age, nerd) => {
    setUser({
      name,
      age,
      nerd,
    });

    console.log(user);
  };

  return (
    <div>
      <div>
        <span>{user.name} </span>
        <span>
          <strong>{user.age} </strong>
        </span>
        <span>{user.nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndirectChild onClick={sendInfo} />
    </div>
  );
};
