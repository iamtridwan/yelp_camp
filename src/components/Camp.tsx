import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  desc: string;
};

const Camp = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      border="1px"
      rounded="md"
      p="6"
      transform="scale(0.9)"
      borderColor="gray.300"
      _hover={{
        transform: "scale(1)",
        boxShadow: "xl",
        
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
        onClick={() => {
          let title = props.title.split(" ");
          let newTitle = title[0] + title[1];
          navigate(`camp/${newTitle}`);
        }}
      >
        View Campground
      </Button>
    </Box>
  );
};

export default Camp;
