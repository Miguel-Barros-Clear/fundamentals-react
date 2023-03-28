import React, { useState } from "react";

export default function Mega() {
  const [result, setResult] = useState([]);

  function generateNewNumber(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random) ? generateNewNumber(min, max, array) : random;
  }

  function generateNumbers(qtde) {
    const numbers = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNewNumber(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return setResult(numbers);
  }

  return (
    <div>
      <h2>Gerando numeros aleatorios da megacena</h2>
      <p>Seu numero da Megacena é: {result.join(" ")}</p>
      <button onClick={() => generateNumbers(7)}>Gerar um novo numero</button>
    </div>
  );
}
