import styled, { css } from "styled-components";

export const Wrapper = styled.div``;
export const ProductImage = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
    svg {
      width: 200px;
      height: 264px;
      padding: 48px 0;
    }
  `}
`;
export const Description = styled.div`
  ${() => css``}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 100%;
    color: ${theme.colors.black[300]};
    padding: 28px 0;
    @media (max-width: ${theme.media.small}) {
      padding: 16px 0;
      font-size: 1.8rem;
    }
  `}
`;
export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: 2rem;
    color: ${theme.colors.black[300]};
    @media (max-width: ${theme.media.small}) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  `}
`;
export const PriceGroup = styled.div`
  ${({ theme }) => css`
    padding: 16px 0;
    display: flex;
    gap: 16px;
    @media (max-width: ${theme.media.small}) {
      gap: 8px;
    }
  `}
`;
const PriceModifiers = {
  oldPrice: (theme) => css`
    color: ${theme.colors.black[300]};
    opacity: 0.8;
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      left: 0;
      transform: rotate(5deg);
      top: 50%;
      background: ${theme.colors.black[300]};
      position: absolute;
    }
  `
};
export const Price = styled.div`
  ${({ theme, oldPrice }) => css`
    color: ${theme.colors.yallow[100]};
    font-weight: 400;
    font-size: 3.2rem;
    position: relative;
    display: inline;

    ${oldPrice && PriceModifiers.oldPrice(theme)}

    @media (max-width: ${theme.media.small}) {
      font-size: 1.8rem;
    }
  `}
`;
