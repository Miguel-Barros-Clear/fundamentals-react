import React from "react";

import First from "./components/basics/first";
import Fragment from "./components/basics/fragment";
import Random from "./components/basics/random";
import Secund from "./components/basics/secund";

export default function App(props) {
  return (
    <div id="app">
      <h1>Funtamentos React</h1>
      <Random min={1} max={60} />

      <Fragment />
      <First />
      <Secund
        title="Situação do aluno"
        subTitle="Very good!"
        aluno="Pedro"
        nota={8.3}
      />
      <Secund
        title="Situação do aluno"
        subTitle="Very good!"
        aluno="Maria"
        nota={9.9}
      />
    </div>
  );
}
