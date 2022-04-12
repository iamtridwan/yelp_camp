import { Flex, HStack, Image, Text, IconButton } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import screenContext from "../store";
import MobileMenu from "./MobileMenu";
import SignedIn from "./SignedIn";
import SignOut from "./SignOut";

const NavBar = () => {
  const context = useContext(screenContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <HStack align="center" w="100%" justifyContent="space-between">
        <Image src={logo} alt="logo" />
        {context.size <= 768 ? (
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
            {context.isLoggedIn ? <SignedIn /> : <SignOut />}
          </Flex>
        )}
      </HStack>
      {show && <MobileMenu />}
    </>
  );
};

export default NavBar;
