import React from "react";
import BasketItem from "./BasketItem";
import { useObserver } from "mobx-react";
import useStore from "../useStore";

interface IitemListProps {
  name: string;
  price: number;
  count: number;
  key: string;
  onTake: (name: string) => void;
}

const BasketItemList = () => {
  const { market } = useStore();

  const onTake = (name: string) => {
    market.take(name);
  };

  return useObserver(() => {
    const itemList = market.selectedItems.map((item: IitemListProps) => (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={item.name}
        onTake={onTake}
      />
    ));
    return (
      <div>
        {itemList}
        <hr />
        <p>
          <b>총합: </b> {market.total}원
        </p>
      </div>
    );
  });
};
export default BasketItemList;
