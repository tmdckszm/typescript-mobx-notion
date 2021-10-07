import React from "react";
import ShopItemList from "./ShopItemList";
import SuperMarketTemplate from "./SuperMarketTemplate";
import BasketItemList from "./BasketItemList";

const SuperMarket = () => {
  return (
    <SuperMarketTemplate
      items={<ShopItemList />}
      baskets={<BasketItemList />}
    />
  );
};

export default SuperMarket;
