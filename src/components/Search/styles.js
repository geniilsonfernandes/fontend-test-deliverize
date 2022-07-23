import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${({ theme }) => css`
    height: 48px;
    border-radius: ${theme.radius};
    transition: all ease-in-out 200ms;
    background: ${theme.colors.white[100]};
    border: 1px solid ${theme.colors.white[300]};
    input {
      border-radius: ${theme.radius};
      padding: 0 8px;
      height: 100%;
      width: 100%;
      border: none;
      background: none;
      :focus {
        outline: 2px solid ${theme.colors.red[100]};
      }
    }
  `}
`;
