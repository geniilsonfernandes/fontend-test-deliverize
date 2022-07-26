import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../hook/useAxiosFetch";
import { Base } from "../Base";
import { useOrderContext } from "../../context/orderContext";
import { OrderList } from "../../components/OrderList";
import OrderSkeleton from "../../components/OrderList/Order.skeleton";
import { Product } from "../../components/Product";
import ProductSkeleton from "../../components/Product/Product.skeleton";

import * as S from "./styles";

import mock from "../../components/Product/mock";
import useDocumentTitle from "../../hook/useDocumentTitle";

export const ProductSingle = () => {
  const { setTitle } = useDocumentTitle()
  const { isLoading, data } = useAxiosFetch(process.env.REACT_APP_URL_GET_PRODUCT)
  const { addOrderToCart } = useOrderContext();
  const [product, setProduct] = useState({})
  const [items, setItems] = useState({})


  useEffect(() => {
    const { ingredients, ...rest } = { ...data[0] };
    if (rest.nm_product) {
      setProduct({
        name: rest.nm_product,
        price: rest.vl_price,
        description: rest.description,
        promotionalPrice: rest.vl_discount,
      })
      setItems({
        itemsLimiter: ingredients[0].max_itens,
        itens: ingredients[0].itens.map(i => ({
          label: i.nm_item,
          price: i.vl_item
        }))
      })
      setTitle(rest.nm_product)
    }
  }, [data, setTitle])

  const dispatchOrder = (order) => {
    addOrderToCart({
      ...order,
      name: mock.name,
      uid: `uid${new Date().getTime()}`,
      price: mock.price
    });
  };

  return (
    <Base>
      <S.Main>
        {isLoading ?
          <ProductSkeleton />
          :
          <Product {...product} url={mock.url} />
        }
        {isLoading ?
          <OrderSkeleton />
          :
          <OrderList
            onDispatchOrder={dispatchOrder}
            itemsLimiter={items.itemsLimiter}
            items={items.itens}
          />
        }
      </S.Main>
    </Base>
  );
};
