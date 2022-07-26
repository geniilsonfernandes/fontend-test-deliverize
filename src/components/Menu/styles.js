import styled, { css } from "styled-components";
import { ButtonWrapper } from "../ButtonWrapper";

const innerProps = {
  heightMenuDesktop: "80px",
  heightMenuMobile: "56px"
};

export const Wrapper_fluid = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.white[300]};
    box-shadow: ${theme.box_shadow.huge};
  `}
`;
export const Wrapper = styled.nav`
  ${({ theme }) => css`
    max-width: 1216px;
    margin: 0 auto;
    background: ${theme.colors.white[300]};
    height: ${innerProps.heightMenuDesktop};
    display: flex;
    align-items: center;
    padding: 16px 0;
    justify-content: space-between;
    position: relative;

    z-index: 10;
    @media (max-width: ${theme.media.small}) {
      height: ${innerProps.heightMenuMobile};
    }
  `}
`;

export const Brand = styled.div`
  svg {
    height: 100%;
  }
  ${({ theme }) => css`
    @media (max-width: ${theme.media.small}) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      svg {
        width: 150px;
      }
    }
  `}
`;

export const MenuDesktop = styled.div`
  display: grid;
  grid-template-columns: 200px minmax(250px, 350px) 100px minmax(100px, 120px);
  gap: 24px;
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 32px);
`;
export const ArrowLeft = styled(ButtonWrapper)`
  ${({ theme }) => css`
    width: 48px;
    transform: rotate(90deg);
    svg {
      path {
        fill: ${theme.colors.black[300]};
      }
    }
  `}
`;

const MenuFullModifiers = {
  open: () => css`
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  `
};

export const MenuFull = styled.div`
  ${({ isOpen }) => css`
    position: absolute;
    top: ${innerProps.heightMenuMobile};
    width: 100%;
    height: calc(100vh - ${innerProps.heightMenuMobile});
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all cubic-bezier(0.89, 0.13, 0.12, 0.85) 500ms;
    ${!!isOpen && MenuFullModifiers.open()}
  `}
`;
export const Overlay = styled.div`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - ${innerProps.heightMenuMobile});
    background: ${theme.colors.overlay};
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all cubic-bezier(0.89, 0.13, 0.12, 0.85) 200ms;
    ${!!isOpen && MenuFullModifiers.open()}
  `}
`;

const FullcontentModifiers = {
  open: () => css`
    transform: translate3d(0px, 0, 0);
    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  `
};

export const Fullcontent = styled.div`
  ${({ theme, isOpen }) => css`
    width: 80%;
    height: calc(100% - ${innerProps.heightMenuMobile});
    padding: 32px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white[400]};

    transform: translate3d(-80px, 0, 0);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: all cubic-bezier(0.89, 0.13, 0.12, 0.85) 400ms;
    ${!!isOpen && FullcontentModifiers.open()}

    #user {
      margin-top: 10px;
      display: flex;
      justify-content: center;
    }
    #address {
      margin-top: 32px;
      position: relative;
      :after {
        content: "";
        position: absolute;
        width: 75%;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        background: ${theme.colors.black[300]};
        top: -16px;
        z-index: 1;
      }
    }
  `}
`;
