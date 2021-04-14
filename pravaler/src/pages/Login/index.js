/* eslint-disable no-undef */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from '../../components/footer';

function Login() {
  const history = useHistory();
  const routerHome = () => {
    history.push("/");
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
        </div>
      </header>
      <section className="login">
        <h1>Seja bem-vindo ao nosso portal !</h1>
        <label >E-mail:
          <input type="text" className="input" placeholder="faculdade@gmailcom" onChange={(e) => routerLogin({...signIn, "email" : e.target.value})} />
        </label>
        <label >Senha: 
          <input type="password" className="input" placeholder='******' onChange={(e) => routerLogin({...signIn, "password" : e.target.value})} />
        </label>
        <div>
          <button className="btn" type="button" value='submit'><b>Login</b></button>
        </div>
      </section>
      <Footer/>
    </>
  );
}
export default Login;