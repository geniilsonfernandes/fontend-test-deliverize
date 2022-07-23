import { screen } from "@testing-library/react";
import { PopupModel } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  label: "foo"
};

describe("<PopupModel />", () => {
  it("should render PopupModel correctly", () => {
    renderWithTheme(
      <PopupModel {...mockProps}>
        <span>this is an popup</span>{" "}
      </PopupModel>
    );

    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
    expect(
      screen.getByText(mockProps.label).previousElementSibling
    ).toHaveStyle({ left: "0" });
    expect(screen.getByText(/this is an popup/i)).toBeInTheDocument();
  });
  it("should render PopupModel with arrow in center", () => {
    renderWithTheme(
      <PopupModel {...mockProps} arrowPosition="center">
        <span>this is an popup</span>
      </PopupModel>
    );

    expect(
      screen.getByText(mockProps.label).previousElementSibling
    ).toHaveStyle({ left: "50%" });
  });
  it("should render PopupModel with arrow in right", () => {
    renderWithTheme(
      <PopupModel {...mockProps} arrowPosition="right">
        <span>this is an popup</span>
      </PopupModel>
    );

    expect(
      screen.getByText(mockProps.label).previousElementSibling
    ).toHaveStyle({ right: "0" });
  });
});
