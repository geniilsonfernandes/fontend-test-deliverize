import React, { useState } from "react";
import P from "prop-types";

import * as S from "./styles";

export const Search = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    value && onSubmit(value);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Busque por estabelecimento ou produtos"
        onChange={(e) => setValue(e.target.value)}
      />
    </S.Wrapper>
  );
};
Search.propTypes = {
  onSubmit: P.func
};
