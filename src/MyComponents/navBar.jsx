import {Nav, Navbar} from "react-bootstrap";


function MyNavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="ps-1" bg="dark" data-bs-theme="dark">
      
      <Navbar.Brand href="#home" className='d-flex justify-content-center align-items-center'>
            <img
              alt="book"
              src="https://images.pexels.com/photos/2203051/pexels-photo-2203051.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-inline-block align-top nav-img rounded-4"
            />
            <span className='fw-bolder ps-2'>EPICBOOKS</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Aboute</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default MyNavBar;
