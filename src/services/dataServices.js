import axios from "axios";

axios.defaults.withCredentials = false;

function getAllData() {
  return axios({
    method: "get",
    url: "http://0.0.0.0:7878/",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

export { getAllData };
