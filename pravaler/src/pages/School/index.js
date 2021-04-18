import Fmu from "./fmu";
import Cruzeiro from "./cruzeiro";
import Anhembi from "./anhembi";
import Mackenzie from "./mackenzie";
import { useEffect, useState } from "react";
import Login from "../Login";

function School() {

  const [email, setEmail] = useState()

  useEffect(() => {
    setEmail(localStorage.getItem('email'))
  }, [])


  function renderSchools(email) {
    switch (email) {
      case "fmu@pravaler.com":
        return <Fmu />
      case "mackenzie@pravaler.com":
        return <Mackenzie />
      case "cruzeiro@pravaler.com":
        return <Cruzeiro />
      case "anhembi@pravaler.com":
        return <Anhembi />
      default:
        return <Login />;
    }
  }

  return (
    <>
      {renderSchools(email)}
    </>
  );
}

export default School;
