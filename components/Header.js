import React from "react";
import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Row>
        <Col sm="12" className="d-flex flex-column  align-items-center justify-content-center text-center">
          <div className="title">قائمه الطعام</div>
          <div className="underline"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
