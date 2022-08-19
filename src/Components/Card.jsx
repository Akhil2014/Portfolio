import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { dark, orange, darkSecond } from "../Pages/Navbar";
import { BsFillCameraVideoFill ,BsFillEyeFill , BsGithub} from "react-icons/bs";
const Card = () => {
  return (
    <Box w="330px" rounded={10} bg={darkSecond} h="530px" p="10px">
      <Stack>
        <Image rounded={10} src="https://picsum.photos/536/354" />
        <Box textAlign="center">
          <Heading>Title Name</Heading>
        </Box>
        <Text color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          neque ipsam obcaecati nihil earum. Maxime, velit harum rem, dolorum
          commodi consectetur dolore, earum ab nulla enim voluptatibus sunt
          porro voluptates.
        </Text>
        <Text color={orange}>Tech Stack: <Text color="black" as="span">Reaxt</Text></Text> 
        <HStack spacing={70}>
            <Box rounded="50%" p="15px" _hover={{bg:orange,transition:"all 1s", color:"white"}}><BsFillCameraVideoFill size="30px" /></Box>
            <Box rounded="50%" p="15px" _hover={{bg:orange,transition:"all 1s", color:"white"}}><BsGithub size="30px" /></Box>
            <Box rounded="50%" p="15px" _hover={{bg:orange,transition:"all 1s", color:"white"}}><BsFillEyeFill size="30px" /></Box>
        </HStack>

      </Stack>
    </Box>
  );
};

export default Card;
