import Footer from "../../components/footer";
import { useHistory } from "react-router-dom";
import Fmu from "./fmu";
import Cruzeiro from "./cruzeiro";
import Anhembi from "./anhembi";
import Mackenzi from "./mackenzie";
import { useEffect, useState } from "react";

function School() {

  const history = useHistory();
  const [email, setEmail] = useState()

  useEffect(() => {
    setEmail(localStorage.getItem('email'))
  }, [])
  console.log(email)
  const routerLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  function renderSchools(email) {
    switch (email) {
      case "fmu@pravaler.com":
        return <Fmu/>
      case "mackenzie@pravaler.com":
        return <Mackenzi />
      case "cruzeiro@pravaler.com":
        return <Cruzeiro />
      case "anhembi@pravaler.com":
        return <Anhembi />
      default:
        return "breakfast";
    }
  }

  return (
    <>
      <header>
        <a href="https://www.pravaler.com.br/" className="brand">
          <img src="pravaler.png" alt="" />
        </a>
        <div class="menu-btn"></div>
        <div className="navigation">
          <button type="button " className="btn-clean" onClick={routerLogout}>
            Logout
          </button>
        </div>
      </header>
      {renderSchools(email)}
      <Footer />
    </>
  );
}

export default School;
