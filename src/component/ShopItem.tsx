import React from "react";
import "./ShopItem.css";

type ShopItemProps = {
  name: string;
  price: number;
  onPut: (name: string, price: number) => void;
};

const ShopItem = ({ name, price, onPut }: ShopItemProps) => {
  return (
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}</div>
    </div>
  );
};
export default ShopItem;
