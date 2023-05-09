import { useRouteError } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/style.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <>
      <div className="alert-container">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <Alert variant="alert" style={{ width: "auto" }}>
              <Alert.Heading>Oops!</Alert.Heading>
              <hr />
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
            </Alert>
            <div className="d-flex justify-content-end">
              <Button onClick={() => navigate("/")} variant="outline-danger">
                Home
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
