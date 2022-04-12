import { Flex, HStack, Image, Text, IconButton } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import screenContext from "../store";
import MobileMenu from "./MobileMenu";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const NavBar = () => {
  const { isLoggedIn } = useContext(screenContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <HStack align="center" w="100%" justifyContent="space-between">
        <Image src={logo} alt="logo" />

        <IconButton
          aria-label="Hamburger menu"
          icon={<AiOutlineMenu color="black" />}
          onClick={() => {
            setShow(!show);
          }}
          display={["block", "block", "block", "none"]}
        />
        <Flex
          align="center"
          justify="space-between"
          w="90%"
          display={["none", "none", "none", "flex"]}
        >
          <Link to="/">
            <Text color="gray.600" fontWeight="bold">
              Home
            </Text>
          </Link>
          {isLoggedIn ? <SignedIn /> : <SignedOut />}
        </Flex>
      </HStack>
      {show && <MobileMenu />}
    </>
  );
};

export default NavBar;
