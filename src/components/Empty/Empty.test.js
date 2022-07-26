import { screen } from "@testing-library/react";
import renderWithTheme from "../../utils/test/renderWithTheme";
import { Empty } from ".";

const mockProps = {
  erroMessage: "bar"
};

describe("<Empty />", () => {
  it("should render search in the document", () => {
    renderWithTheme(<Empty {...mockProps} />);

    expect(screen.getByText("bar")).toBeInTheDocument();
    expect(screen.getByText("Algo errado aconteceu")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
