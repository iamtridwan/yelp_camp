import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { screenSize } from "./atom";



const Layouts = () => {
  const [screen, setScreen] = useRecoilState(screenSize);
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
    <Box bgColor="bg">
      <Outlet />
    </Box>
  );
};

export default Layouts;
