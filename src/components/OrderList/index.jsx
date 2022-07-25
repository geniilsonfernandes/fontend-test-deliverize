import React, { useState } from "react";
import P from "prop-types";
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
    const orderClosed = {
      order,
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
          items.map((v, i) => (
            <IngredientsControl
              key={i}
              label={`item ${v}`}
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
      <CutlerySelect onSelect={handleCutlerySelect} />
      <S.Dispatch>
        <CounterControl onCounter={handleOderCounter} starting={1} />
        <Button onClick={() => handleDispatchOrder()}>Adicionar</Button>
      </S.Dispatch>
    </S.Wrapper>
  );
};

CounterControl.propTypes = {
  itemsLimiter: P.number,
  items: P.array,
  onDispatchOrder: P.func
};