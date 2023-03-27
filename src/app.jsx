import React from "react";

import First from "./components/basics/first";
import Fragment from "./components/basics/fragment";
import Random from "./components/basics/random";
import Secund from "./components/basics/secund";
import Card from "./components/layout/card";

export default function App(props) {
  return (
    <div id="app">
      <h1>Funtamentos React</h1>
      <Card title="#4 - Numero aleatorio">
        <Random min={1} max={60} />
      </Card>

      <Card title="#3 - Exemplo de fragment">
        <Fragment />
      </Card>

      <Card title="#2 - Segundo exemplo">
        <Secund
          title="Situação do aluno"
          subTitle="Very good!"
          aluno="Pedro"
          nota={8.3}
        />
        <Secund
          title="#2 - Situação do aluno"
          subTitle="Very good!"
          aluno="Maria"
          nota={9.9}
        />
      </Card>

      <Card title="#1 - Primerio exemplo">
        <First />
      </Card>
    </div>
  );
}
