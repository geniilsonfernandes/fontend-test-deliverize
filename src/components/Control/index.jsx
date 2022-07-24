import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../Icons";
import P from "prop-types";

import * as S from "./styles";

export const CounterControl = ({
  onIncremental,
  onDecremental,
  onCounter,
  limiter
}) => {
  const [counter, setCounter] = useState(0);

  const handleIncremental = () => {
    if (counter < limiter) {
      onIncremental();
      setCounter((s) => s + 1);
      onCounter(counter);
    }
  };
  const handleDecremental = () => {
    if (counter > 0) {
      onDecremental();
      setCounter((s) => s - 1);
      onCounter(counter);
    }
  };

  return (
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
  limiter: P.number.isRequired
};