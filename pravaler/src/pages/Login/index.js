/* eslint-disable no-undef */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from '../../components/footer';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  const routerHome = () => {
    history.push("/");
  };

  const routerSchool = () => {
    history.push("/School");
  };

  async function signIn(email, password) {
    const body = {
      email,
      password
    }
    const response = await axios.post("https://pravaler-api.herokuapp.com/login", body);
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('email', response.data.email)
    routerSchool();
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
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
          <input type="text" className="input" placeholder="faculdade@gmail.com" value={email}
            onChange={handleEmail} />
        </label>
        <label >Senha:
          <input type="password" className="input" placeholder='******' value={password}
            onChange={handlePassword} />
        </label>
        <div>
          <button className="btn" type="button" value='submit' onClick={() => { signIn(email, password) }}><b>Login</b></button>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Login;