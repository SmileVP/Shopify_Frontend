import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import { BsFillCartDashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Navigation() {
  let navigate = useNavigate();

  //to get the cart details
  let itemCount = useSelector((state) => state.cart);

  //function for customer-logOut
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/dashboard");
  };

  //to get the customer name from session storage
  let name = sessionStorage.getItem("name");

  return (
    //  <--Navigation details-->
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          <div className="icon">
            <FaShoppingCart />
          </div>
          <Navbar.Brand
            onClick={() => navigate("/products")}
            style={{ color: "white", fontSize: "2em" }}
          >
            <span className="color-green">S</span>hopify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "10em", gap: "3em", color: "red" }}
              navbarScroll
            >
              <div className="me-3 p-2">
                <Button variant="danger" onClick={() => navigate("/cart")}>
                  Cart <BsFillCartDashFill />
                  <div
                    className="badge bg-white text-success position-absolute"
                    style={{ top: "10px" }}
                  >
                    {itemCount.cartTotalQuantity}
                  </div>
                </Button>
              </div>
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    <CgProfile /> {name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/orders")}>
                      Orders
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleLogOut()}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
