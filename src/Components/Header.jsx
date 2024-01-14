import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import user from "../assets/images/user.png";
import cart from "../assets/images/cart.png";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="" style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand href="#home" className="me-5">
            Grace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-5 my-2 my-lg-0"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ms-auto my-2 my-lg-0 d-flex align-items-center" style={{ maxHeight: '300px' }} navbarScroll>
    <img src={user} alt="" style={{ width: '40px', height: '40px' }} className="mr-3" />
    <img src={cart} alt="" style={{ width: '40px', height: '40px' }} className="ml-3" />
</Nav>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;