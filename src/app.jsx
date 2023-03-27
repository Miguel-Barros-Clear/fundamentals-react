import React from "react";

import First from "./components/basics/first";
import Fragment from "./components/basics/fragment";
import Random from "./components/basics/random";
import Secund from "./components/basics/secund";
import Card from "./components/layout/card";

import "./app.css";

export default function App(props) {
  return (
    <div className="App">
      <h1>Funtamentos React</h1>

      <div className="Cards">
        <Card title="#4 - Numero aleatorio" color="#FA6900">
          <Random min={1} max={60} />
        </Card>

        <Card title="#3 - Exemplo de fragment" color="#E94C6F">
          <Fragment />
        </Card>

        <Card title="#2 - Segundo exemplo" color="#E8B71A">
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

        <Card title="#1 - Primerio exemplo" color="#588C73">
          <First />
        </Card>
      </div>
    </div>
  );
}