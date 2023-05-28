import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container fluid style={{ backgroundColor: "#D3D3D3", marginTop: "5vh" }}>
        <Row>
          <Col className="text-center py-3">Made with ♥ by Moy</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
