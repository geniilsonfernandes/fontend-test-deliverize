/* eslint-disable no-unused-vars */
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OrderList } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockItems = [
  {
    label: "item 1",
    price: 2.5
  },
  {
    label: "item 2",
    price: 3
  }
];

const mockProps = {
  itemsLimiter: 8,
  items: mockItems,
  onDispatchOrder: jest.fn()
};

describe("<IngredientsControl />", () => {
  it("should render with props", () => {
    renderWithTheme(<OrderList {...mockProps} />);

    expect(screen.getByText("Adicionar Ingredientes")).toBeInTheDocument();
    expect(screen.getByText("Precisa de Talher?")).toBeInTheDocument();
    expect(
      screen.getByText(`Até ${mockProps.itemsLimiter} ingredientes.`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Adicionar" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("quantidade de produtos")).toBeInTheDocument();
  });

  it("should render 2 items ", () => {
    renderWithTheme(<OrderList {...mockProps} />);

    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.getByText("item 2")).toBeInTheDocument();
  });

  it("should add and remove item and submit order ", () => {
    renderWithTheme(<OrderList {...mockProps} />);

    const item1 = screen.getByLabelText("quantidade de items para item 1");

    const buttonAdd = item1.childNodes[2];
    const quant = item1.childNodes[1];
    const submit = screen.getByRole("button", { name: "Adicionar" });
    const buttonRemove = item1.childNodes[0];

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);

    expect(quant.textContent).toBe("2");

    userEvent.click(buttonRemove);
    userEvent.click(buttonRemove);

    expect(quant.textContent).toBe("0");

    userEvent.click(submit);
    expect(mockProps.onDispatchOrder).toBeCalled();
  });

  it("should submit order with values", () => {
    renderWithTheme(<OrderList {...mockProps} />);

    const item1 = screen.getByLabelText("quantidade de items para item 1");

    const buttonAdd = item1.childNodes[2];
    const quant = item1.childNodes[1];
    const submit = screen.getByRole("button", { name: "Adicionar" });
    const quantity = screen.getByLabelText("quantidade de produtos");
    const hasCutlery =
      screen.getByText("Precisa de Talher?").parentElement.nextSibling;

    userEvent.click(buttonAdd);
    userEvent.click(buttonAdd);
    userEvent.click(hasCutlery.childNodes[0]);
    userEvent.click(quantity.childNodes[2]);

    expect(quant.textContent).toBe("2");

    userEvent.click(submit);
    expect(mockProps.onDispatchOrder).toBeCalledWith({
      needCutlery: { cutlery: "Sim" },
      orderQuantity: 2,
      additional: [{ amount: 2, price: 2.5, name: "item 1" }]
    });
  });
});
