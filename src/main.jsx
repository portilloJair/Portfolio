import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider, extendBaseTheme  } from "@chakra-ui/react";
// import chakraTheme from '@chakra-ui/theme'
// import theme from './assets/theme'

const theme = extendBaseTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
  })
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
