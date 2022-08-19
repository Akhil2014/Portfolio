import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { darkSecond ,orange,dark} from "./Navbar";

const About = () => {
  return (
    <Box mt="-25px" bg={darkSecond}>
    <Flex bg={darkSecond} justifyContent="center"><Heading fontSize="30px" >All <Heading fontSize="30px" color={orange} as="span">About me</Heading></Heading></Flex>
    <Flex h="820px" justifyContent="space-around" bg={darkSecond}>
      <Flex bg="red" w="50%" justifyContent="center" alignItems="center">
        <Box w="100%" h="400px"></Box>
      </Flex>
      <Flex bg="blue" w="50%" justifyContent="center" alignItems="center"></Flex>
    </Flex>
    </Box>
  );
};

export default About;
