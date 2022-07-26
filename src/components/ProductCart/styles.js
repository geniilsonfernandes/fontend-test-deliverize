import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.black[200]};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${theme.media.small}) {
      flex-wrap: wrap;
      align-items: start;
    }
    > div {
      display: flex;
      gap: 32px;
      @media (max-width: ${theme.media.small}) {
        flex-wrap: wrap;
        gap: 16px;
      }
    }
  `}
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const Amount = styled.div`
  ${({ theme }) => css`
    font-weight: 500;
    padding-bottom: 4px;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.black[300]};
    position: relative;
    ::after {
      content: "";
      width: 1px;
      height: 80%;
      background: ${theme.colors.black[200]};
      position: absolute;
      right: -16px;
    }
  `}
`;
export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: 500;
    padding-bottom: 4px;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.black[300]};
  `}
`;
export const Additions = styled.div`
  ${({ theme }) => css`
    ul {
      list-style: none;
      padding-top: 8px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px 16px;
      li {
        font-weight: 500;
        font-size: ${theme.fontSizes.xsmall};
        color: ${theme.colors.black[300]};
      }
      @media (max-width: ${theme.media.small}) {
        grid-template-columns: 1fr 1fr;
        gap: 8px 8px;
      }
    }
  `}
`;
export const SubTitle = styled.div`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    margin-top: 4px;
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.yallow[100]};
  `}
`;
