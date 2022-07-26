import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { OrderContext, OrderProvider } from ".";

let store = {};
const fakeLocalStorage = (function () {
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

describe("OrderContext", () => {
  beforeAll(() => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage
    });
  });

  beforeEach(() => {
    store = {};
  });

  it("should add item to cart and recive item in states depedecys", async () => {
    render(
      <OrderProvider>
        <OrderContext.Consumer>
          {({ addOrderToCart, cart, cartNotification, cartLenght }) => (
            <>
              <button
                data-testid="addToCart"
                onClick={() => addOrderToCart({ name: "foo" })}
              ></button>

              <span data-testid="cart">{cart[0]?.name}</span>
              <span data-testid="cartLenght">{cartLenght}</span>
              <span data-testid="cartNotification">
                {cartNotification?.name}
              </span>
            </>
          )}
        </OrderContext.Consumer>
      </OrderProvider>
    );

    userEvent.click(screen.getByTestId("addToCart"));
    await waitFor(() => {
      expect(screen.getByTestId("cart")).toHaveTextContent("foo");
    });
    await waitFor(() => {
      expect(screen.getByTestId("cartNotification")).toHaveTextContent("foo");
    });
    await waitFor(() => {
      expect(screen.getByTestId("cartLenght")).toHaveTextContent("1");
    });
  });

  it("should remove item to cart", async () => {
    store = {
      cart: '[{"name":"foo", uid:"1"},{"name":"foo2", uid:"2"}]'
    };
    render(
      <OrderProvider>
        <OrderContext.Consumer>
          {({ cart, removeOrderToCart }) => (
            <>
              <button
                data-testid="removeOrderToCart"
                onClick={() => removeOrderToCart("2")}
              ></button>

              {cart.map((i) => (
                <span key={i.uid} data-testid="cart">
                  {i.name}
                </span>
              ))}
            </>
          )}
        </OrderContext.Consumer>
      </OrderProvider>
    );

    userEvent.click(screen.getByTestId("removeOrderToCart"));
    await waitFor(() => {
      expect(screen.getAllByTestId("cart")).toHaveLength(1);
    });
  });

  describe("localStorage", () => {
    it("should get cart by local storage", async () => {
      store = {
        cart: '[{"name":"foo"}]'
      };

      await act(async () => {
        render(
          <OrderProvider>
            <OrderContext.Consumer>
              {({ cart, cartLenght }) => (
                <>
                  <span data-testid="cartLenght">{cartLenght}</span>
                  <span data-testid="cart">{cart[0]?.name}</span>
                </>
              )}
            </OrderContext.Consumer>
          </OrderProvider>
        );
      });

      await waitFor(() => {
        expect(screen.getByTestId("cart")).toHaveTextContent("foo");
      });
      await waitFor(() => {
        expect(screen.getByTestId("cartLenght")).toHaveTextContent("1");
      });
    });
  });
});
