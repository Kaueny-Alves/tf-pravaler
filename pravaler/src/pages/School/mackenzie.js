import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Mackenzie() {
    const history = useHistory();
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const user = await axios.get(`https://pravaler-api.herokuapp.com/register`)
            setUsers(user.data)
        };
        getUser()
        console.log(users)
    }, [])

   
    
    const routerLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        history.push("/");
    };
    const routerHome = () => {
        history.push("/");
    };

    async function putApproved(id) {
        try {
            const body = { status: "approved" };
            const user = await axios.put(`https://pravaler-api.herokuapp.com/register/${id}`, body);
            console.log(user);
            history.push("/Email");
        } catch (error) {
            console.log(error.message)
        }

    }

    async function putDisapproved(id) {
        try {
            const body = { status: "disapproved" };
            const user = await axios.put(`https://pravaler-api.herokuapp.com/register/${id}`, body);
            console.log(user);
            window.location = "/School"
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <header>
                <a href="https://www.pravaler.com.br/" className="brand">
                    <img src="pravaler.png" alt="Logo Pravaler" />
                </a>
                <div className="navigation">
                    <button type="button " className="btn-clean" onClick={routerLogout}>
                        Logout
          </button>
                    <button type="button" className="btn" onClick={routerHome}>
                        Home
          </button>
                </div>
            </header>
            <section className="container">
                <h1> Mackenzie</h1>
                <section className="container-student">

                    {users.length > 0
                        ? users
                            .filter(({ instituicao }) => instituicao === "mackenzie")
                            .filter(({ status }) => status === "pending")
                            .map((user) => {
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
                                            <button className="btn-approved" onClick={(e) => {
                                                e.preventDefault();
                                                putApproved(user.id);
                                            }} >aprovado</button>
                                            <button className="btn-disapproved" onClick={(e) => {
                                                e.preventDefault();
                                                putDisapproved(user.id);
                                            }} >reprovado</button>
                                        </div>
                                    </div>
                                )
                            })
                        : <div>Carregando...</div>}
                </section>
            </section>

        </>
    );
}

export default Mackenzie;
