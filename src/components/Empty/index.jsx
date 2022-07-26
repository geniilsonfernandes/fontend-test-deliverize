import React from 'react'
import empty from '../../images/hunger.png'
import P from "prop-types";
import * as S from "./styles";

export const Empty = ({ erroMessage, message }) => {
    return (
        <S.Wrapper>
            <img src={empty} alt="algo errado aconteceu | figura de um prato mordido" />
            <S.Message>{message}</S.Message>
            {erroMessage && <S.Error>{erroMessage}</S.Error>}
        </S.Wrapper>
    )
}

Empty.propTypes = {
    erroMessage: P.string,
    message: P.string
};
