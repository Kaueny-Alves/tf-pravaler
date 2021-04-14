import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Simulator from "./simulator"
import Financiamento from "../../images/financiamento.jpg";
import Footer from '../../components/footer';
import IntlCurrencyInput from "react-intl-currency-input";

function Simulation() {
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
  let value1 = '';
  let value2 = '';

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
          <img src="pravaler.png" alt="Logo Pravaler" />
        </a>
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
              <label>Renda do Aluno
                <IntlCurrencyInput currency="BRL" config={currencyConfig}
                 onChange={handleStudent} />
              </label>
              <label>Renda do Garantidor
                <IntlCurrencyInput currency="BRL" config={currencyConfig}
                 onChange={handleLender} />
              </label>
              <button
                type="button"
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
              <br></br>
              Valor limite da parcela do financiamento :
              </p>
              <h4 className="border">{Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(result)}</h4>
              <button className="btn" onClick={routerRegistry}>
                <b>Iniciar financiamento</b>
              </button>
            </div>  
          </div> 
          <div className="column col-right">
            <div className="img-card">
              <img src={Financiamento} alt="Imagem estudante" />
            </div>
          </div>    
        </div>
      </section> 
      <Footer/>
    </>
  );
}
export default Simulation;