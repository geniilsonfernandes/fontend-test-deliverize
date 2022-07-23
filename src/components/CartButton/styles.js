import styled, { css } from "styled-components";
import { ButtonWrapper } from "../ButtonWrapper";

export const Icon = styled.div`
  position: relative;
`;
export const Wrapper = styled(ButtonWrapper)`
  position: relative;
  height: 48px;
`;

export const Ribbon = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    color: ${theme.colors.white[100]};
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1rem;
    background: ${theme.colors.yallow[100]};
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    right: -5px;
    top: -5px;
  `}
`;

export const PopUp = styled.div`
  position: absolute;

  top: 62px;
  right: 0;
  animation: intoUp 200ms ease-in-out forwards;

  @keyframes intoUp {
    from {
      transform: translateY(-20px);
      opacity: 0.8;
    }
    to {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }
`;
