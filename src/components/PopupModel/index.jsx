import React from "react";
import P from "prop-types";

import * as S from "./styles";

export const PopupModel = ({ children, label, arrowPosition = "left" }) => {
  return (
    <S.Wrapper>
      <S.Arrow position={arrowPosition}></S.Arrow>
      <S.Label>{label}</S.Label>
      {children}
    </S.Wrapper>
  );
};

PopupModel.propTypes = {
  children: P.node,
  label: P.string,
  arrowPosition: P.oneOf(["left", "center", "right"])
};
