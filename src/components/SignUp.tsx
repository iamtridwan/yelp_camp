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
import userTest from "../assets/User Testimonial.svg";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLoggedIn, userName } from "../atom";

type formValue = {
  userName: string;
  password: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  // const location = useLocation()
  const [user, setUser] = useState<formValue>({ userName: "", password: "" });
  const [login, setIsLogin] = useRecoilState(isLoggedIn);
  const [, setUsername] = useRecoilState(userName);
  const [isUserNameError, setIsUserNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let nameEvent = e.target as HTMLInputElement;
    let valueEvent = e.target as HTMLInputElement;
    const name = nameEvent.name;
    const value = valueEvent.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    if (user.userName !== "" && user.password !== "") {
      setIsUserNameError(!isUserNameError);
      setIsPasswordError(!isPasswordError);
      setUser({ userName: "", password: "" });
      setIsLogin(!login);
      setUsername(user.userName);
      sessionStorage.setItem(
        "loginAs",
        JSON.stringify({ user: user.userName, login: true })
      );
      navigate("/camps");
    } else {
      if (user.userName === "") {
        setIsUserNameError(!isUserNameError);
      }
      if (user.password === "") {
        setIsPasswordError(!isPasswordError);
      }
    }
  };

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
              value={user.userName}
              onChange={handleChange}
            />
            {isUserNameError && (
              <Text color="red.300" mt={2}>
                Invalid UserName
              </Text>
            )}
          </FormControl>
          <FormControl my="4">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              placeholder="Choose Password"
              _placeholder={{
                color: "gray.400",
              }}
              border="1px"
              borderColor="gray.300"
              size="lg"
              id="password"
              name="password"
              variant="filled"
              bgColor="gray.50"
              type="password"
              value={user.password}
              onChange={handleChange}
            />
            {isPasswordError && (
              <Text color="red.300" mt={2}>
                Invalid Password
              </Text>
            )}
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
            onClick={handleSubmit}
          >
            Create an account
          </Button>
          <Flex mt={4} align="center" fontSize="18px">
            <Text mr={2}>Already user?</Text>
            <Text
              color="blue.300"
              textDecor="underline"
              fontWeight="bold"
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Sign In
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
          <Image src={userTest} alt="testimonial" />
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

export default SignUp;
