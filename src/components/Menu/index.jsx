import React from "react";
import { ArrowIcon, Logo, XisIcon } from "../../Icons";
import { Address } from "../Address";
import { Search } from "../Search";
import { UserAuth } from "../UserAuth";
import { CartButton } from "../CartButton";
import { MediaMatch } from "../MediaMatch";
import theme from "../../styles/theme";
import useMenuToggle from "../../hook/useMenuToggle";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const mockProps = {
  Address: "R. Antonio Braune, 222"
};

export const Menu = () => {
  const navigate = useNavigate()
  const { isVisibility, toggle } = useMenuToggle({ lockBody: true });

  const handleToggleMenu = () => {
    toggle();
  };

  const handleClickCartButton = () => {
    navigate("/cart")
  }
  const handleClickBrand = () => {
    navigate("/")
  }

  return (
    <S.Wrapper_fluid>
      <S.Wrapper aria-label="menu" role="navigation">
        <S.Brand onClick={handleClickBrand}>
          <Logo role="img" title="Deliverize" alt="Deliverize" />
        </S.Brand>

        <MediaMatch greaterThan={theme.media.small}>
          <S.MenuDesktop aria-label="menu desktop">
            <Address currentAddress={mockProps.Address} />
            <Search />
            <UserAuth />
            <CartButton onClick={handleClickCartButton} />
          </S.MenuDesktop>
        </MediaMatch>

        <MediaMatch lessThan={theme.media.small}>
          <S.MenuMobile>
            <S.ArrowLeft
              onClick={() => handleToggleMenu()}
              aria-label="opem menu"
            >
              {isVisibility ? <XisIcon /> : <ArrowIcon />}
            </S.ArrowLeft>
            <CartButton onClick={handleClickCartButton} small />
          </S.MenuMobile>

          <S.MenuFull
            isOpen={isVisibility}
            aria-hidden={!isVisibility}
            aria-label="menu mobile"
          >
            <S.Overlay
              isOpen={isVisibility}
              onClick={() => handleToggleMenu()}
            ></S.Overlay>
            <S.Fullcontent isOpen={isVisibility}>
              <div>
                <Search />
                <div id="address">
                  <Address currentAddress={mockProps.Address} />
                </div>
              </div>
              <div id="user">
                <UserAuth />
              </div>
            </S.Fullcontent>
          </S.MenuFull>
        </MediaMatch>
      </S.Wrapper>
    </S.Wrapper_fluid>
  );
};
