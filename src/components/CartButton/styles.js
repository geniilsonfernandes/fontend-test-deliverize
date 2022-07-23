import styled, { css } from "styled-components";
import { ButtonWrapper } from "../ButtonWrapper";

export const Icon = styled.div`
  position: relative;
`;
export const Wrapper = styled(ButtonWrapper)`
  position: relative;
`;

export const Ribbon = styled.div`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background: ${theme.colors.yallow[100]};
    color: ${theme.colors.white[100]};
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.0rem;

    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    right: -5px;
    top: -5px;
  `}
`;
