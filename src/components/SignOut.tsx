import React from 'react'
import { HStack, Text, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";



const SignOut = () => {
    const navigate = useNavigate()
  return (
    <HStack>
      <Link to="/login">
        <Text color="gray.600" fontWeight="bold">
          {" "}
          Login
        </Text>
      </Link>
      <Button
        bgColor="bodyColor"
        color="bg"
        _hover={{
          bgColor: "transparent",
          color: "bodyColor",
          border: "1px ",
          borderColor: "bodyColor",
        }}
        p={4}
        onClick = {() => navigate("/signup")}
      >
        Create an account
      </Button>
    </HStack>
  );
}

export default SignOut