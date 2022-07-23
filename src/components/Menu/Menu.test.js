/* eslint-disable react/prop-types */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithTheme from "../../utils/test/renderWithTheme";

import { Menu } from ".";

const mockMediaMatchProps = {
  display: "none"
};

jest.mock("../MediaMatch", () => {
  return {
    __esModule: true,
    MediaMatch: ({ children }) => {
      return <div style={{ ...mockMediaMatchProps }}> {children}</div>;
    }
  };
});

describe("<Menu />", () => {
  it("should render Menu mobile and are closed", () => {
    renderWithTheme(<Menu />);
    const logo = screen.getByTitle("Deliverize");
    const menuMobile = screen.getByLabelText("menu mobile");
    const menuDesktop = screen.getByLabelText("menu desktop");

    expect(logo).toBeInTheDocument();
    expect(menuDesktop.parentElement).toHaveStyle({ display: "none" });
    expect(menuMobile).toHaveAttribute("aria-hidden", "true");
    expect(menuMobile).toHaveStyle({
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none"
    });
  });
  it("should open/close Menu mobile ", () => {
    renderWithTheme(<Menu />);
    const menuBtn = screen.getByLabelText("opem menu");
    const menuMobile = screen.getByLabelText("menu mobile");

    userEvent.click(menuBtn);
    expect(menuMobile).toHaveAttribute("aria-hidden", "false");
    expect(menuMobile).toHaveStyle({
      opacity: 1,
      visibility: "visible",
      pointerEvents: "initial"
    });
    userEvent.click(menuBtn);
    expect(menuMobile).toHaveAttribute("aria-hidden", "true");
  });
  it("should render Menu desktop ", () => {
    mockMediaMatchProps.display = "block";
    renderWithTheme(<Menu />);

    const menuDesktop = screen.getByLabelText("menu desktop");
    expect(menuDesktop.parentElement).toHaveStyle({ display: "block" });
  });
});
