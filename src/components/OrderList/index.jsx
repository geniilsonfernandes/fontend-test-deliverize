import React, { useState } from "react";
import P from "prop-types";
import { valuesToArray } from "../../utils/valuesToArray";
import { CutlerySelect } from "../CutlerySelect";
import { IngredientsControl } from "../IngredientsControl";
import { CounterControl } from "../Control";
import { Button } from "../Layout/LayoutHelper";

import * as S from "./styles";

export const OrderList = ({ itemsLimiter, items, onDispatchOrder }) => {
  const maxLimiter = itemsLimiter;
  const [order, setOrder] = useState({});
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [limiter, setLimiter] = useState(itemsLimiter);
  const [itemCounter, setItemCounter] = useState(0);
  const [needCutlery, setNeedCutlery] = useState({});

  // order functions
  const handleAddItemToList = (item) => {
    setItemCounter((s) => s + 1);
    setOrder((prev) => ({ ...prev, ...item }));
  };
  const handleRemoveItemToList = (item) => {
    setItemCounter((s) => s - 1);
    setOrder((prev) => ({ ...prev, ...item }));
  };
  const handleLimiter = (v) => {
    setLimiter(v);
  };

  // cutlery select
  const handleCutlerySelect = (value) => {
    setNeedCutlery(value);
  };

  //Dispatch Order
  const handleOderCounter = (counter) => {
    setOrderQuantity(counter);
  };

  const handleDispatchOrder = () => {
    const cleaningOrder = valuesToArray(order).filter((i) => i.amount != 0);

    const orderClosed = {
      additional: cleaningOrder,
      needCutlery,
      orderQuantity
    };
    onDispatchOrder(orderClosed);
  };

  return (
    <S.Wrapper>
      <S.Head>
        <S.Label>Adicionar Ingredientes</S.Label>
        <S.Description>Até {maxLimiter} ingredientes.</S.Description>
      </S.Head>
      <S.List>
        {items &&
          items.map((item, i) => (
            <IngredientsControl
              key={`item+${i}-${item.label}`}
              label={item.label}
              price={2.5}
              limiter={limiter}
              itemCounter={itemCounter}
              max={8}
              onIncremental={handleAddItemToList}
              onDecremental={handleRemoveItemToList}
              onCounter={handleLimiter}
            />
          ))}
      </S.List>
      <CutlerySelect onSelect={handleCutlerySelect} label="Precisa de Talher?" />
      <S.Dispatch>
        <CounterControl onCounter={handleOderCounter} starting={1} ariaLabel="quantidade de produtos" />
        <Button onClick={() => handleDispatchOrder()}>Adicionar</Button>
      </S.Dispatch>
    </S.Wrapper>
  );
};

OrderList.propTypes = {
  itemsLimiter: P.number,
  items: P.array,
  onDispatchOrder: P.func
};
