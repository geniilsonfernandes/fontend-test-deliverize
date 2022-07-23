import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  onSubmit: jest.fn()
};

describe("<Address />", () => {
  it("should render search in the document", () => {
    renderWithTheme(<Search {...mockProps} />);

    expect(
      screen.getByPlaceholderText("Busque por estabelecimento ou produtos")
    ).toBeInTheDocument();
  });
  it("should type x burguer in input", () => {
    renderWithTheme(<Search {...mockProps} />);

    const input = screen.getByPlaceholderText(
      "Busque por estabelecimento ou produtos"
    );

    userEvent.type(input, "x burguer");
    expect(input).toHaveValue("x burguer");
  });
  it("should submit value when enter click", () => {
    renderWithTheme(<Search {...mockProps} />);

    const input = screen.getByPlaceholderText(
      "Busque por estabelecimento ou produtos"
    );

    userEvent.type(input, "x burguer");
    userEvent.keyboard("{enter}")
    
    expect(mockProps.onSubmit).toBeCalledWith("x burguer")
  });
});
