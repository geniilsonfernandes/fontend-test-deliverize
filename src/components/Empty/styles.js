import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 250px;
  }
`;
export const Message = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${theme.colors.black[200]};
    padding: 10px 16px;
    background: ${theme.colors.yallow[400]};
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    text-align: center;
    margin-top: 16px;
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.yallow[100]};
  `}
`;
