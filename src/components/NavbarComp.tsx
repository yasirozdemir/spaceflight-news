import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.522)",
          color: "white",
        }}
        className="fixed-top"
      >
        <Row style={{ height: "60px" }} className="justify-content-center">
          <Link
            to="/"
            className="d-flex align-items-center"
            style={{ color: "white" }}
          >
            <h1 className="m-0 mr-2"> SPACEFLIGHT NEWS </h1>
            <h3 className="m-0">(fly to stay alive)</h3>
          </Link>
        </Row>
      </Container>
    </>
  );
};
export default NavbarComp;
