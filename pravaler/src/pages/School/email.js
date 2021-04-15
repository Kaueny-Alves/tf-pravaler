import Rodape from "../../images/rodape.png";
import Approved from "../../images/approved.png";

const Email = () => {
    return (
        <div className="email">
            <img src={Approved} alt="imagem de chapéu de formatura" width="300px" />
            <h1>PARABÉNS!!! </h1>
            <h3> Você foi aprovado para estudar conosco.</h3>
            <p>Estamos felizes em recebê-lo como nosso aluno.</p>
            <br/>
            <br/>
            <br/>
            <img src={Rodape} alt="imagem de chapéu de formatura" width="400px" />
        </div>
    )
}
export default Email;