import "./input.css";
import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("Inicial");

  return (
    <div>
      <h2>{value}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          value={value}
          className="Input"
          onChange={(e) => setValue(e.target.value)}
        />
        <input value={value} className="Input" readOnly />
        <input value={undefined} className="Input" readOnly />
      </div>
    </div>
  );
}
