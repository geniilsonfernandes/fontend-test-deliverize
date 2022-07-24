import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../Icons";
import P from "prop-types";

import * as S from "./styles";
import { convertNumberToCurrency } from "../../utils/convertNumberToCurrency";

export const IngredientsControl = ({
  onAddItem,
  onRemoveItem,
  onCounter,
  limiter,
  label,
  price
}) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    if (counter < limiter) {
      onAddItem();
      setCounter((s) => s + 1);
      onCounter(counter);
    }
  };
  const handleRemove = () => {
    if (counter > 0) {
      onRemoveItem();
      setCounter((s) => s - 1);
      onCounter(counter);
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.Description>
          <S.Label>{label}</S.Label>
          <S.Price>
            <span>+</span> {convertNumberToCurrency(price, "BRL")}
          </S.Price>
        </S.Description>

        <S.CounterControl aria-label="contador">
          <S.Control
            onClick={() => handleRemove()}
            aria-label="remover"
            isDisabled={counter === 0}
          >
            <AddIcon />
          </S.Control>
          <S.Counter aria-label="quantidade">{counter}</S.Counter>
          <S.Control
            onClick={() => handleAdd()}
            aria-label="adicionar"
            isDisabled={counter === limiter}
          >
            <RemoveIcon />
          </S.Control>
        </S.CounterControl>
      </S.Content>
    </S.Wrapper>
  );
};

IngredientsControl.propTypes = {
  onAddItem: P.func,
  onRemoveItem: P.func,
  onCounter: P.func,
  limiter: P.number,
  price: P.number,
  label: P.string
};
