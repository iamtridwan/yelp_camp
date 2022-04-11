import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  img: string;
  title: string;
  desc: string;
  params: string;
};

const Camp = (props: Props) => {
  return (
    <Box border="1px" rounded="sm" p="2">
      <Image src={props.img} alt={props.title} />
      <Heading fontSize="22px" fontWeight="extrabold" color="bodyColor">
        {props.title}
      </Heading>
      <Text fontSize="18px" color="gray.200">
        {props.desc}
      </Text>
      <Button
        rounded="md"
        bgColor="transparent"
        color="bodyColor"
        fontSize="22px"
        fontWeight="extrabold"
        p={4}
        _hover={{
          bgColor: "bodyColor",
          color: "bg",
        }}
      >
        View Campground
      </Button>
    </Box>
  );
};

export default Camp;
