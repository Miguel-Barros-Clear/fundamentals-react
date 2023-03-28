import React from "react";

export default function ValueForm(props) {
  return (
    <div>
      <p>Passo</p>
      <input
        id="incValue"
        type="number"
        onChange={props.setValue}
        value={props.incValue}
      />
    </div>
  );
}
