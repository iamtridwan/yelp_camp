import {
  Flex,
  HStack,
  Image,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import screenContext from "../store";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const size = useContext(screenContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <HStack align="center" w="100%" justifyContent="space-between">
        <Image src={logo} alt="logo" />
        {size <= 768 ? (
          <IconButton
            aria-label="Hamburger menu"
            icon={<AiOutlineMenu color="black" />}
            onClick={() => {
              setShow(!show);
            }}
          />
        ) : (
          <Flex align="center" justify="space-between" w="90%">
            <Link to="/">
              <Text color="gray.600" fontWeight="bold">
                Home
              </Text>
            </Link>
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
              >
                Create an account
              </Button>
            </HStack>
          </Flex>
        )}
      </HStack>
      {show && <MobileMenu />}
    </>
  );
};

export default NavBar;
