import styled, { css } from "styled-components";
import { Container } from "../../components/Layout/LayoutHelper";

export const Main = styled.div`
  ${({ theme }) => css`
    ${Container}
    padding: 64px 16px;
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 96px;

    @media (max-width: ${theme.media.small}) {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 64px 16px;
    }
  `}
`;
