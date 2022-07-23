import styled, { css } from "styled-components";

export const MediaMatch = styled.div`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

const mediaMatchModifiers = {
  // quando a tela é menor que x o tem dentro será exebido
  lessThan: (size) => css`
    @media (max-width: ${size}) {
      display: block;
    }
    @media (min-width: ${size}) {
      display: none;
    }
  `,
  // quando a tela é maior que x o item sera exibido
  greaterThan: (size) => css`
    @media (min-width: ${size}) {
      display: block;
    }
  `
};
