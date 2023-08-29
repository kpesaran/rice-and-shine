import React from "react";
import { MenuItem } from "./MenuItem";
import { SectionData } from "../../assets/menuData";
import '../../styles/menuSection.scss'
interface MenuSectionProps {
  section: SectionData;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ section }) => {
  return (
    <div key={section.title} className="menu-section">
      <h2 className="menu-section-title">{section.title}</h2>
      <div className="menu-section-cards">
        {section.items.map((item) => (
          <MenuItem key={item.itemName} item={item} />
        ))}
      </div>
    </div>
  );
};
