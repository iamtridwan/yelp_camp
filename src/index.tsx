import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./extendTheme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);




