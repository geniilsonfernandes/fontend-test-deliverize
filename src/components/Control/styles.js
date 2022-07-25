import styled, { css } from "styled-components";

export const CounterControl = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.yallow[100]};
    border-radius: ${theme.radius};
    display: inline-flex;
    align-items: center;
    padding: 4px;
    height: 40px;
    width: 100%;
    justify-content: space-between;
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
