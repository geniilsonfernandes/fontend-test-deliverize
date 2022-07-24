import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    ${({ theme }) => css`
      font-weight: 400;
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.black[300]};
    `}
  }
  input {
    ${({ theme }) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      width: 16px;
      height: 16px;
      border: 1px solid ${theme.colors.yallow[100]};
      border-radius: 50%;
      background: transparent;
      transition: background ease-in-out 200ms;
      outline: none;
      cursor: pointer;
      &:focus {
        box-shadow: 0 0 0.5rem ${theme.colors.yallow[100]};
      }
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${theme.colors.yallow[100]};
        transition: opacity ease-in-out 200ms;
        opacity: 0;
        position: absolute;
      }
      &:checked {
        &:before {
          opacity: 1;
        }
      }
    `}
  }
`;
