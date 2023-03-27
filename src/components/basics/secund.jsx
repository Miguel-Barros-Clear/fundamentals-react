import React from "react";

export default function Secund(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);

  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaInt}</strong> e está
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
