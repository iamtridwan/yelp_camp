import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <HStack
      justify="space-between"
      align="center"
      my={4}
      w={["100%", "100%", "90%"]}
      mx="auto"
    >
      <Image src={logo} alt="logo" />
      <Text color="purple.600"> Made with &#128151; by Tridwan</Text>
    </HStack>
  );
};

export default Footer;
