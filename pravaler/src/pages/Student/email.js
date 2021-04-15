import Rodape from "../../images/rodape.png";
import Approved from "../../images/approved.png";
import { useHistory } from "react-router";

const Sucesso = () => {
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
        <div className="email">
            <img src={Approved} alt="imagem de chapéu de formatura" width="300px" />
            <h1>Olá </h1>
            <h3> Recebemos seus dados com sucesso.</h3>
            <p>Em breve enviaremos o status do seu processo.</p>
            <br/>
            <br/>
            <br/>
            <img src={Rodape} alt="imagem de chapéu de formatura" width="400px" />
        </div>
        </>
    )
}
export default Sucesso;