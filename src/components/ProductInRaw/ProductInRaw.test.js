import { screen } from "@testing-library/react";
import { ProductInRaw } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  name: "foo",
  order: [
    {
      amount: 1,
      name: "item 1"
    },
    {
      amount: 2,
      name: "item 2"
    }
  ]
};

describe("<CartButton />", () => {
  jest.useFakeTimers();
  it("should render with props", () => {
    renderWithTheme(<ProductInRaw {...mockProps} />);

    expect(screen.getByText("foo")).toBeInTheDocument();
    expect(screen.getByText("Ingredientes:")).toBeInTheDocument();
    expect(screen.getByText("item 1")).toBeInTheDocument();
    expect(screen.getByText("2 item 2")).toBeInTheDocument();
  });
  it("should hidden Ingredientes: when dont have order", () => {
    renderWithTheme(<ProductInRaw {...mockProps} order={[]} />);

    expect(screen.getByText("foo")).toBeInTheDocument();
    expect(screen.queryByText("Ingredientes:")).not.toBeInTheDocument();
  });
});
