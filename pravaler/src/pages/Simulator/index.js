import React, { useState } from "react";

function App() {
  const [cashStudent, setCashStudent] = useState('')
  const [moneyLender, setMoneyLender] = useState('')
  const [result, setResult] = useState('')
  let resultado = ''

  function Simulator() {
    const value1 = Number(cashStudent)
    const value2 = Number(moneyLender)
    const calculadora = (value1 + value2) / 2.2
    setResult(calculadora)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulador</h1>

        <div class="row">
          <label class="num1">Renda do Aluno</label>
          <input id="nome" value={cashStudent} onChange={(e) => setCashStudent(e.target.value)} name="nome" type="text" />
        </div>

        <div class="row">
          <label class="num2">Renda do Garantidor</label>
          <input id="nome" value={moneyLender} onChange={(e) => setMoneyLender(e.target.value)} name="nome" type="text" />
          <button id="somar" onClick={(e) => { e.preventDefault(); Simulator() }}>Somar</button>
        </div>
        <div class="row">
          <label class="num3">Valor</label>
          <p>{resultado}</p>
          <input id="result" value={result} name="result" type="text" />
        </div>

      </header>
    </div>
  );
}

export default App;