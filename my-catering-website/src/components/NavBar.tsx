import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/navBar.scss';
import HamburgerIcon from './HamburgerIcon';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  
  const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <nav className='navbar'>
      <div id='high'>
        <div id='med'>
          <div id='low'>
            <Navbar>
              <div className='navbar-container'>
                <Navbar.Brand href='#home' className='navbar-title'>
                  RICE & SHINE
                  <p className='navbar-subtitle'>
                    a paella stand & catering service 
                  </p>
                </Navbar.Brand>
                <div id='hamburger-menu'>
                  <HamburgerIcon  isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}/>
                </div>
                <Nav className='ml-auto'>
                  <Nav.Link className='nav-link-custom' href='/'>
                    home
                  </Nav.Link>
                  <Nav.Link href='/about' className='nav-link-custom'>
                    about
                  </Nav.Link>
                  <Nav.Link href='/findus' className='nav-link-custom'>
                    find us
                  </Nav.Link>
                  {/* <Nav.Link href="/menu" className="nav-link-custom">menu</Nav.Link> */}
                  <Nav.Link className='nav-link-custom' href='/services'>
                    services
                  </Nav.Link>
                  {/* <Nav.Link  className="nav-link-custom"href="/testimonials">Testimonials</Nav.Link> */}
                  {/* <Nav.Link className = "nav-link-custom" href="/shop">Shop Paella Kits</Nav.Link>  */}
                  <Nav.Link className='nav-link-custom' href='/contact'>
                    contact us
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </nav>
  );
}
