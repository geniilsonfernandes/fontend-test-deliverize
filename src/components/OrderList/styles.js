import styled, { css } from "styled-components";
import { LayoutBox } from "../Layout/LayoutHelper";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.black[200]};
    border-radius: 8px;
    padding: 32px;
  `}
`;

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    padding-bottom: 16px;
`;

export const Head = styled(LayoutBox)`
  display: block;
`;

export const Label = styled.h2`
  ${({ theme }) => css`
    font-weight: 500;
    padding-bottom: 4px;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.black[300]};
  `}
`;
export const Description = styled.span`
  ${({ theme }) => css`
    display: block;
    font-weight: 400;
    margin-top: 4px;
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.yallow[100]};
  `}
`;

export const Dispatch = styled.div`
  padding-top: 24px;
  display: grid;
  grid-template-columns: calc(40% - 8px) calc(60% - 8px);
  gap: 16px;
`;
