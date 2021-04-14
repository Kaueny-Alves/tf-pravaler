export const reqServ = {
  reqAllUser: () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`https://pravaler-api.herokuapp.com/register`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
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

    fetch("https://run.mocky.io/v3/0b6c8846-5adb-4ac0-b9bc-6f7ce0a2a149", requestOptions)
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
    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("Error", error));
  },
};
