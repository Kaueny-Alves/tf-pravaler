import { reqServ } from "../../services/requests";

export const registerFunc = {
   
    register: (path, methodType, bodyContent) => {
        //Paramêtros
        reqServ.reqUserBody(path, methodType, bodyContent)
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
    }
};
