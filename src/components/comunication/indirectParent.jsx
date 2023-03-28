import React from "react";
import { IndirectChild } from "./indirectChild";

export const IndirectParent = (props) => {
  let name = "?";
  let age = 0;
  let nerd = false;

  function sendInfo(nameParams, ageParams, nerdParams) {
    name = nameParams;
    age = ageParams;
    nerd = nerdParams;

    console.log(nameParams, ageParams, nerdParams);
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>
          <strong>{age}</strong>
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndirectChild handelClick={sendInfo} />
    </div>
  );
};
