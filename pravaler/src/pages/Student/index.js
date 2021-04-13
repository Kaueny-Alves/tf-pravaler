import React, { useState } from "react";
import { registerFunc } from "./functions";
import { reqServ } from "../../services/requests";

function App() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [rent, setRend] = useState("");
  const [lender, setLender] = useState("");
  const [cpfLender, setCpfLender] = useState("");
  const [phoneLender, setPhoneLender] = useState("");
  const [emailLender, setEmailLender] = useState("");
  const [school, setSchool] = useState("");
  const [classSchool, setClassSchool] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [numberStreet, setNumberStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  

  const handleRegister = (e
    // name,
    // cpf,
    // phone,
    // email,
    // rent,
    // lender,
    // cpfLender,
    // phoneLender,
    // emailLender,
    // school,
    // classSchool,
    // cep,
    // street,
    // numberStreet,
    // district,
    // city,
    // state
  ) => {
    e.preventDefault();
    // const data = {name,
    //   cpf,
    //   phone,
    //   email,
    //   rent,
    //   lender,
    //   cpfLender,
    //   phoneLender,
    //   emailLender,
    //   school,
    //   classSchool,
    //   cep,
    //   street,
    //   numberStreet,
    //   district,
    //   city,
    //   state};
    // const path = "register";
    // const methodType = "POST"

      // registerFunc.register(path, methodType, name)
      reqServ.reqSchoolOpt()
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1> </h1>
        <button onClick={(e) => handleRegister(e)}>oi </button>
        {/*<br></br>
      <input type='text' className="input-register" placeholder='Nome do Aluno' onChange={(e) => routerRegistry ({...signIn, 'nameAluno' : e.target.value})} />
     <br></br>
      <input type='text' className="input-register" placeholder='CPF do Aluno' onChange={(e) => routerRegistry ({...signIn, 'cpfAluno' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Telefone  do Aluno' onChange={(e) => routerRegistry ({...signIn, 'telefoneAluno' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Email do Aluno' onChange={(e) => routerRegistry ({...signIn, 'emailAluno' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Renda do Aluno' onChange={(e) => routerRegistry ({...signIn, 'rendaAluno' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Renda do Garantidor' onChange={(e) => routerRegistry ({...signIn, 'rendaGarantidor' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='CPF do Garantidor' onChange={(e) => routerRegistry ({...signIn, 'cpfGarantidor' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Telefone do Garantidor' onChange={(e) => routerRegistry ({...signIn, 'telefoneGarantidor' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Email do Garantidor' onChange={(e) => routerRegistry ({...signIn, 'emailGarantidor' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Instituição' onChange={(e) => routerRegistry ({...signIn, 'instituicão' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Curso' onChange={(e) => routerRegistry ({...signIn, 'curso' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Cep' onChange={(e) => routerRegistry ({...signIn, 'cep' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Rua' onChange={(e) => routerRegistry ({...signIn, 'rua' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Numero' onChange={(e) => routerRegistry ({...signIn, 'numero' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='bairro' onChange={(e) => routerRegistry ({...signIn, 'bairro' : e.target.value})} />
       <br></br>
       <input type='text' className="input-register" placeholder='Cidade' onChange={(e) => routerRegistry ({...signIn, 'cidade' : e.target.value})} />
       <br></br>
      <input type='text' className="input-register" placeholder='Estado' onChange={(e) => routerRegistry ({...signIn, 'estado' : e.target.value})} />
     <br></br>*/}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
