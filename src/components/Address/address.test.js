import { screen } from "@testing-library/react";
import { Address } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  currentAddress: "R. Antonio Braune, 222"
};

describe("<Address />", () => {
  it("should render current place in the document", () => {
    renderWithTheme(<Address {...mockProps} />);

    expect(screen.getByText(mockProps.currentAddress)).toBeInTheDocument();
  });
});
