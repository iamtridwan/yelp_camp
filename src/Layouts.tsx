import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScreenContext from "./store"

// type Props = {}

const Layouts = () => {
  const context = useContext(ScreenContext)
  const [screen, setScreen]  = useState(context.size)
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
    <ScreenContext.Provider value={context}>
    <Box bgColor="bg">
      <Outlet />
    </Box>
    </ScreenContext.Provider>
  );
};

export default Layouts;
