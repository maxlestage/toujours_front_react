import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.withCredentials = false;

function getLatestVideosFromThrasher() {
  return axios({
    method: "GET",
    url: "http://0.0.0.0:7878/",
  })
    .then((response) => {
      console.log("getLatestVideosFromThrasher: ", response);
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

function getAllData() {
  return axios({
    method: "GET",
    url: "http://0.0.0.0:7878/data/",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

export { getLatestVideosFromThrasher, getAllData };
