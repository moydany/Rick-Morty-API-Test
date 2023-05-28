import React from "react";
import { Col, Row } from "react-bootstrap";
import { imageUrls } from "../utils/ImgUrls";

const Header: React.FC = () => (
  <Row>
    <Col className="text-center">
      <img
        src={imageUrls.RICK_AND_MORTY_LOGO}
        alt="Rick and Morty"
        style={{ maxWidth: "33%" }}
      />
    </Col>
  </Row>
);

export default Header;
