import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CutlerySelect } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  onSelect: jest.fn()
};

describe("<IngredientsControl />", () => {
  it("should render and select sim Button", () => {
    renderWithTheme(<CutlerySelect {...mockProps} />);

    const buttonYes = screen.getByText("Sim");
    const buttonNo = screen.getByText("Não");

    expect(buttonYes).toBeInTheDocument();
    expect(buttonNo).toBeInTheDocument();

    userEvent.click(buttonYes);

    expect(mockProps.onSelect).toBeCalledWith({ cutlery: "Sim" });

    userEvent.click(buttonNo);

    expect(mockProps.onSelect).toBeCalledWith({ cutlery: "Não" });
  });
});
