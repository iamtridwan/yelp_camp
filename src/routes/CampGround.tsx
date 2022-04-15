import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  Image,
  useToast,
} from "@chakra-ui/react";
import { ICamp } from "../models";
import { getCampData } from "../data/campData";
import Camp from "../components/Camp";
import NavBar from "../components/NavBar";
import { ImSearch } from "react-icons/im";
import logo from "../assets/Logo.svg";
import { isLoggedIn } from "../atom";
import { useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addCamp } from "../data/campData";

type FormValue = {
  title: string;
  cost: string;
  img: string;
  desc: string;
};

const CampGround = () => {
  const campData = getCampData();
  const [camps, setCamps] = useState<ICamp[]>(campData);
  const [search, setSearch] = useState<string>("");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const login = useRecoilValue(isLoggedIn);
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormValue>();
  // console.log(watch());
  // searching for camp input
  const handleSearchCamp = () => {
    if (search === "") {
      setCamps(campData);
    } else {
      let filtered = camps.filter((camp) =>
        camp.title.toLowerCase().includes(search.toLowerCase())
      );
      setCamps(filtered);
    }
  };

  return (
    <Box pt={4} w={["90%", "90%", "90%", "80%"]} mx="auto">
      <NavBar />
      <Box bgColor="yellow.50" p={6} my={6}>
        <Heading color="bodyColor">Welcome to YelpCamp!</Heading>
        <Text color="gray.700" my={4}>
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </Text>
        <Stack
          w={["100%", "100%", "50%", "30%"]}
          mb={4}
          direction={["column", "column", "row"]}
        >
          <InputGroup size="lg">
            <InputLeftElement children={<ImSearch color="gray.300" />} />
            <Input
              placeholder="Search for camps"
              _placeholder={{ color: "gray.500" }}
              border="2px"
              borderColor="gray.400"
              color="bodyColor"
              value={search}
              variant="filled"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Button
            bgColor="bodyColor"
            color="bg"
            py={6}
            rounded="md"
            _hover={{
              bgColor: "transparent",
              color: "bodyColor",
              border: "1px",
            }}
            onClick={handleSearchCamp}
          >
            {camps.length < campData.length ? "See Full list" : "Search"}
          </Button>
        </Stack>
        <Text
          color="gray.700"
          textDecoration="underline"
          w={["100%", "100%", "50%"]}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            if (login) {
              onOpen();
            } else {
              toast({
                position: "top",
                duration: 1000,
                render: () => (
                  <Box
                    bg="red.500"
                    color="bg"
                    textAlign="center"
                    p={4}
                    rounded="md"
                    fontSize="18px"
                  >
                    You're not logged in!
                  </Box>
                ),
              });
              setTimeout(() => {
                navigate("/login");
              }, 1200);
            }
          }}
        >
          Or add your own campground
        </Text>
      </Box>
      {camps.length === 0 && (
        <Box fontSize="18px" color="bodyColor">
          Camp does not exist
        </Box>
      )}
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={3} pt={8}>
        {camps.map((camp) => {
          return (
            <Camp
              img={camp.img}
              title={camp.title}
              desc={camp.desc}
              key={camp.title}
            />
          );
        })}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent
          sx={{
            bgColor: "bg",
          }}
        >
          <ModalHeader>
            <NavBar />
          </ModalHeader>
          <ModalBody w={["full", "full", "80%", "50%"]} mx="auto">
            <Heading color="bodyColor" fontSize="3rem" mb={4}>
              Add New Campground
            </Heading>
            <form
              onSubmit={handleSubmit((data: FormValue) => {
                addCamp(data);
              })}
            >
              <FormControl mb={4}>
                <FormLabel htmlFor="name" fontSize="18px" color="gray.700">
                  Campground Name
                </FormLabel>
                <Input
                  placeholder="camp name"
                  _placeholder={{
                    color: "gray.500",
                  }}
                  id="name"
                  size="lg"
                  variant="filled"
                  bgColor="gray.100"
                  border="1px"
                  borderColor="gray.300"
                  borderRadius={2}
                  {...register("title", { required: true })}
                  defaultValue=""
                />
                {errors.title && (
                  <Text color="red.500" fontSize="18px">
                    This field is required
                  </Text>
                )}
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="price" fontSize="18px" color="gray.700">
                  Price
                </FormLabel>
                <Input
                  {...register("cost", { required: true })}
                  defaultValue=""
                  placeholder="price here"
                  _placeholder={{
                    color: "gray.500",
                  }}
                  id="price"
                  size="lg"
                  variant="filled"
                  bgColor="gray.100"
                  border="1px"
                  borderColor="gray.300"
                  borderRadius={2}
                />
                {errors.cost && (
                  <Text color="red.500" fontSize="18px">
                    This field is required
                  </Text>
                )}
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="image" fontSize="18px" color="gray.700">
                  Image
                </FormLabel>
                <Input
                  placeholder="camp name"
                  id="image"
                  size="lg"
                  type="file"
                  variant="filled"
                  bgColor="gray.100"
                  {...register("img", { required: true })}
                  defaultValue=""
                  border="1px"
                  borderColor="gray.300"
                  borderRadius={2}
                />
                {errors.img && (
                  <Text color="red.500" fontSize="18px">
                    This field is required
                  </Text>
                )}
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="desc" fontSize="18px" color="gray.700">
                  Description
                </FormLabel>
                <Textarea
                  placeholder="Description Here"
                  _placeholder={{ color: "gray.600" }}
                  id="desc"
                  h="30vh"
                  bgColor="gray.100"
                  {...register("desc", { required: true })}
                  defaultValue=""
                  border="1px"
                  borderColor="gray.300"
                  borderRadius={2}
                />
                {errors.desc && (
                  <Text color="red.500" fontSize="18px">
                    This field is required
                  </Text>
                )}
              </FormControl>
              <Button
                bgColor="bodyColor"
                color="bg"
                w="full"
                h="50px"
                type="submit"
                _hover={{
                  color: "bodyColor",
                  bgColor: "transparent",
                  border: "1px",
                  borderColor: "bodyColor",
                }}
              >
                Add Campground
              </Button>
            </form>
          </ModalBody>
          <ModalFooter
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image src={logo} alt="logo" />
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Box>
  );
};

export default CampGround;
