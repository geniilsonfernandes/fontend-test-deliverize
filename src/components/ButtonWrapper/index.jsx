import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    height: 48px;
    border-radius: ${theme.radius};
    transition: all ease-in-out 200ms;
    background: transparent;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.red[100]};
    border: none;
    :hover {
      cursor: pointer;
      background: ${theme.colors.white[300]};
    }
  `}
`;
