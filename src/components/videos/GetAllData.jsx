import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Card, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getAllData } from "../../services/dataServices";

function GetAllData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllData().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return <p>toto</p>;
}

export default GetAllData;
