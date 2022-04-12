import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const SignedOut = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={2}
      align="center"
    >
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
        onClick={() => navigate("/signup")}
      >
        Create an account
      </Button>
    </Stack>
  );
};

export default SignedOut;
