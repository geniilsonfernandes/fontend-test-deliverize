import React from "react";
import P from "prop-types";
import { Menu } from "../../components/Menu";

export const Base = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

Base.propTypes = {
  children: P.node
};
