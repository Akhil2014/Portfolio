import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { darkSecond, orange, dark } from "./Navbar";
import './responsive.css';

const About = () => {
  return (
    <Box mt="-25px" bg={darkSecond}>
      <Flex pt="50px" bg={darkSecond} justifyContent="center">
        {/* <Heading id="akhil" fontSize="30px">
          All{" "}
          <Heading fontSize="30px" color={orange} as="span">
            About me
          </Heading>
        </Heading> */}
      </Flex>
      <Flex h="700px" justifyContent="space-around" bg={darkSecond}>
        {/* <Flex  display={["none" , "none" , "none" ,"flex" ,"flex"]} w="50%" justifyContent="center">
          <Box w="100%" h="400px">
            <Image  w="700px" h="500px" src="https://portfolio-m-sehrawat.vercel.app/developerActivity.svg" />
          </Box>
        </Flex> */}
        <Flex   w={["100%" , "100%", "100%" , "50%","50%"]} justifyContent="center" alignItems="center">
          <Stack w="450px" h="600px">
          <Heading fontSize="30px"  mb={"5"} color={orange} as="span">
            About me
          </Heading>
            <UnorderedList color="white" fontSize={20}>
              <ListItem mb="20px">
                Hello , I am Akhil Khan and I enjoy doing coding{" "}
              </ListItem>
              <ListItem mb="20px">
                An aspiring Full Stack Developer with 800+ hours of coding
                experience in JavaScript.
              </ListItem>
              <ListItem mb="20px">
                A dedicated team player enthusiastic to be part of a reputed
                company. Always looking forward to learning something new to
                strengthen skills learned.
              </ListItem>
              <ListItem mb="20px">
                Fast Forwarding to today, I built a number of web applications and 3 major projects. learned a great deal about teamwork, leadership, and communication.
              </ListItem>
            </UnorderedList>
          </Stack>
        </Flex>
        <Flex w={["100%", "100%", "100%", "50%", "50%"]} justifyContent="center" alignItems="center">
    
  <Stack w="450px" h="600px">
  <Heading fontSize="30px" mb={"5"} color={orange} as="span">
           Experience
          </Heading>
    <UnorderedList color="white" fontSize={20}>
    <ListItem mb="20px">
       Working as Software Developer at Cointab Software Private Limited.
      </ListItem>
      <ListItem mb="20px">
        Engineered and integrated an advanced access control
        feature, significantly enhancing system security and
        mitigating unauthorized access risks.
      </ListItem>
      <ListItem mb="20px">
        Architected and developed multiple new features from
        inception to deployment, leveraging innovative solutions
        and best practices to meet evolving user requirements
        and industry standards.
      </ListItem>
      <ListItem mb="20px">
        Implemented real-time bug-fixing strategies, ensuring
        seamless operation and reliability of the product under
        dynamic usage scenarios.
      </ListItem>
    </UnorderedList>
  </Stack>
</Flex>
      </Flex>
    </Box>
  );
};

export default About;
