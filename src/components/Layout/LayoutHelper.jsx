import styled, { css } from "styled-components";

export const LayoutBox = styled.div`
  ${({ theme }) => css`
    padding: 10px 16px;
    background: ${theme.colors.yallow[400]};
    display: flex;
    justify-content: space-between;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    height: 40px;
    padding: 10px 16px;
    background: ${theme.colors.yallow[100]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.radius};

    font-weight: 500;
    font-size: ${theme.fontSizes.small};
    border: none;
    color: ${theme.colors.white[100]};
    cursor: pointer;
    transition: background ease-in-out 200ms;
    :hover {
      background: ${theme.colors.yallow[200]};
    }
    :active {
      transform: scale(0.98);
    }
  `}
`;

export const Container = css`
  ${({ theme }) => css`
    max-width: 1216px;
    margin: 0 auto;
    @media (max-width: ${theme.media.small}) {
      padding-left: 16px;
      padding-right: 16px;
    }
  `}
`;
