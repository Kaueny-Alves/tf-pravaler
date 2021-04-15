export const reqServ = {
  reqAllUser: (setUser) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/register`, requestOptions)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("Error", error));
  },

  reqUserBody: (path, methodType, bodyContent) => {
    const requestOptions = {
      method: `${methodType}`,
      body: bodyContent,
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/${path}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error", error));
  },

  reqSchoolAuth: (path, methodType, headerContent) => {
    const requestOptions = {
      method: `${methodType}`,
      headers: {
        Authorization: `${headerContent}`,
      },
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/${path}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error", error));
  },

  reqSchoolOpt: () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://talent-fest-api.herokuapp.com/schools", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("DEu beem ruim", error));
  },

  reqAddress: (cep) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "__cfduid=dee650520704817a78c52d380c866d8bb1618190781"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(`https://brasilapi.com.br/api/cep/v1/03590170`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error", error));
  },
};
