import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";

const NavBar = ({filterBySearch}) => {
    const [searchValue,setSearchValue]=useState("")
    const onSearch=()=>{
        filterBySearch(searchValue)
        setSearchValue("")
    }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم المؤمنين </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث..."
                className="mx-2 "
                onChange={(e)=>{setSearchValue(e.target.value)}}
                value={searchValue}
              />
              <button onClick={onSearch} className="btn-search">بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
