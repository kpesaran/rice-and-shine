import React from "react";
import { ItemData } from "../../assets/menuData";

interface DietaryTagsProps {
  item: ItemData;
}

export const DietaryTags: React.FC<DietaryTagsProps> = ({ item }) => {
  return (
    <div className="menu-card-dietary">
      {item.isVegan && <div className="menu-card-dietary-vegan">Vegan</div>}
      {item.isVegetarian && <div className="menu-card-dietary-vegetarian">Vegetarian</div>}
      {item.isGlutenFree && <div className="menu-card-dietary-gluten-free">Gluten Free</div>}
    </div>
  );
};
