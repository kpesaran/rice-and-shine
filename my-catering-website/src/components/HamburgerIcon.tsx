import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/hamburgerIcon.scss';
import { useGlobalState } from '../contexts/NavPopUpContext';

interface HamburgerIconProps {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}
const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isDropdownOpen, toggleDropdown }) => {
 
  
  const { toggleNavPopUp } = useGlobalState();
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
            <Link to='/' onClick={() => toggleDropdown()}>
              Home
            </Link>
          </li>
                  <li>
            <Link to='/about' onClick={() => toggleDropdown()}>
              About
            </Link>
          </li>
          <li>
            <Link to='/findus' onClick={() => toggleDropdown()}>
              Find Us
            </Link>
                  </li>
                  <li>
            <Link to='/services' onClick={() => toggleDropdown()}>
              Events
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => toggleDropdown()}>
              Contact Us
            </Link>
          </li> 
        </ul>
      )}{' '}
    </div>
  );
};

export default HamburgerIcon;
