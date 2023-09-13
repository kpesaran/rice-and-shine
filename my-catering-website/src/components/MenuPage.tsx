import React from "react";
import "../styles/menuPage.scss";
import { data } from "../assets/menuData";

import { MenuSection } from "./menuComponents/MenuSection";

const MenuPage: React.FC = () => {
  return (
  <div className = 'page-container'>
    <div className = 'content-container'>
      <div className ='heading'>
        <h4>Our menu offers a variety of paella options, each crafted with care and expertise to bring you the best of Spanish cuisine. From traditional recipes to our own fusion interpretations, our dishes showcase the versatility and depth of paella.</h4>
      </div>
        <div className="menu">
        {data.map((section) => (
        <MenuSection key={section.title} section={section} />
      ))}
        </div>
      </div>
      </div>
  );
};

export default MenuPage;
