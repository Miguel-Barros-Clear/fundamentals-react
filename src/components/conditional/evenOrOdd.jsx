import React from "react";

export default function EvenOrOdd(props) {
  const isPar = props.number % 2 === 0;
  return <div>{isPar ? <span>Par</span> : <span>Impar</span>}</div>;
}
