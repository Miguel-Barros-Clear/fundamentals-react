import React from "react";

export default function Secund(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";

  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota}</strong> e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
