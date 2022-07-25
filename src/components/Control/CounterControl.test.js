import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CounterControl } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  onIncremental: jest.fn(),
  onDecremental: jest.fn(),
  onCounter: () => {},
  limiter: 2
};

describe("<CounterControl />", () => {
  it("should when click on the button (add)and add the value up to the limit", () => {
    renderWithTheme(<CounterControl {...mockProps} />);

    const buttonAdd = screen.getByLabelText("adicionar");
    const counter = screen.getByLabelText("quantidade");

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    expect(mockProps.onIncremental).toBeCalledTimes(2);
    expect(counter).toHaveTextContent("2");
    expect(buttonAdd).toHaveStyle({ opacity: "0.5" });
  });
  it("should when click on the button (remove)and add the value up to the 0", () => {
    renderWithTheme(<CounterControl {...mockProps} />);

    const buttonAdd = screen.getByLabelText("adicionar");
    const buttonRemove = screen.getByLabelText("remover");
    const counter = screen.getByLabelText("quantidade");

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    expect(counter).toHaveTextContent("2");

    userEvent.click(buttonRemove);
    userEvent.click(buttonRemove);
    userEvent.click(buttonRemove);

    expect(mockProps.onDecremental).toBeCalledTimes(2);
    expect(counter).toHaveTextContent("0");
    expect(buttonRemove).toHaveStyle({ opacity: "0.5" });
  });
  it("should starting in 5", () => {
    renderWithTheme(<CounterControl {...mockProps} starting={5} />);
    const counter = screen.getByLabelText("quantidade");
    expect(counter).toHaveTextContent("5");
  });
});
