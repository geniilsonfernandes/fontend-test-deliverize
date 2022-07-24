import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  onCheck: jest.fn(),
  label: "campos",
  labelFor: "campos",
  name: "city",
  value: "campos"
};

describe("<Radio />", () => {
  it("should render Radio with label and dispatch onCheck ", () => {
    renderWithTheme(<Radio {...mockProps} />);

    const label = screen.getByText("campos");
    const radio = screen.getByRole("radio", { name: "campos" });

    userEvent.click(label);
    expect(mockProps.onCheck).toBeCalledWith("campos");
    expect(radio).toBeChecked();
  });
});
