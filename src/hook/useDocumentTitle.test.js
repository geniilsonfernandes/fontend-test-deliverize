import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useDocumentTitle from "./useDocumentTitle";

describe("useDocumentTitle ", () => {
  it("should add title in documente", () => {
    const { result } = renderHook(() => useDocumentTitle());
    act(() => {
      result.current.setTitle("foo");
    });
    expect(document.title).toBe("foo");
  });
});
