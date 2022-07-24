import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    height: 80px;
    border-radius: ${theme.radius};
  `}
`;
export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Label = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 1.6rem;
    color: ${theme.colors.black[300]};
  `}
`;
export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.yallow[100]};
    font-weight: 500;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      width: 16px;
      height: 16px;
      color: ${theme.colors.white[100]};
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1rem;
      background: ${theme.colors.yallow[100]};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 11px;
    }
  `}
`;

export const CounterControl = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.yallow[100]};
    border-radius: ${theme.radius};
    display: inline-flex;
    padding: 4px;
  `}
`;

const ControlModifiers = {
  disabled: (theme) => css`
    opacity: 0.5;
    user-select: none;
    cursor: not-allowed;
    svg {
      path {
        fill: ${theme.colors.black[300]};
      }
    }
  `
};
export const Control = styled.button`
  ${({ theme, isDisabled }) => css`
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    ${isDisabled && ControlModifiers.disabled(theme)}
    :active {
      transform: scale(0.8);
    }
  `}
`;

export const Counter = styled.span`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.6rem;
    color: ${theme.colors.black[300]};
  `}
`;
