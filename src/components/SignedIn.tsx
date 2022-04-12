import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { userName, isLoggedIn } from "../atom";
import { useRecoilValue, useRecoilState } from "recoil";


const SignedIn = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useRecoilState(isLoggedIn);
  const user = useRecoilValue(userName);

  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={2}
      align="center"
    >
      <Text color="gray.600" fontWeight="bold">
        {user}
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
          setlogin(!login);
          navigate("/");
        }}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default SignedIn;
