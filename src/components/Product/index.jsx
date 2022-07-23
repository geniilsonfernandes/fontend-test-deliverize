import React from "react";
import P from "prop-types";
import { convertNumberToCurrency } from "../../utils/convertNumberToCurrency";
import { EmptyIcon } from "../../Icons";

import * as S from "./styles";

export const Product = ({
  url,
  name,
  description,
  price,
  promotionalPrice
}) => {
  return (
    <S.Wrapper>
      <S.ProductImage>
        {url ? (
          <img src={url} alt={description} />
        ) : (
          <EmptyIcon title="Foto do produto não encontrada" />
        )}
      </S.ProductImage>
      <S.Description aria-label="descrição do produto">
        <S.Title>{name}</S.Title>
        <S.Excerpt>{description}</S.Excerpt>
      </S.Description>
      <S.PriceGroup aria-label="preços do produto">
        {promotionalPrice ? (
          <>
            <S.Price aria-label="preço promocional">
              {convertNumberToCurrency(promotionalPrice, "BRL")}
            </S.Price>
            <S.Price oldPrice aria-label="preço sem desconto">
              {convertNumberToCurrency(price, "BRL")}
            </S.Price>
          </>
        ) : (
          <S.Price aria-label="preço">
            {convertNumberToCurrency(price, "BRL")}
          </S.Price>
        )}
      </S.PriceGroup>
    </S.Wrapper>
  );
};

Product.propTypes = {
  url: P.string,
  name: P.string,
  description: P.string,
  price: P.number,
  promotionalPrice: P.number
};
