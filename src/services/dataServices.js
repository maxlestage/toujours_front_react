import axios from "axios";

const token = localStorage.getItem("token");
axios.defaults.withCredentials = false;

function getLatestVideosFromThrasher() {
  return axios({
    method: "GET",
    url: "http://0.0.0.0:7878/",
  })
    .then((response) => {
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
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

function postNewData(data) {
  return axios({
    method: "POST",
    url: "http://0.0.0.0:7878/data",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

export { getLatestVideosFromThrasher, getAllData, postNewData };
