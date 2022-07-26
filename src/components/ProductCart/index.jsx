import React from 'react'
import { Button } from "../Layout/LayoutHelper";
import P from "prop-types";
import * as S from './styles'

export const ProductCart = ({ amount, name, additional, uid, onRemoveItem }) => {
    const handleRemoveClick = (value) => {
        onRemoveItem(value)
    }
    return (
        <S.Wrapper>
            <div>
                <S.Head>
                    <S.Amount>{amount}</S.Amount>
                    <S.Title>{name}</S.Title>
                </S.Head>
                <S.Additions>
                    <S.SubTitle>Adicionais:</S.SubTitle>
                    <ul>
                        {additional && additional.map((v, i) => <li key={i}>{v.amount} {v.name}</li>)}
                    </ul>
                </S.Additions>
            </div>
            <Button onClick={() => handleRemoveClick(uid)}>Remover Item</Button>
        </S.Wrapper>
    )
}

ProductCart.propTypes = {
    amount: P.number,
    name: P.string,
    uid: P.string,
    additional: P.array,
    onRemoveItem: P.func
};








