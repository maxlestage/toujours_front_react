import axios from "axios";
import sharedState from "./sharedState";
axios.defaults.withCredentials = false;

// Home page
function getLatestVideosFromThrasher() {
  return axios({
    method: "get",
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
    method: "get",
    url: "http://0.0.0.0:7878/data",
    headers: {
      Authorization: `Bearer ${sharedState.Bearer}`,
    },
  })
    .then((response) => {
      console.log("getAllData: ", response);

      return response;
    })
    .catch((err) => {
      return { message: err };
    });
}

export { getLatestVideosFromThrasher, getAllData };
