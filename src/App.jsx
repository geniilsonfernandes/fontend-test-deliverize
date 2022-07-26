import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { OrderProvider } from "./context/orderContext";
import GlobalStyle from "./styles/globalStyles";
import { ProductSingle } from "./pages/ProductSingle";

function App() {
  return (
    <OrderProvider>
      <ThemeProvider theme={theme}>
        <ProductSingle />
        <GlobalStyle />
      </ThemeProvider>
    </OrderProvider>
  );
}

export default App;
