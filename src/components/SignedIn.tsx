import { Stack, Text, Button } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { isLoggedIn } from "../atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const SignedIn = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useRecoilState(isLoggedIn);
  const [user, setUser] = useState("");

  useEffect(() => {
    const loginUser = sessionStorage.getItem("loginAs");
    if (typeof loginUser === "string") {
      let status = JSON.parse(loginUser);
      setUser(status.user);
    }
  }, []);

  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={2}
      align="center"
    >
      <Link to="/">
        <Text
          color="gray.600"
          fontWeight="bold"
          display={["block", "block", "block", "none"]}
        >
          Home
        </Text>
      </Link>
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
          sessionStorage.removeItem("loginAs");
          navigate("/");
        }}
      >
        Log Out
      </Button>
    </Stack>
  );
};

export default SignedIn;
