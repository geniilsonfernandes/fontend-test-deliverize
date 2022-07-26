import styled, { css } from "styled-components";

export const MediaMatch = styled.div`
  ${({ lessThan, greaterThan }) => css`
    display: none;
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

const mediaMatchModifiers = {
  lessThan: (size) => css`
    @media (max-width: ${size}) {
      display: block;
    }
    @media (min-width: ${size}) {
      display: none;
    }
  `,
  greaterThan: (size) => css`
    @media (min-width: ${size}) {
      display: block;
    }
  `
};
