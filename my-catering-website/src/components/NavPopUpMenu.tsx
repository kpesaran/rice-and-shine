import React from 'react';
import { useGlobalState } from '../contexts/NavPopUpContext';
import { Link } from 'react-router-dom';

const NavPopUpMenu: React.FC = () => {
  const { isNavPopUpOpen } = useGlobalState();

  return (
    <div className={isNavPopUpOpen ? 'pop-up-menu show' : 'pop-up-menu'}>
      <ul>
        <li>
          <Link
            to='/'
            //onClick={() => setDropdownOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            //onClick={() => setDropdownOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link to='/findus'>
            Find Us
          </Link>
        </li>
        <li>
          <Link to='/services' >
            Events
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavPopUpMenu;
