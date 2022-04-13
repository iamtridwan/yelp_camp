import { Box, Flex, Text } from "@chakra-ui/react";
import React from 'react'

type Props = {
    name: string,
    time: string,
    review: string,
}

const Review = (props: Props) => {
  return (
    <Box color="gray.500" pb="4" borderBottom="1px" borderColor="gray.400" w="100%">
        <Flex align="center" justify="space-between" mt={2}>
            <Text fontWeight="bold" fontSize="18px" color="bodyColor">{props.name}</Text>
            <Text>{props.time}</Text>
        </Flex>
        <Text my={2}>{props.review}</Text>
        
    </Box>
  )
}

export default Review