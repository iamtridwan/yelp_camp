import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignedIn = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={2}
      align="center"
    >
      <Text color="gray.600" fontWeight="bold">
        Tridwan
      </Text>
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
        onClick={() => {
          navigate("/");
        }}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default SignedIn;
