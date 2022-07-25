import React, { useEffect, useState } from "react";
import P from "prop-types";
import { CartIcon } from "../../Icons";
import { PopupModel } from "../PopupModel";
import { ProductInRaw } from "../ProductInRaw";

import * as S from "./styles";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const CartButton = ({ cartCounter, cartNotification }) => {

  const [showPopop, setShowPopop] = useState(false);

  useEffect(() => {
    !isEmpty(cartNotification) && setShowPopop(true);

    const timer = setTimeout(() => {
      setShowPopop(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [cartNotification]);






  return (
    <S.Wrapper aria-label="carrinho">
      <S.Icon>
        {cartCounter > 0 && <S.Ribbon>{cartCounter}</S.Ribbon>}
        <CartIcon />
      </S.Icon>
      Carrinho
      {showPopop && (
        <S.PopUp data-testid="popup">
          <PopupModel label="Adicionado com Sucesso" arrowPosition="right">
            <ProductInRaw
              order={cartNotification.additional}
              name={`${cartNotification.orderQuantity} ${cartNotification.name}`}
            />
          </PopupModel>
        </S.PopUp>
      )}
    </S.Wrapper>
  );
};




CartButton.propTypes = {
  cartCounter: P.number,
  cartNotification: P.object
};
