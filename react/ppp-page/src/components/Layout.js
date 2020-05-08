import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col xs={1}>Header</Col>
        <Col xs={1}>Body</Col>
      </Row>
    </Container>
  );
};

export default Layout;
