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

  return (
    <Row xs={2} md={3} lg={4} className="g-4 justify-content-md-center my-5">
      {posts.slice(0).map((post, idx) => (
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

export default GetAllData;
