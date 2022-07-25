/* eslint-disable no-unused-vars */
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  act
} from "@testing-library/react";
import { CartButton } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  cartCounter: 2,
  cartNotification: {}
};

export const delay = (milliseconds, fn) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};

describe("<CartButton />", () => {
  jest.useFakeTimers();
  it("should render with props", () => {
    renderWithTheme(<CartButton {...mockProps} />);

    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText("Carrinho")).toBeInTheDocument();
    expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
  });
  it("should render and show popup ", async () => {
    mockProps.cartNotification = { name: "foo" };
    renderWithTheme(<CartButton {...mockProps} />);

    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText("Carrinho")).toBeInTheDocument();
    expect(screen.queryByTestId("popup")).toBeInTheDocument();
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
  it("should render and show popup ", async () => {
    mockProps.cartNotification = { name: "foo" };
    renderWithTheme(<CartButton {...mockProps} />)
    expect(screen.queryByTestId("popup")).toBeInTheDocument();
    expect(screen.getByText(/foo/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    await waitFor(() => {
      expect(screen.queryByText(/foo/i)).not.toBeInTheDocument();
    });
  });
});
