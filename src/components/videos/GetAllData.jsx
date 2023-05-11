import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Card, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getAllData } from "../../services/dataServices";

function GetAllData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllData().then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Row xs={2} md={3} lg={4} className="g-4 justify-content-md-center my-5">
      {posts.slice(0).map((post, idx) => (
        <Col key={idx} className="mx-4">
          <Card className="mb-2" style={{ height: "100%" }}>
            <Card.Header className="text-center">
              {post.video_name
                .replace(/&#039; &quot;/g, " ")
                .replace(/&quot;/, " ")
                .replace(/&#039;/, " ")
                .replace(/&quot;/, " ")}
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
              <Card.Link>{post.link}</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GetAllData;
