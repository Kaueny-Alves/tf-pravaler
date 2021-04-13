/* eslint-disable no-undef */
import React, {  } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <h1>Seja Bem vindo ao nosso Portal</h1>
      <br></br>
      <input type='text' className="input-register" placeholder='Insira seu e-mail' onChange={(e) => routerLogin({...signIn, 'email' : e.target.value})} />
      <br></br>
      <input type='password' id='password' className="input-register" placeholder='Informe uma senha numerica de 6 digitos' onChange={(e) => routerLogin({...signIn, 'password' : e.target.value})} />
      <br></br>
      <div>
         <br></br>
           <button id='btn-submit' className="form-input-register" type='submit' value='submit'>Login</button>
           <div className="texto-cadastro"></div>
          </div>
      </header>
    </div>
  );
}
export default App;