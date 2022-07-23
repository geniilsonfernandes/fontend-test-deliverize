import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { MediaMatch } from ".";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

describe("<MediaMatch />", () => {
  let desktopHeading;
  let mobileHeading;

  // hook tests
  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="768px">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="768px">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    );

    desktopHeading = screen.getByTestId("desktop");
    mobileHeading = screen.getByTestId("mobile");
  });

  it("should be hidden if no media query is passed", () => {
    expect(desktopHeading.parentElement).toHaveStyleRule("display", "none");
    expect(mobileHeading.parentElement).toHaveStyleRule("display", "none");
  });

  it("should show or hide based on the media passed", () => {
    expect(desktopHeading.parentElement).toHaveStyleRule("display", "block", {
      media: "(min-width:768px)"
    });
    expect(mobileHeading.parentElement).toHaveStyleRule("display", "block", {
      media: "(max-width:768px)"
    });
  });
});
