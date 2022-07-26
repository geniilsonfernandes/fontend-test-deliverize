import React from "react";
import { ThemeProvider } from "styled-components";
import { OrderProvider } from "../src/context/orderContext";
import GlobalStyles from "../src/styles/globalStyles";
import theme from "../src/styles/theme";
import { BrowserRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <OrderProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div style={{ margin: " 0 auto", maxWidth: "1440px" }}>
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </OrderProvider>
  )
];

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      { name: "black", value: "#000" },
      { name: "white", value: "#fff" }
    ]
  }
};
