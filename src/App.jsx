import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { ProductSingle } from "./pages/ProductSingle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductSingle />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
