import { renderHook } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";
import useAxiosFetch from "./useAxiosFetch";

const handlers = [
  rest.get("https://mock/test-frontend/products", async (req, res, ctx) => {
    return res(ctx.json({ name: "foo" }));
  }),
  rest.get("https://mock/test-frontend/product", async (req, res, ctx) => {
    return res(
      // Send a valid HTTP status code
      ctx.status(403)
      // And a response body, if necessary
    );
  })
];

const server = setupServer(...handlers);

describe("useFetch", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it("should return data with a successful api request", async () => {
    const { result } = renderHook(() => useAxiosFetch());

    await act(async () => {
      result.current.getDataByUrl("https://mock/test-frontend/products");
    });
    expect(result.current.data).toEqual({ name: "foo" });
  });
  it("should return data with a successful api request", async () => {
    const { result } = renderHook(() => useAxiosFetch());

    await act(async () => {
      result.current.getDataByUrl("https://mock/test-frontend/product");
    });
    expect(result.current.error.message).toBe(
      "Request failed with status code 403"
    );
  });
});
