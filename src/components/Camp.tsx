import React from "react";
import { Box, Image, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../atom";
import { useRecoilValue } from "recoil";

type Props = {
  img: string;
  title: string;
  desc: string;
};

const Camp = (props: Props) => {
  const login = useRecoilValue(isLoggedIn);
  const navigate = useNavigate();
  const toast = useToast();
  const handleNavigate = () => {
    if (login) {
      navigate(`${props.title}`);
    } else {
      toast({
        position: "top",
        duration: 1000,
        render: () => (
          <Box bg="red.500" color="bg" fontSize="18px" rounded="md" p={4}>
            Please log in!
          </Box>
        ),
      });
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    }
  };
  return (
    <Box
      border="1px"
      rounded="md"
      p="6"
      transform="scale(0.9)"
      borderColor="gray.300"
      _hover={{
        transform: "translateY(-1px)",
      }}
    >
      <Image src={props.img} alt={props.title} rounded="lg" />
      <Heading fontSize="18px" fontWeight="extrabold" color="bodyColor" my={4}>
        {props.title}
      </Heading>
      <Text fontSize="16px" color="bodyColor" mb={4}>
        {props.desc}
      </Text>
      <Button
        rounded="lg"
        bgColor="transparent"
        color="bodyColor"
        fontSize="16px"
        fontWeight="bold"
        border="1px"
        borderColor="gray.300"
        p={4}
        _hover={{
          bgColor: "bodyColor",
          color: "bg",
        }}
        onClick={handleNavigate}
      >
        View Campground
      </Button>
    </Box>
  );
};

export default Camp;
