import {
  Flex,
  FormControl,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  List,
  ListItem,
  ListIcon,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/Logo.svg";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import user from "../assets/User Testimonial.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  return (
    <Stack
      spacing={[10, 10, 8, 4]}
      direction={["column", "column", "column", "row"]}
      color="bodyColor"
    >
      <Box w={["90%", "90%", "70%", "40%"]} mx="auto">
        <Flex align="center" w="100%" justify="space-between" py="4">
          <Image src={logo} alt="logo" />
          <Link to="/camps">
            <List>
              <ListItem>
                <ListIcon
                  as={FaArrowLeft}
                  color="black"
                  boxSize="20px"
                  mr="2"
                />
                Back to campgrounds
              </ListItem>
            </List>
          </Link>
        </Flex>
        <Heading mt="6">
          Start exploring camps from all around the world
        </Heading>
        <form style={{ width: "100%" }}>
          <FormControl my="4">
            <FormLabel htmlFor="userName">Username</FormLabel>
            <Input
              placeholder="johndoe_91"
              _placeholder={{
                color: "gray.400",
              }}
              border="1px"
              borderColor="gray.300"
              variant="filled"
              bgColor="gray.50"
              size="lg"
              id="userName"
              name="userName"
              value=""
              //   onChange={(e) => {}}
            />
          </FormControl>
          <FormControl my="4">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              placeholder="Enter password"
              _placeholder={{
                color: "gray.400",
              }}
              border="1px"
              borderColor="gray.300"
              size="lg"
              id="userName"
              name="userName"
              variant="filled"
              bgColor="gray.50"
              value=""
              //   onChange={(e) => {}}
            />
          </FormControl>
          <Button
            bgColor="bodyColor"
            color="bg"
            p="4"
            w={["100%", "100%", "50%"]}
            _hover={{
              bgColor: "transparent",
              color: "bodyColor",
              border: "2px",
              borderColor: "black",
            }}
          >
            {" "}
            Login{" "}
          </Button>
          <Flex mt={4} align="center" fontSize="18px">
            <Text mr={2}>Not a user yet?</Text>
            <Text
              color="blue.300"
              textDecor="underline"
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Create an account
            </Text>
          </Flex>
        </form>
      </Box>
      <Box
        h={["fit-content", "fit-content", "fit-content", "100vh"]}
        bgColor="yellow.50"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        width={["100%", "100%", "100%", "40%"]}
        py={[8, 8, 8, 0]}
      >
        <Text fontSize="24px" fontWeight="extrabold" w="80%" mx="auto">
          "YelpCamp has honestly saved me hours of research time, and the camps
          on here are definitely well picked and added"
        </Text>
        <Flex w="80%" mx="auto" mt={4}>
          <Image src={user} alt="testimonial" />
          <VStack ml={4}>
            <Text fontWeight="bold" fontSize="20px">
              May Andrews
            </Text>
            <Text mt={-2}>Professional Hiker</Text>
          </VStack>
        </Flex>
      </Box>
    </Stack>
  );
};

export default SignIn;
