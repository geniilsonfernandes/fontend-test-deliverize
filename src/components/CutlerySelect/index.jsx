import React, { useState } from "react";
import { LayoutBox } from "../Layout/LayoutHelper";
import P from "prop-types";

import * as S from "./styles";

export const CutlerySelect = ({ onSelect }) => {
  const [select, setSelect] = useState(null);

  const onChange = (value) => {
    setSelect(value);
    !!onSelect && onSelect({ cutlery: value });
  };

  return (
    <LayoutBox>
      <S.Content>
        <S.Label>Precisa de Talher?</S.Label>
      </S.Content>
      <S.ButtonsGroup>
        <S.Button
          name="talheres"
          active={select === "Sim"}
          onClick={({ target }) => onChange(target.textContent)}
        >
          Sim
        </S.Button>
        <S.Button
          name="talheres"
          active={select === "Não"}
          onClick={({ target }) => onChange(target.textContent)}
        >
          Não
        </S.Button>
      </S.ButtonsGroup>
    </LayoutBox>
  );
};

CutlerySelect.propTypes = {
  onSelect: P.func
};
