import { reqServ } from "../../services/requests";

export const registerFunc = {
   
    register: (path, methodType, bodyContent) => {
        //ParamĂȘtros
        reqServ.reqUserBody(path, methodType, bodyContent)
        .then((result) => console.log(result))
        .catch((error) => console.log(error))
    }
};
