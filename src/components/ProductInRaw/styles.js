import styled from "styled-components";

export const ProductInRaw = styled.div`
  text-align: initial;
  padding: 8px;
  h2 {
    font-weight: 700;
    font-size: 1.4rem;
    color: #bc2e31;
  }
  span {
    font-size: 1.2rem;
    color: #4e4e4e;
    display: block;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  ul {
    list-style: none;
    li {
      font-size: 1.2rem;
      color: #4e4e4e;
      ::before {
        content: "+";
        padding: 0 8px;
      }
      &:not(:last-child) {
        padding-bottom: 4px;
      }
    }
  }
`;
