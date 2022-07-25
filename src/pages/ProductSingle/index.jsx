import React from "react";
import { Base } from "../Base";
import { Product } from "../../components/Product";
import { OrderList } from "../../components/OrderList";

import * as S from "./styles";

import mock from "../../components/Product/mock";
const mockItems = [1, 2, 3, 4];

export const ProductSingle = () => {
  const DispatchOrder = () => {};

  return (
    <Base>
      <S.Main>
        <Product {...mock} />
        <OrderList
          items={mockItems}
          onDispatchOrder={DispatchOrder}
          itemsLimiter={8}
        />
      </S.Main>
    </Base>
  );
};
