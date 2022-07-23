import React from "react";
import { ArrowIcon } from "../../Icons";
import P from "prop-types";

import * as S from "./styles";

export const Address = ({ currentAddress }) => {
  return (
    <S.Wrapper tabIndex="1" aria-label="address" role="button">
      <S.Content>
        <S.Label>Entrega:</S.Label>
        <S.Address>{currentAddress}</S.Address>
      </S.Content>
      <S.Icon aria-label="open address">
        <ArrowIcon />
      </S.Icon>
    </S.Wrapper>
  );
};

Address.propTypes = {
  currentAddress: P.string
};
