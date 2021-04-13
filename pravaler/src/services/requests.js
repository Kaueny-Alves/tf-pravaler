export const reqServ = {
  reqUserBody: (path, methodType, bodyContent) => {
    const requestOptions = {
      method: `${methodType}`,
      body: bodyContent,
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/${path}`, requestOptions);
  },

  reqSchoolAuth: (path, methodType, headerContent) => {
    const requestOptions = {
      method: `${methodType}`,
      headers: {
        Authorization: `${headerContent}`,
      },
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/${path}`, requestOptions);
  },

  reqSchoolOpt: () => {
    const requestOptions = {
      method: GET,
      redirect: "follow",
    };
    fetch("https://talent-fest-api.herokuapp.com/schools", requestOptions);
  },

  reqAddress: (cep) => {
    const requestOptions = {
      method: GET,
      redirect: "follow",
    };
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, requestOptions);
  },
};
