import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { dark, darkSecond, orange } from "./Navbar";
import "./responsive.css";

const Graph = () => {
  return (
    <Box py="40px" m="auto" bg={dark} h="auto">
      <Flex pt="40px" bg={dark} justifyContent="center">
        <Heading fontSize="30px" color="white">
          Github{" "}
          <Heading fontSize="30px" color={orange} as="span">
            Graph & Statistics
          </Heading>
        </Heading>
      </Flex>
      <Flex p={["0px","0px","5px","10px","20px"]} w="50%" m="auto" gap={5}  flexDirection="column" justifyContent="center" alignItem="center" >
        <Stack direction={["column","column","row","row"]}>
          {/* <Image w={["150px","180px","280px","350px"]} src="https://camo.githubusercontent.com/35dac0149e3caee08f78905027060b0f7a3585b01dac216ee87b9d297f06f063/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616b68696c323031342673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" />
          <Image w={["150px","180px","280px","350px"]} src="https://camo.githubusercontent.com/08334c36abfac180abd7f9dcc1d8abb086f9b0a1561c4ecf88157c1d19a7ce0f/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616b68696c3230313426" /> */}
        </Stack>
        <Box>
          <Image src="https://i.ibb.co/7bnD67w/Graph.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Graph;
