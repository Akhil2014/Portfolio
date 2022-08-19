import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { dark, darkSecond, orange } from "./Navbar";
import skills from "../Components/Data/Skills";

const Skills = () => {
  return (
    <Box bg={darkSecond} h="600px">
      <Flex pt="40px" bg={darkSecond} justifyContent="center">
        <Heading fontSize="30px">
          My{" "}
          <Heading fontSize="30px" color={orange} as="span">
            Technical Skills
          </Heading>
        </Heading>
      </Flex>
      <Grid
        templateColumns="repeat(6, 1fr)"
        w="70%"
        margin="auto"
        gap={6}
        h="400px"
        bg={darkSecond}
      >
        {skills.map(({icon,text}) => {
          return (
            <>
              <Flex key={text}
                _hover={{ bg: "black", transition: "all 0.9s" }}
                alignItems="center"
                bg={dark}
                justifyContent="center"
                w="140px"
                rounded={7}
                h="160px"
              >
                <VStack>
                  <Image src={icon} w="100px" h="100px" />
                  <Text color="white">{text}</Text>
                </VStack>
              </Flex>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Skills;
