import Footer from "../../components/footer";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { reqServ } from "../../services/requests"


function School() {

  const history = useHistory();

  const [users, setUsers] = useState([])

  const handleClick = (e) => {
    e.preventDeafault()
  }
  const routerLogout = () => {
    history.push("/");
  };

  useEffect(() => {
    const getUser = async () => {
      return reqServ.reqAllUser(setUsers)
    };
    getUser()

  }, [])

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
          <button className="btn" onClick={handleClick}>
            Home
          </button>
        </div>
      </header>
      <section className="container">
        <section className="container-student">
          {users.length > 0 ? users.map((user) => {
            const created = new Date(user.createdAt).toLocaleString("pt-br");
            return (
              <div className="card-student" key={user.id}>
                <p><strong>Id:</strong>{user.id}</p>
                <p><strong>Data da solicitação: </strong>{created}</p>
                <p><strong>Nome:</strong> {user.nomeAluno}</p>
                <p><strong>CPF:</strong> {user.cpfAluno}</p>
                <p><strong>Curso:</strong> {user.curso}</p>
                <p><strong>Garantidor:</strong> {user.nomeGarantidor}</p>
                <div className="status">
                  <button className="btn-approved">aprovado</button>
                  <button className="btn-disapproved">reprovado</button>
                </div>
              </div>
            )
          })
            : <div>Carregando...</div>}
        </section>
      </section>
      <Footer />
    </>
  );
}

export default School;
