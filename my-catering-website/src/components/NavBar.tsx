import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navBar.scss';

export default function NavBar() {
  return (
    <Navbar className="navbar" >
      <div className = 'navbar-container'>
        <Navbar.Brand href="#home" className="navbar-title">RICE & SHINE
          <p className = "navbar-subtitle">
            Boulder, CO
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"
        className="navbar-toggle-custom"/>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link-custom" href="/">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="/findus" className="nav-link-custom">Find Us</Nav.Link>
            {/* <Nav.Link href="/menu" className="nav-link-custom">menu</Nav.Link> */}
            <Nav.Link className="nav-link-custom" href="/services">Events</Nav.Link>
            {/* <Nav.Link  className="nav-link-custom"href="/testimonials">Testimonials</Nav.Link> */}
            {/* <Nav.Link className = "nav-link-custom" href="/shop">Shop Paella Kits</Nav.Link>  */}
            <Nav.Link className="nav-link-custom" href="/contact">Contact Us</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}


