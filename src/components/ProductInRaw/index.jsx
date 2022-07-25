import React from "react";
import P from "prop-types";

import * as S from "./styles";

export const ProductInRaw = ({ order, name }) => {
  return (
    <S.ProductInRaw>
      <h2>{name}</h2>
      {order.length > 0 && <span>Ingredientes:</span>}
      <ul>
        {order.map((item, i) => (
          <li key={`${item.name}-${i}`}>
            {item.amount <= 1 ? "" : item.amount} {item.name}
          </li>
        ))}
      </ul>
    </S.ProductInRaw>
  );
};

ProductInRaw.propTypes = {
  order: P.array,
  name: P.string
};