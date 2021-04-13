import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import financiamento from "../../images/financiamento.jpg";
import Footer from '../../components/footer';

function App() {
  const history = useHistory();

  const routerRegistry = () => {
    history.push("/Registry");
  };

  const routerHome = () => {
    history.push("/");
  };

  const [cashStudent, setCashStudent] = useState("");
  const [moneyLender, setMoneyLender] = useState("");
  const [result, setResult] = useState("");

  function Simulator() {
    const value1 = Number(cashStudent);
    const value2 = Number(moneyLender);
    const calculadora = (value1 + value2) / 2.2;
    setResult(calculadora);
  }

  return (
    <>
      <header>
        <a href="https://www.pravaler.com.br/" className="brand">
          <img src="pravaler.png" alt="" />
        </a>
        <div class="menu-btn"></div>
        <div className="navigation">
          <button className="btn-clean" onClick={routerHome}>
            Voltar
          </button>
          <button className="btn" onClick={routerRegistry}>
            Cadastre-se
          </button>
        </div>
      </header>
      <section className="simulator">
        <div className="content">
          <div className="column col-left">
            <h1>Simulador</h1>
            <h4>Faça uma simulação de financiamento estudantil</h4>
            <div className="form">
              <label className="num1">Renda do Aluno</label>
              <input
                id="nome"
                value={cashStudent}
                onChange={(e) => setCashStudent(e.target.value)}
                name="nome"
                type="number"
              />
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
                className="btn"
                onClick={(e) => {
                e.preventDefault();
                Simulator();
              }}>
                <b>Gerar Parcela</b>
              </button>
            </div>
            <div className="cardSimulator">
            <p>
              Com o pravaler você paga menos por mês em mais tempo. As parcelas são menores, até sem juros e não se acumulam!
              </p>
              <label className="num3">Valor limite da parcela do financiamento :</label>
              <input
                className="border"
                id="result"
                value={Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(result)}
              name="result"
              type="text"
              />
              <a className="btn" onClick={routerRegistry}>
                <b>Iniciar financiamento</b>
              </a>
          </div>  
        </div> 
        <div className="column col-right">
          <div className="img-card">
            <img src={financiamento} />
          </div>
        </div>    
      </div>
    </section> 
    <Footer/>
    </>
  );
}
export default App;