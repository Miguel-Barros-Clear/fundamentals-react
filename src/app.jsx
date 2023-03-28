import React from "react";

import First from "./components/basics/first";
import Fragment from "./components/basics/fragment";
import Random from "./components/basics/random";
import Secund from "./components/basics/secund";
import Card from "./components/layout/card";

import "./app.css";
import Family from "./components/basics/family";
import FamilyMember from "./components/basics/familyMember";
import StundetsList from "./components/repeticao/studentsList";
import TableProducts from "./components/repeticao/tableProducts";
import EvenOrOdd from "./components/conditional/evenOrOdd";
import UserInfo from "./components/conditional/userInfo";
import DirectParent from "./components/comunication/directParent";
import IndirectParent from "./components/comunication/indirectParent";
import Input from "./components/form/input";

export default function App(props) {
  return (
    <div className="App">
      <h1>Funtamentos React</h1>

      <div className="Cards">
        <Card title="#11 - Component controlado (input)" color="#00F0fce">
          <Input />
        </Card>

        <Card title="#10 - Comunicação indireta" color="#ff00cc">
          <IndirectParent />
        </Card>

        <Card title="#9 - Comunicação direta" color="#333333">
          <DirectParent />
        </Card>

        <Card title="#8 - Renderização condicional" color="#856939">
          <EvenOrOdd number={9} />
          <UserInfo user={{ name: "Fernando" }} />
        </Card>
        <Card title="#7 - Desafio Repetição" color="#0FA339">
          <TableProducts />
        </Card>

        <Card title="#6 - Repetição" color="#0FA700">
          <StundetsList />
        </Card>

        <Card title="#5 - Membros da familia" color="#FA1700">
          <Family lastName="Silva">
            <FamilyMember name="Pedro" />
            <FamilyMember name="Ana" />
            <FamilyMember name="Gustavo" />
          </Family>
        </Card>

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
