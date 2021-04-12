import React, { useState } from "react";

function App() {
  const [cashStudent, setCashStudent] = useState("");
  const [moneyLender, setMoneyLender] = useState("");
  const [result, setResult] = useState("");
  let resultado = "";

  function Simulator() {
    const value1 = Number(cashStudent);
    const value2 = Number(moneyLender);
    const calculadora = (value1 + value2) / 2.2;
    setResult(calculadora);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulador</h1>

        <div className="row">
          <label className="num1">Renda do Aluno</label>
          <input
            id="nome"
            value={cashStudent}
            onChange={(e) => setCashStudent(e.target.value)}
            name="nome"
            type="number"
          />
        </div>

        <div className="row">
          <label className="num2">Renda do Garantidor</label>
          <input
            id="nome"
            value={moneyLender}
            onChange={(e) => setMoneyLender(e.target.value)}
            name="nome"
            type="number"
          />
          <button
            id="somar"
            onClick={(e) => {
              e.preventDefault();
              Simulator();
            }}
          >
            Somar
          </button>
        </div>
        <div className="row">
          <label className="num3">Valor</label>
          <p>{resultado}</p>
          <input
            id="result"
            value={Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(result)}
            name="result"
            type="text"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
