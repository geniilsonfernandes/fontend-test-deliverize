import { screen } from "@testing-library/react";
import { ButtonWrapper } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

describe("<ButtonWrapper />", () => {
  it("should render current place in the document", () => {
    const { container } = renderWithTheme(<ButtonWrapper>foo</ButtonWrapper>);

    expect(screen.getByText("foo")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
