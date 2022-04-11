import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

// type Props = {}

const Layouts = () => {
  return (
    <Box bgColor="bg" h="100vh">
      <Outlet />
    </Box>
  );
};

export default Layouts;
