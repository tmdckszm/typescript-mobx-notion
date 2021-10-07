import React from "react";
import "./BasketItem.css";

type BasketItemProps = {
  name: string;
  price: number;
  count: number;
  onTake: (name: string) => void;
};

const BasketItem = ({ name, price, count, onTake }: BasketItemProps) => {
  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price} 원</div>
      <div className="count">{count}</div>
      <div className="return" onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </div>
  );
};

export default BasketItem;
