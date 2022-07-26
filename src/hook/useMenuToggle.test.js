import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useMenuToggle from "./useMenuToggle";

describe("useMenuToggle", () => {
  it("should return true or false", () => {
    const { result } = renderHook(() => useMenuToggle({ lockBody: true }));
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isVisibility).toBeTruthy();
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isVisibility).toBeFalsy();
  });
  it("should body have overflow and remove when false ", () => {
    const { result } = renderHook(() => useMenuToggle({ lockBody: true }));
    act(() => {
      result.current.toggle();
    });
    expect(document.body).toHaveStyle({ overflow: "hidden" });
    act(() => {
      result.current.toggle();
    });
    expect(document.body).toHaveStyle({ overflow: "" });
  });
});
