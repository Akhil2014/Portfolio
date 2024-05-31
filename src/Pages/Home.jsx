import { Box, Flex, Heading, Stack, Button, Text, Image } from "@chakra-ui/react";
import React from "react";
import { dark, orange, darkSecond } from "./Navbar";
import Typewriter from "typewriter-effect";
import './responsive.css';

const Home = () => {
  return (
    <Flex h="800px" bg={dark} justifyContent="space-around">
      <Flex  w={["100%" , "100%" , "100%" , "40%","40%"]} justifyContent="center" alignItems="center">
        <Stack  textAlign={["center","center","center","",""] }spacing={1} w="100%" h="400px">
          <Box mt="70px">
            {" "}
            <Text  color="white" fontSize={["15px","20px","25px","35px","35px"]} fontWeight="bold" fontFamily="sans-sarif">
              Hello , my name is
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text color="white"  fontSize={["30px","50px","50px","60px","60px"]} fontWeight="bold" fontFamily="monospace">
              Akhil Khan
            </Text>
          </Box>
          <Box mt="-95px">
            {" "}
            <Text
              fontSize={["30px","30px","30px","35px","35px"]}
              fontWeight="bold"
              fontFamily="sans-sarif"
              color={orange}
            >
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I am Full Stack Developer.")
                    .pauseFor(1000)
                    .start();
                }}
              />
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter
                    .typeString("with over 1+ year of experience.")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </Text>
          </Box>
        <a style={{textDecoration:"none"}} target="#" href="https://drive.google.com/file/d/1hrrzQ-VDoBdqbwbnvoPIiWCdNNOUka6e/view?usp=sharing">
          <Button
            _hover={{ colorScheme: { orange }, variant: "outline" }}
            h="45px"
            w="140px"
            fontSize="20px"
            bg={orange}
            rounded={5}
            fontWeight="bold"
            border="none"
            color="white"
            variant="solid"
          >
            Resume
          </Button>
          </a>
        </Stack>
      </Flex>
      <Flex display={["none" ,"none" ,"none" ,"flex" ,"flex"]} w="30%" justifyContent="center" alignItems="center">
        <Box w={["45%","55%","60%","75%"]} h={["200px","200px","200px","225px","295px"]} rounded="50%" bg="white" overflow="hidden">
          <Image  src="https://avatars.githubusercontent.com/u/71203865?v=4" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
