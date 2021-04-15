

import { useEffect, useState } from "react";
import axios from "axios";

function Mackenzi() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const user = await axios.get(`https://pravaler-api.herokuapp.com/register`)
            setUsers(user.data)
        };
        getUser()
        console.log(users)
    }, [])

    async function putApproved(id) {
        try {
            const body = { status: "approved" };
            const user = await axios.put(`https://pravaler-api.herokuapp.com/register/${id}`, body);
            console.log(user);
        } catch (error) {
            console.log(error.message)
        }

    }

    async function putDisapproved(id) {
        try {
            const body = { status: "disapproved" };
            const user = await axios.put(`https://pravaler-api.herokuapp.com/register/${id}`, body);
            console.log(user);
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <section className="container">
                <h1> Mackenzie</h1>
                <section className="container-student">

                    {users.length > 0
                        ? users
                            .filter(({ instituicao }) => instituicao === "mackenzi")
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

export default Mackenzi;
