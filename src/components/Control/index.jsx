import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../Icons";
import P from "prop-types";

import * as S from "./styles";

export const CounterControl = ({
  onIncremental,
  onDecremental,
  onCounter,
  limiter = Infinity,
  starting = 0,
  ariaLabel
}) => {
  const [counter, setCounter] = useState(starting);

  const handleIncremental = () => {
    if (counter < limiter) {
      onIncremental && onIncremental();
      setCounter((s) => s + 1);
      onCounter(counter + 1);
    }
  };
  const handleDecremental = () => {
    if (counter > starting) {
      onDecremental && onDecremental();
      setCounter((s) => s - 1);
      onCounter(counter - 1);
    }
  };

  return (
    <S.CounterControl aria-label={ariaLabel}>
      <S.Control
        onClick={() => handleDecremental()}
        aria-label="remover"
        isDisabled={counter === starting}
      >
        <AddIcon />
      </S.Control>
      <S.Counter aria-label="quantidade">{counter}</S.Counter>
      <S.Control
        onClick={() => handleIncremental()}
        aria-label="adicionar"
        isDisabled={counter === limiter}
      >
        <RemoveIcon />
      </S.Control>
    </S.CounterControl>
  );
};

CounterControl.propTypes = {
  onIncremental: P.func,
  onDecremental: P.func,
  onCounter: P.func,
  limiter: P.number,
  starting: P.number,
  ariaLabel: P.string
};
