import { Button, Text, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import SignedIn from "./SignedIn";
import screenContext from "../store";
import { useContext } from "react";

const MobileMenu = () => {
  const { isLoggedIn } = useContext(screenContext);
  const navigate = useNavigate();
  return (
    <>
      {isLoggedIn ? (
        <SignedIn />
      ) : (
        <Flex
          direction="column"
          w="100%"
          my={6}
          align="center"
          justify="space-between"
          h="100px"
          display={["flex", "flex", "flex", "none"]}
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
            onClick={() => navigate("/signup")}
          >
            Create an account
          </Button>
        </Flex>
      )}
    </>
  );
};

export default MobileMenu;
