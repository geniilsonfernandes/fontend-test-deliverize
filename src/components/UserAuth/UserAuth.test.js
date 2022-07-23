import { screen } from "@testing-library/react";
import { UserAuth } from ".";
import renderWithTheme from "../../utils/test/renderWithTheme";

const mockProps = {
  user: "foo"
};

describe("<UserAuth />", () => {
  it("should render text 'entrar' when withou user", () => {
    renderWithTheme(<UserAuth />);
  });
  it("should render user name when has user", () => {
    renderWithTheme(<UserAuth {...mockProps} />);

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
});
