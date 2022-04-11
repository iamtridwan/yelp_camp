import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScreenContext from "./store"

// type Props = {}

const Layouts = () => {
  const [screen, setScreen]  = useState(window.innerWidth)
  const getWindowSize = () => {
    let screenSize = window.innerWidth;
    setScreen(screenSize);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [screen]); 
  return (
    <ScreenContext.Provider value={screen}>
    <Box bgColor="bg">
      <Outlet />
    </Box>
    </ScreenContext.Provider>
  );
};

export default Layouts;
