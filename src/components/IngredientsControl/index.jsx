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

  const handleIncremental = () => {
    if (itemCounter < max) {
      setCounter((s) => s + 1);
      onCounter(limiter - 1);
      onIncremental({
        [label.replace(" ", "-")]: {
          amount: counter + 1,
          price: price
        }
      });
    }
  };
  const handleDecremental = () => {
    if (counter > 0) {
      setCounter((s) => s - 1);
      onCounter(limiter + 1);
      onDecremental({
        [label.replace(" ", "-")]: {
          amount: counter - 1,
          price: price
        }
      });
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
