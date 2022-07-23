import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white[100]};
    box-shadow: ${theme.box_shadow.small};
    border-radius: ${theme.radius};
    position: relative;
  `}
`;

const ArrowModifier = {
  left: () =>
    css`
      left: 0;
    `,
  center: () => css`
    left: 50%;
    transform: translateX(50%);
  `,
  right: () => css`
    right: 0;
  `
};
export const Arrow = styled.span`
  ${({ theme, position }) => css`
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${theme.colors.yallow[100]};
    ${position && ArrowModifier[position]()}
  `}
`;
export const Label = styled.div`
  ${({ theme }) => css`
    padding: 8px 10px;
    font-family: "Roboto Condensed", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    background: ${theme.colors.yallow[100]};
    color: ${theme.colors.white[100]};
    text-align: center;
    border-radius: ${theme.radius} ${theme.radius} 0 0;
  `}
`;
