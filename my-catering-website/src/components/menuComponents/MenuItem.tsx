import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { ItemData } from "../../assets/menuData";
import { DietaryTags } from "./DietaryTags";
import '../../styles/menuCard.scss'

interface MenuItemProps {
  item: ItemData;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Card className="menu-card">
      <CardImg className = 'card-img' top width="100%" src={item.image} alt={item.itemName} />
      <CardBody>
        <CardTitle tag="h3">{item.itemName}</CardTitle>
        <CardSubtitle tag="h4">${item.price}</CardSubtitle>
        <CardText>
          <ul className="menu-card-ingredients">
          {item.ingredients.join(', ')}
          </ul>
          <DietaryTags item={item} />
        </CardText>
      </CardBody>
    </Card>
  );
};
