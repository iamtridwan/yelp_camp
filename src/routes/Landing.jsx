import React, { useEffect, useState } from "react";
import {
  Flex,
  Image,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import heroImg from "../assets/Hero Image.jpg";
import mobileImg from "../assets/Hero Image (Tablet and Mobile).jpg";
import logo from "../assets/Logo.svg";
import airbnb from "../assets/Airbnb.svg";
import booking from "../assets/Booking.svg";
import guide from "../assets/Plum Guide.svg";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [size, sizeSet] = useState(window.innerWidth);
  const navigate = useNavigate();
  const getWindowSize = () => {
    let screenSize = window.innerWidth;
    sizeSet(screenSize);
  };
  useEffect(() => {
    window.addEventListener("resize", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, [size]);
  return (
    <Flex
      bgColor="bg"
      color="bodyColor"
      position="relative"
      pl={[0, 0, 0, 8]}
      pr={[0, 0, 0, 0]}
      direction="column"
      width="100%"
      h="inherit"
    >
      <Image
        src={logo}
        alt="logo"
        pl={4}
        transform="translateY(2px)"
        boxSize="100px"
        fit="contain"
      />
      <Flex
        w={size <= 768 ? "100%" : "50%"}
        align="left"
        pl={4}
        mt={["6", "6", "6", "2"]}
        order={size <= 768 ? 2 : 0}
        direction="column"
      >
        <Heading w={["80%", "80%", "70%"]} fontSize={["2rem", "2rem", "3rem"]}>
          {" "}
          Explore the best camps on Earth.
        </Heading>
        <Text w={["90%", "90%", "80%", "70%"]} fontSize="18px" my="2">
          YelpCamp is a curated list of the best camping spots on Earth.
          Unfiltered and Unbiased reviews
        </Text>
        <List spacing={3} w={["80%", "80%", "70%"]}>
          <ListItem fontSize="18px">
            <LinkIcon
              as={CheckCircleIcon}
              color="green.400"
              boxSize="20px"
              mr="2"
            />
            Add your own camp suggestions.
          </ListItem>
          <ListItem fontSize="18px">
            <LinkIcon
              as={CheckCircleIcon}
              color="green.400"
              boxSize="20px"
              mr="2"
            />
            Leave reviews and expectations
          </ListItem>
          <ListItem fontSize="18px">
            <LinkIcon
              as={CheckCircleIcon}
              color="green.400"
              boxSize="20px"
              mr="2"
            />
            See locations for all camps.
          </ListItem>
        </List>
        <Button
          bgColor="bodyColor"
          color="white"
          rounded="md"
          h="50px"
          w={["50%", "50%", "40%"]}
          my={4}
          _hover={{ bgColor: "transparent", border: "2px", color: "bodyColor" }}
          onClick={() => {
            navigate("camp");
          }}
        >
          Veiw Campgrounds
        </Button>
        <Box w="60%">
          <Text fontSize="18px">Partnered with:</Text>
          <HStack>
            <Image
              src={airbnb}
              alt="Airbnb logo"
              boxSize="100px"
              fit="contain"
            />
            <Image
              src={booking}
              alt="Booking logo"
              boxSize="100px"
              fit="contain"
            />
            <Image
              src={guide}
              alt="plumguide logo"
              boxSize="100px"
              fit="contain"
            />
          </HStack>
        </Box>
      </Flex>
      <Image
        src={size <= 768 ? mobileImg : heroImg}
        alt="hero image"
        position={size <= 768 ? "initial" : "absolute"}
        top={0}
        right={0}
        height={["auto", "auto", "auto", "100vh"]}
        width={["auto", "auto", "auto", "45%"]}
      />
    </Flex>
  );
};

export default Landing;
