import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import '../styles/navBar.scss';
import HamburgerIcon from './HamburgerIcon';
import { Link } from 'react-router-dom';

//Used Nav.Link to integrate pages, instead Link

interface NavBarProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDropdownOpen, toggleDropdown }) => {
  // const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  
  // const toggleDropdown = () => {
  //     setDropdownOpen(!isDropdownOpen);
  // };
  
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
                  <Link className='nav-link-custom' to='/'>
                    home
                  </Link>
                  <Link to='/about' className='nav-link-custom'>
                    about
                  </Link>
                  <Link to='/findus' className='nav-link-custom'>
                    find us
                  </Link>
                  <Link to ="/menu" className="nav-link-custom">menu</Link>
                  <Link className='nav-link-custom' to='/services'>
                    services
                  </Link>
                  {/* <Nav.Link  className="nav-link-custom"href="/testimonials">Testimonials</Nav.Link> */}
                  {/* <Nav.Link className = "nav-link-custom" href="/shop">Shop Paella Kits</Nav.Link>  */}
                  <Link className='nav-link-custom' to='/contact'>
                    contact us
                  </Link>
                </Nav>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar