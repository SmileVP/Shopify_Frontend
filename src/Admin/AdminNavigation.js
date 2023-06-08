import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navigation() {
  let navigate = useNavigate();

  return (
    //  <--Navigation details-->
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
        <div className="icon">
            <FaShoppingCart />
          </div>
          <Navbar.Brand
            style={{ color: "white", fontSize: "2em" }}
            onClick={() => navigate("/adminHome")}
          >
            <span className="color-green">S</span>hopify - Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => navigate("/adminHome/all-orders")}
                style={{ color: "#808DAD" }}
              >
                All Orders
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/adminHome/add-products")}
                style={{ color: "#808DAD" }}
              >
                Add Product
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/adminHome/all-products")}
                style={{ color: "#808DAD" }}
              >
                All Products
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/adminHome/order-status")}
                style={{ color: "#808DAD" }}
              >
                Order-Status
              </Nav.Link>

              <Button variant="success" onClick={() => navigate("/dashboard")}>
                LogOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
