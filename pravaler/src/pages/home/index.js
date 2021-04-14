import "../../style.css";
import {
  FaCalculator,
  FaClipboardCheck,
  FaAlignRight,
  FaFileImport,
} from "react-icons/fa";
import Students from "../../images/students.jpg";
import { useHistory } from "react-router-dom";
import Footer from '../../components/footer';

function Home() {
  const history = useHistory();

  const routerRegistry = () => {
    history.push("/Student");
  };

  const routerSimulator = () => {
    history.push("/Simulator");
  };

  const routerLogin = () => {
    history.push("/Login");
  };

  return (
    <>
      <header>
        <a href="https://www.pravaler.com.br/" className="brand">
          <img src="pravaler.png" alt="Logo Pravaler"/>
        </a>
        <div className="navigation">
          <button type="button "className="btn-clean" onClick={routerLogin}>
            Portal
          </button>
          <button type="button" className="btn" onClick={routerRegistry}>
            Cadastre-se
          </button>
        </div>
      </header>
      <section className="about">
        <div className="content">
          <div className="column col-left">
            <div className="img-card">
              <img src={Students} alt="Imagem estudante"/>
            </div>
          </div>
          <div className="column col-right">
            <h2 className="content-title">
              Seu futuro você faz acontecer. Invista na sua educação com o
              Pravaler.
            </h2>
            <button className="btn" onClick={routerSimulator}>
              <b>Simule agora</b>
            </button>
            <h3>Faça tudo 100% online</h3>
            <p className="paragraph-text">
              Em apenas 4 passos você pode garantir o seu financiamento
              estudantil.
            </p>
            <div className="cardBox">
              <div className="card">
                <FaCalculator size="20" color="#000" />
                <h4>Simule seu financiamento</h4>
                <span>
                  Encontre a Instituição, curso e depois veja valores na
                  simulação.
                </span>
              </div>
              <div className="card">
                <FaAlignRight size="20" color="#000" />
                <h4>Preencha a proposta</h4>
                <span>
                  Informe seus dados e do Garantidor durante o preenchimento da
                  proposta.
                </span>
              </div>
              <div className="card">
                <FaClipboardCheck size="20" color="#000" />
                <h4>Validação de crédito</h4>
                <span>
                  Você e o seu Garantidor terão os dados avaliados por empresas
                  de crédito.
                </span>
              </div>
              <div className="card">
                <FaFileImport size="20" color="#000" />
                <h4>Enviem documentos e assinem o contrato</h4>
                <span>
                  Você e o seu garantidor vão precisar enviar os documentos que
                  comprovem os dados cadastrados.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
export default Home;