import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";
import Login from "./componenets/LoginApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Login/>
    </ChakraProvider>
  </StrictMode>
);
