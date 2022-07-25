import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IngredientsControl } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  onIncremental: jest.fn(),
  onDecremental: jest.fn(),
  onCounter: () => {},
  itemCounter: 2,
  limiter: 2,
  price: 4.99,
  max: 3,
  label: "Queijo cheddar"
};

describe("<IngredientsControl />", () => {
  it("should render with props", () => {
    renderWithTheme(<IngredientsControl {...mockProps} />);

    expect(screen.getByText("Queijo cheddar")).toBeInTheDocument();
    expect(screen.getByText(`R$ 4,99`)).toBeInTheDocument();
  });
  it("should when click on the button (add)and add the value up to the limit", () => {
    renderWithTheme(<IngredientsControl {...mockProps} />);

    const buttonAdd = screen.getByLabelText("adicionar");
    const counter = screen.getByLabelText("quantidade");

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    expect(mockProps.onIncremental).toBeCalledTimes(2);
    expect(counter).toHaveTextContent("2");
    //expect(buttonAdd).toHaveStyle({ opacity: "0.5" });
  });

  it("should button add is disabled", () => {
    mockProps.itemCounter = 3;
    renderWithTheme(<IngredientsControl {...mockProps} />);

    const buttonAdd = screen.getByLabelText("adicionar");

    userEvent.click(buttonAdd);

    expect(mockProps.onIncremental).not.toBeCalled();

    expect(buttonAdd).toHaveStyle({ opacity: "0.5" });
  });

  it("should when click on the button (remove)and add the value up to the 0", () => {
    mockProps.itemCounter = 2;
    renderWithTheme(<IngredientsControl {...mockProps} />);

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
});
