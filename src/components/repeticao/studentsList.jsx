import React from "react";
import alunos from "../../data/students";

export default function StundetsList(props) {
  const alunosLI = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.name} = {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{alunosLI}</ul>
    </div>
  );
}
