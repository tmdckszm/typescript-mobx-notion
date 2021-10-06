import React from "react";
import "./SuperMarketTemplate.css";

const SuperMarketTemplate = ({ items, baskets }) => {
  return (
    <div className="SuperMarketTemplate">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {baskets}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;
