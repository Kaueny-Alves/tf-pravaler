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
};
