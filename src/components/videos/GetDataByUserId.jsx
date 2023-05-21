import React, { useState, useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import { getAllData } from "../../services/dataServices";
import postsData from "./dataSet";

function GetDataByUserId() {
  const user = localStorage.getItem("user");
  const userParseData = JSON.parse(user);
  const userId = userParseData.id;
  const [posts, setPosts] = useState([]);

  let filteredByUserID = [];

  function filterByUserID(data) {
    data.map((d) => {
      if (d.user_id === userId) {
        filteredByUserID.push(d);
      }
    });
  }

  useEffect(() => {
    getAllData().then((response) => {
      let data = response.data;
      console.log("data", data);

      if (data.length <= 0) {
        setPosts(postsData);
      } else {
        filterByUserID(data);
        setPosts(filteredByUserID);
      }
    });
  }, []);

  return (
    <Row xs={2} md={3} lg={4} className="g-4 justify-content-md-center my-5">
      {posts.map((post, idx) => (
        <Col key={idx} className="mx-4">
          <Card className="mb-2" style={{ height: "100%" }}>
            <Card.Header className="text-center">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Card.Header>
            <Card.Body>
              <Card.Title
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {post.description}
              </Card.Title>
            </Card.Body>
            <Card.Footer className="text-muted">
              <small>path_to: {post.path}</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GetDataByUserId;
