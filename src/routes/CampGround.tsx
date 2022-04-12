import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { ICamp } from "../models";
import { getCampData } from "../data/campData";
import Camp from "../components/Camp";
import NavBar from "../components/NavBar";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

type Props = {};

const CampGround = (props: Props) => {
  const campData = getCampData();
  const [camps, setCamps] = useState<ICamp[]>(campData);
  const [search, setSearch] = useState<string>("");

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
        <Link to="/addcamp">
          <Text
            color="gray.700"
            textDecoration="underline"
            w={["100%", "100%", "50%"]}
          >
            Or add your own campground
          </Text>
        </Link>
      </Box>
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
    </Box>
  );
};

export default CampGround;
