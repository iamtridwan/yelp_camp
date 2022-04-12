import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ICamp } from "../models";
import { getACamp } from "../data/campData";
import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import map from "../assets/Map.png";

// type Props = {}

const CampDetail = () => {
  const params = useParams();
  let camp: ICamp = getACamp(params.name);
  
  return (
    <Box pt={4} w={["90%", "90%", "90%", "80%"]} mx="auto">
      <NavBar />
      <Flex>
        <Box>
          <Image src={map} alt="map" fit="contain" />
        </Box>
        <Box>
            <VStack>
                <Image src={camp.img} alt={camp.title} />
            </VStack>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default CampDetail;
