import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    height: 48px;
    box-shadow: ${theme.box_shadow.small};
    border-radius: ${theme.radius};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all ease-in-out 200ms;
    position: relative;
    z-index: 1;
    background: ${theme.colors.white[100]};
    cursor: pointer;
    :hover {
      background: ${theme.colors.white[200]};
    }
  `}
`;
export const Content = styled.div``;
export const Label = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.red[100]};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
  `}
`;

export const Address = styled.div`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.black[300]};
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 4px;
  `}
`;

export const Icon = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
  transition: all ease-in-out 200ms;
  ::after {
    content: "";
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.white[500]};
    position: absolute;
    z-index: -1;
    border-radius: 24px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    top: 0;
    transition: opacity ease-in-out 300ms;
  }
  :hover::after {
    opacity: 1;
  }
  :active {
    transform: scale(0.8);
  }
`;
