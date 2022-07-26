import { screen, waitFor, act } from "@testing-library/react";
import { CartButton } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  cartLenght: 2,
  cartNotification: { name: "foo" },
  dispatchNotification: jest.fn()
};

jest.mock("../../context/orderContext", () => {
  return {
    __esModule: true,
    useOrderContext: () => {
      return {
        ...mockProps
      };
    }
  };
});

describe("<CartButton />", () => {
  jest.useFakeTimers();
  it("should render with props", () => {
    renderWithTheme(<CartButton {...mockProps} />);

    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText("Carrinho")).toBeInTheDocument();
  });
  it("should render and show popup ", async () => {
    mockProps.cartNotification = { name: "foo" };
    renderWithTheme(<CartButton {...mockProps} />);

    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText("Carrinho")).toBeInTheDocument();
    expect(screen.queryByTestId("popup")).toBeInTheDocument();
    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
  it("should button small ", async () => {
    mockProps.cartNotification = { name: "foo" };
    renderWithTheme(<CartButton {...mockProps} small />);

    expect(screen.queryByText("Carrinho")).not.toBeInTheDocument();
  });
  it("should render and show popup ", async () => {
    mockProps.cartNotification = { name: "foo" };
    renderWithTheme(<CartButton {...mockProps} />);
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
