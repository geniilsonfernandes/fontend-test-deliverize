import React from "react";
import P from "prop-types";
import { ButtonWrapper } from "../ButtonWrapper";
import { UserIcon } from "../../Icons";

import * as S from "./styles";

export const UserAuth = ({ user }) => {
  if (user) {
    return (
      <ButtonWrapper aria-label="user menu">
        <S.Icon aria-label="user">
          <UserIcon title="user" />
        </S.Icon>
        {user}
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper aria-label="user menu">
        <S.Icon aria-label="user">
          <UserIcon title="user" />
        </S.Icon>
        Entrar
      </ButtonWrapper>
    );
  }
};

UserAuth.propTypes = {
  user: P.string
};
