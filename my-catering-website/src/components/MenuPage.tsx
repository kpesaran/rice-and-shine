import React from 'react';
import '../styles/menuPage.scss';
import { data } from '../assets/menuData';
import menuImg from '../assets/images/menu.png';
import vert1 from '../assets/images/1.png';
import vert2 from '../assets/images/2.png';
import vert3 from '../assets/images/3.png';

import { MenuSection } from './menuComponents/MenuSection';

const MenuPage: React.FC = () => {
  return (
    <div className='page-container' id='menu-page'>
      <div id='menu-page-content' className='content-container'>
        <img src={menuImg} className='top-img' id='menu-img-wide'></img>

        <div className='vert-menu'>
          <img src={vert1} className='vert-img'></img>
          <img src={vert2} className='vert-img'></img>
          <img src={vert3} className='vert-img'></img>
        </div>
        {/* <div className ='heading'>
        <h4>Our menu offers a variety of paella options, each crafted with care and expertise to bring you the best of Spanish cuisine. From traditional recipes to our own fusion interpretations, our dishes showcase the versatility and depth of paella.</h4>
      </div>
        <div className="menu">
        {data.map((section) => (
        <MenuSection key={section.title} section={section} />
      ))}
        </div> */}
      </div>
    </div>
  );
};

export default MenuPage;
