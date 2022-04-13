import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "white",
    bodyColor: "black",
  },

  fonts: {
    heading: "Open sans",
    fontBody: "Segeo UI",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "white",
        color: "gray.500",
      },
    },
  },
  components: {
    Modal: {
      baseStyle: {
        bgColor: "white",
      },
    },
  },
});

export default theme;
