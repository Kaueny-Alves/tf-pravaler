import React, { useState } from "react";
import { reqServ } from "../../services/requests";
import { registerFunc } from "./functions";
import InputMasck from "react-input-mask";
import IntlCurrencyInput from "react-intl-currency-input";

function App() {
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

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rent, setRent] = useState("");
  const [lender, setLender] = useState("");
  const [cpfLender, setCpfLender] = useState("");
  const [phoneLender, setPhoneLender] = useState("");
  const [emailLender, setEmailLender] = useState("");
  const [rentLender, setRentLender] = useState("");
  const [school, setSchool] = useState("");
  const [classSchool, setClassSchool] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [numberStreet, setNumberStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleRegister = (
    e,
    name,
    cpf,
    phone,
    email,
    rent,
    lender,
    cpfLender,
    phoneLender,
    emailLender,
    school,
    classSchool,
    cep,
    street,
    numberStreet,
    district,
    city,
    state
  ) => {
    e.preventDefault();
    const data = {
      name,
      cpf,
      phone,
      email,
      rent,
      lender,
      cpfLender,
      phoneLender,
      emailLender,
      school,
      classSchool,
      cep,
      street,
      numberStreet,
      district,
      city,
      state,
    };
    const path = "register";
    const methodType = "POST";

    registerFunc.register(path, methodType, name);
    //reqServ.reqSchoolOpt()
  };

  function handleBlur({ target }) {
    const regex = /[A-Z][a-z]* [A-Z][a-z]*/;
    const validation = regex.test(target.value.toUpperCase());
    console.log(validation);
  }

  return (
    <>
      <section>
        <h1>Cadasdro</h1>
        <div>
          <div>
            <h4>Curso</h4>
            <label> Faculdade </label>

            <label> Curso </label>
          </div>
          <div>
            <h4>Endereço</h4>
            <label> Cep </label>
            <InputMasck
              onClick={(e) => setCep(e.target.value)}
              mask="00000-000"
              placeholder="Ex.: 00000-000"
            ></InputMasck>
            <label> Rua </label>
            <label> Número </label>
            <label> Bairro </label>
            <label> Cidade </label>
            <label> Estado </label>
          </div>
          <div>
            <h4>Aluno</h4>
            <label>Nome completo</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={handleBlur}
              placeholder="Ex.: Maria Eduarda"
            />

            <label className="phone">Celular</label>
            <InputMasck
              onChange={(e) => setPhone(e.target.value)}
              mask="(99) 99999-9999"
              placeholder="Ex.: (00) 00000-0000"
            ></InputMasck>
            <label className="cpf">CPF</label>
            <InputMasck
              onChange={(e) => setCpf(e.target.value)}
              mask="999.999.999-99"
              placeholder="Ex.: 000.000.000-00"
            ></InputMasck>

            <label> E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex.: maria@eduarda.com"
            />
            <label> E-mail</label>
            <input type="text" placeholder="Ex.: maria@eduarda.com" />

            <label> Renda do Aluno</label>
            <IntlCurrencyInput
              onChange={(e) => setRent(e.target.value)}
              currency="BRL"
              config={currencyConfig}
            />
          </div>
          <div>
            <h4>Garantidor</h4>
            <label>Nome completo</label>
            <input
              type="text"
              value={lender}
              onChange={(e) => setLender(e.target.value)}
              placeholder="Ex.: João Eduardo"
            />

            <label className="phone">Celular</label>
            <InputMasck
              onChange={(e) => setPhoneLender(e.target.value)}
              mask="(99)99999-9999"
              placeholder="Ex.: (00) 00000-0000"
            ></InputMasck>
            <label className="cpf">CPF</label>
            <InputMasck
              onChange={(e) => setCpfLender(e.target.value)}
              mask="999.999.999-99"
              placeholder="Ex.: 000.000.000-00"
            ></InputMasck>

            <label> E-mail</label>
            <input
              value={emailLender}
              onChange={(e) => setEmailLender(e.target.value)}
              type="text"
              placeholder="Ex.: joão@eduardo.com"
            />
            <label> E-mail</label>
            <input type="text" placeholder="Ex.: joão@eduardo.com" />

            <label> Renda Garandidor</label>
            <IntlCurrencyInput
              onChange={(e) => setRentLender(e.target.value)}
              currency="BRL"
              config={currencyConfig}
            />
          </div>
        </div>
        <button
          onClick={(e) =>
            handleRegister(
              e,
              name,
              cpf,
              phone,
              email,
              rent,
              lender,
              cpfLender,
              phoneLender,
              emailLender,
              school,
              classSchool,
              cep,
              street,
              numberStreet,
              district,
              city,
              state
            )
          }
        >
          OK
        </button>
      </section>
    </>
  );
}

export default App;
