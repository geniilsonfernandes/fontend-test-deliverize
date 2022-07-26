import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { OrderProvider } from "./context/orderContext";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </OrderProvider>
    </BrowserRouter>
  );
}

export default App;
