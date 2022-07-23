import React from "react";
import { CartIcon } from "../../Icons";

import * as S from "./styles";

export const CartButton = () => {
  return (
    <S.Wrapper>
      <S.Icon>
        <S.Ribbon>20</S.Ribbon>
        <CartIcon />
      </S.Icon>
      Carrinho
    </S.Wrapper>
  );
};
