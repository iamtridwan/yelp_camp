import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./extendTheme";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </ChakraProvider>,
  document.getElementById("root")
);

