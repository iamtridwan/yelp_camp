import { Button, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      my={6}
      align="center"
      justify="space-between"
      h="100px"
    >
      <Link to="/">
        <Text color="gray.600" fontWeight="bold">
          Home
        </Text>
      </Link>
      <Link to="/login">
        <Text color="gray.600" fontWeight="bold">
          Login
        </Text>
      </Link>
      <Button
        bgColor="bodyColor"
        color="bg"
        w="50%"
        mx="auto"
        _hover={{
          bgColor: "transparent",
          color: "bodyColor",
          border: "1px ",
          borderColor: "bodyColor",
        }}
        p={4}
      >
        Create an account
      </Button>
    </Flex>
  );
};

export default MobileMenu;
