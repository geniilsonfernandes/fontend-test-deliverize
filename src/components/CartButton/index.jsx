import React, { useEffect, useState } from "react";
import { CartIcon } from "../../Icons";
import { PopupModel } from "../PopupModel";
import { ProductInRaw } from "../ProductInRaw";

import P from "prop-types";

import * as S from "./styles";

export const CartButton = ({ counter, product }) => {
  const [showPopop, setShowPopop] = useState(false);

  useEffect(() => {
    product && setShowPopop(true);

    const timer = setTimeout(() => {
      setShowPopop(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <S.Wrapper aria-label="carrinho">
      <S.Icon>
        <S.Ribbon>{counter}</S.Ribbon>
        <CartIcon />
      </S.Icon>
      Carrinho
      {showPopop && (
        <S.PopUp>
          <PopupModel label="Adicionado com Sucesso" arrowPosition="right">
            <ProductInRaw />
          </PopupModel>
        </S.PopUp>
      )}
    </S.Wrapper>
  );
};

CartButton.propTypes = {
  counter: P.number,
  product: P.object
};
