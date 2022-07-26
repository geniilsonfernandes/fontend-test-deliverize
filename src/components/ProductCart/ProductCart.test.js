import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCart } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const additionalMock = [
  { amount: 1, price: 4.99, name: "Queijo Cheddar" },
  { amount: 1, price: 1.5, name: "Cebola Crispy" }
];

const mockProps = {
  additional: additionalMock,
  name: "Oferta Picanha Cheddar Bacon",
  amount: 1,
  price: 34.95,
  uid: "uid1658815139448",
  onRemoveItem: jest.fn()
};

describe("<ProductCart />", () => {
  it("should render ProductCart with props", () => {
    renderWithTheme(<ProductCart {...mockProps} />);

    expect(
      screen.getByText("Oferta Picanha Cheddar Bacon")
    ).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("1 Queijo Cheddar")).toBeInTheDocument();
    expect(screen.getByText("1 Cebola Crispy")).toBeInTheDocument();
    const list = screen.getByLabelText("ingredientes").parentElement.firstChild;

    expect(screen.getByLabelText("ingredientes")).toBeInTheDocument();
    expect(list.childNodes.length).toBe(1);
  });
  it("should not have additional and dont render label", () => {
    renderWithTheme(<ProductCart {...mockProps} additional={[]} />);

    expect(
      screen.getByText("Oferta Picanha Cheddar Bacon")
    ).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("Adicionais:")).not.toBeInTheDocument();
  });
  it("should click in button and with uid", () => {
    renderWithTheme(<ProductCart {...mockProps} additional={[]} />);

    userEvent.click(screen.getByRole("button", { name: "Remover Item" }));
    expect(mockProps.onRemoveItem).toBeCalledWith("uid1658815139448");
  });
});
