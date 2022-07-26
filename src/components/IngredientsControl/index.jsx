import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../Icons";
import { convertNumberToCurrency } from "../../utils/convertNumberToCurrency";
import P from "prop-types";

import * as S from "./styles";

export const IngredientsControl = ({
  onIncremental,
  onDecremental,
  onCounter,
  limiter,
  label,
  price,
  itemCounter,
  max
}) => {
  const [counter, setCounter] = useState(0);

  
  const createIngredient = (key, quant, value) => ({
    [key.replace(" ", "-")]: {
      amount: quant,
      price: value,
      name: key
    }
  })

  const handleIncremental = () => {
    if (itemCounter < max) {
      setCounter((s) => s + 1);
      onCounter(limiter - 1);
      onIncremental(createIngredient(label, counter + 1, price))
    }
  };

  const handleDecremental = () => {
    if (counter > 0) {
      setCounter((s) => s - 1);
      onCounter(limiter + 1);
      onDecremental(createIngredient(label, counter - 1, price))
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.Description>
          <S.Label>{label}</S.Label>
          <S.Price>
            <span>+</span>
            {convertNumberToCurrency(
              price * counter === 0 ? price : price * counter,
              "BRL"
            )}
          </S.Price>
        </S.Description>

        <S.CounterControl aria-label={`quantidade de items para ${label}`}>
          <S.Control
            onClick={() => handleDecremental()}
            aria-label="remover"
            isDisabled={counter === 0}
          >
            <AddIcon />
          </S.Control>
          <S.Counter aria-label="quantidade">{counter}</S.Counter>
          <S.Control
            onClick={() => handleIncremental()}
            aria-label="adicionar"
            isDisabled={itemCounter === max}
          >
            <RemoveIcon />
          </S.Control>
        </S.CounterControl>
      </S.Content>
    </S.Wrapper>
  );
};

IngredientsControl.propTypes = {
  onIncremental: P.func,
  onDecremental: P.func,
  onCounter: P.func,
  limiter: P.number,
  itemCounter: P.number,
  max: P.number,
  price: P.number.isRequired,
  label: P.string.isRequired
};
