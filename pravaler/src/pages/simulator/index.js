/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Simulator from "./simulator"
import financiamento from "../../images/financiamento.jpg";
import Footer from '../../components/footer';
import IntlCurrencyInput from "react-intl-currency-input"

function App() {
  const history = useHistory();
  const routerRegistry = () => {
    history.push("/Student");
  };

  const routerHome = () => {
    history.push("/");
  };

  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  const [result, setResult] = useState("");
  let value1 = ''
  let value2 = ''

  const handleStudent = (event, value) => {
    event.preventDefault();
    value1 =  value;
  };

  const handleLender = (event, value) => {
    event.preventDefault();
    value2 = value;
  };

  return (
    <>
      <header>
        <a href="https://www.pravaler.com.br/" className="brand">
          <img src="pravaler.png" alt="" />
        </a>
        <div class="menu-btn"></div>
        <div className="navigation">
          <button className="btn-clean" onClick={routerHome}>
            Home
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
                <IntlCurrencyInput currency="BRL" config={currencyConfig}
                 onChange={handleStudent} />
              <label className="num2">Renda do Garantidor</label>
              <IntlCurrencyInput currency="BRL" config={currencyConfig}
                 onChange={handleLender} />
              <button
                id="somar"
                className="btn"
                onClick={(e) => {
                e.preventDefault();
                setResult(Simulator(value1, value2));
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