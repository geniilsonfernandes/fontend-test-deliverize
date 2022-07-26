import styled, { css } from "styled-components";
import { Container } from "../../components/Layout/LayoutHelper";

export const Main = styled.div`
  ${() => css`
    ${Container}
  `}
`;

export const Head = styled.div`
  ${({ theme }) => css`
    ${Container}
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 100%;
    color: ${theme.colors.black[300]};
    padding: 68px 0;
    @media (max-width: ${theme.media.small}) {
      padding: 16px 0;
      font-size: 1.8rem;
    }
  `}
`;
export const Cart = styled.div`
  ${() => css`
    ${Container}
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  `}
`;
