import React, { useEffect, useState } from "react";
import { useOrderContext } from "../../context/orderContext";
import { CartIcon } from "../../Icons";
import { PopupModel } from "../PopupModel";
import { ProductInRaw } from "../ProductInRaw";
import P from "prop-types";

import * as S from "./styles";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export const CartButton = ({ onClick, small = false }) => {
  const { cartNotification, cartLenght, dispatchNotification } = useOrderContext()
  const [showPopop, setShowPopop] = useState(false);

  useEffect(() => {
    !isEmpty(cartNotification) && setShowPopop(true);

    const timer = setTimeout(() => {
      setShowPopop(false);
      dispatchNotification({})
    }, 3000);

    return () => clearTimeout(timer);
  }, [cartNotification, dispatchNotification]);

  const handleCLick = () => {
    onClick()
  }

  return (
    <S.Wrapper aria-label="carrinho" onClick={() => handleCLick()}>
      <S.Icon>
        {cartLenght > 0 && <S.Ribbon>{cartLenght}</S.Ribbon>}
        <CartIcon />
      </S.Icon>
      {!small && 'Carrinho'}
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
  onClick: P.func,
  small: P.bool
};
