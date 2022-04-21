import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getACamp } from "../data/campData";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  Textarea,
  ModalFooter,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import map from "../assets/Map.png";
import Review from "../components/Review";
import { IReview } from "../models";
import { addReview } from "../data/campData";
import { BsFillChatDotsFill } from "react-icons/bs";
import logo from "../assets/Logo.svg";
import { useRecoilState } from "recoil";
import { userName } from "../atom";
// import getFilePath from "../getPath";

// type Props = {}

const CampDetail = () => {
  const params = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [camp, setCamp] = useState(getACamp(params.name));
  const [text, setText] = useState("");
  const [user, setUser] = useRecoilState(userName);

  const d = new Date();
  const review: IReview = {
    name: user,
    time: `${d.toLocaleTimeString()}`,
    comment: text,
  };

  useEffect(() => {
    setCamp(getACamp(params.name));
    const loginUser = sessionStorage.getItem("loginAs");
    if (typeof loginUser === "string") {
      const userLoggedIn = JSON.parse(loginUser);
      setUser(userLoggedIn.user);
    }
  }, [text]);

  return (
    <Box pt={4} w={["90%", "90%", "90%", "80%"]} mx="auto">
      <NavBar />
      <Flex
        justify="space-between"
        my={8}
        direction={["column", "column", "row"]}
      >
        <Box
          border="1px"
          borderColor="gray.300"
          rounded="md"
          p={[4, 4, 6]}
          w={["100%", "100%", "35%", "30%"]}
          h={["auto", "auto", "fit-content"]}
          order={[1, 1, 0]}
          mt={[4, 4, 0]}
        >
          <Image src={map} alt="map" fit="contain" w="100%" h="auto" />
        </Box>
        <Box w={["100%", "100%", "60%"]}>
          <Flex
            border="1px"
            borderColor="gray.300"
            rounded="md"
            p={[4, 4, 6]}
            w="100%"
            direction="column"
          >
            <Image
              src={camp.img}
              alt={camp.title}
              fit="cover"
              rounded="xl"
              width="100%"
              h="auto"
            />

            <Flex
              justify="space-between"
              align="center"
              color="bodyColor"
              my={4}
            >
              <Text fontWeight="bold" fontSize="18px">
                {camp.title}
              </Text>
              <Text fontSize="18px">
                {camp.cost ? camp.cost : "Cost: unavailable"}
              </Text>
            </Flex>
            <Text color="gray.600" fontSize="18px">
              {camp.desc}
            </Text>
            <Text color="gray.600" fontSize="18px" fontStyle="italic" mt={2}>
              Submitted by {camp.subBy ? camp.subBy : "Anonymous"}
            </Text>
          </Flex>
          <Flex
            direction="column"
            border="1px"
            borderColor="gray.300"
            rounded="md"
            p={[4, 4, 6]}
            w="100%"
            mt={8}
            align={["flex-start", "flex-start", "flex-end"]}
          >
            {camp.reviews?.map((review) => {
              return (
                <Review
                  name={review.name}
                  time={review.time}
                  review={review.comment}
                  key={review.name}
                />
              );
            })}
            <Button
              bgColor="bodyColor"
              color="bg"
              rounded="md"
              p={6}
              mt={4}
              _hover={{
                bgColor: "transparent",
                color: "bodyColor",
              }}
              w={["60%", "60%", "40%"]}
              leftIcon={<BsFillChatDotsFill />}
              onClick={onOpen}
            >
              Leave a Review
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} size="full">
        <ModalContent
          sx={{
            bgColor: "bg",
          }}
        >
          <ModalHeader>
            <NavBar />
          </ModalHeader>
          <ModalBody w={["full", "full", "80%", "50%"]} mx="auto">
            <Heading color="bodyColor" fontSize="3rem">
              Add Review
            </Heading>
            <Text my={4} fontSize="18px" color="gray.600">
              Description:
            </Text>
            <Textarea
              placeholder="Comment Here"
              _placeholder={{ color: "gray.600" }}
              rounded="lg"
              h="30vh"
              p={2}
              bgColor="gray.100"
              color="gray.600"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              color="bg"
              bgColor="bodyColor"
              fontSize="18px"
              w="full"
              h="50px"
              py={4}
              px={8}
              _hover={{
                bgColor: "transparent",
                color: "bodyColor",
                border: "1px",
                borderColor: "bodyColor",
              }}
              mt="4"
              onClick={() => {
                addReview(camp.title, review);
                setText("");
                onClose();
              }}
            >
              Post Comment
            </Button>
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

export default CampDetail;
