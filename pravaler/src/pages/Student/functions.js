import { reqServ } from "../../services/requests";

export const registerFunc = {
   
    register: () => {
        //Paramêtros
        reqServ.reqBody()
    },
    findSchool: () => {
        reqServ.reqSchoolOpt
        //Função que filtra
    },
    findAddress: () => {
        //CEP
        reqServ.reqAddress()
    }
};
