import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hamburgerIcon.scss';
import { useGlobalState } from '../contexts/NavPopUpContext';


const HamburgerIcon: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { toggleNavPopUp } = useGlobalState()
  
  const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
      toggleNavPopUp();
      
  };
  return (
    <div className='hamburger-icon-container'>
      <div className={isDropdownOpen ? 'hamburger-icon change' : 'hamburger-icon'} onClick={toggleDropdown}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
      {isDropdownOpen && (
              <ul className='dropdown'>
                   <li>
            <Link to='/' onClick={() => setDropdownOpen(false)}>
              Home
            </Link>
          </li>
                  <li>
            <Link to='/about' onClick={() => setDropdownOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to='/findus' onClick={() => setDropdownOpen(false)}>
              Find Us
            </Link>
                  </li>
                  <li>
            <Link to='/services' onClick={() => setDropdownOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => setDropdownOpen(false)}>
              Contact Us
            </Link>
          </li> 
        </ul>
      )}{' '}
    </div>
  );
};

export default HamburgerIcon;
