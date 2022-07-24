import styled, { css } from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
export const Label = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[300]};
  `}
`;
export const Description = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    margin-top: 4px;
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.yallow[100]};
  `}
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonModifiers = {
  active: (theme) => css`
    background: ${theme.colors.yallow[100]};
    color: ${theme.colors.white[100]};
  `
};
export const Button = styled.button`
  ${({ theme, active }) => css`
    display: block;
    height: 32px;
    padding: 0 8px;
    background: transparent;

    border: 1px solid ${theme.colors.yallow[100]};
    font-size: ${theme.fontSizes.small};
    border-radius: ${theme.radius};
    color: ${theme.colors.yallow[100]};
    transition: background ease-in-out 200ms;
    cursor: pointer;
    :hover {
      background: ${theme.colors.yallow[100]};
      color: ${theme.colors.white[100]};
    }
    ${active && ButtonModifiers.active(theme)}
  `}
`;
