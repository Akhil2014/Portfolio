import {
  Box,
  Flex,
  Heading,
  Stack,
  Button,
  Text,
  Image,
  Input,
  Textarea,
  VStack,
  Toast,
} from "@chakra-ui/react";
import React from "react";
import { dark, orange, darkSecond } from "./Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Box>
      <Flex pt="40px" bg={dark} justifyContent="center">
        <Heading fontSize="30px">
          Chat And{" "}
          <Heading fontSize="30px" color={orange} as="span">
            Connect With Me
          </Heading>
        </Heading>
      </Flex>
      <Flex h="600px" bg={dark} justifyContent="space-around">
        <Flex w="40%" justifyContent="center" alignItems="center">
          <Image
            w="600px"
            src="https://portfolio-m-sehrawat.vercel.app/developerActivity.svg"
          />
        </Flex>
        <VStack w="30%" pt="150px" overflow="hidden">
          <Stack direction="row" spacing={25}>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://github.com/Akhil2014"
            >
              <Button
                _hover={{cursor:"pointer"}}
                color="black"
                fontSize="17px"
                w="120px"
                h="45px"
                rounded={5}
                border="none"
                leftIcon={<BsGithub />}
                bg="#feb2b2"
                variant="solid"
              >
                Github
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://www.linkedin.com/in/akhil-khan-709122207/"
            >
              <Button
                _hover={{cursor:"pointer"}}
                color="black"
                fontSize="17px"
                w="120px"
                h="45px"
                rounded={5}
                border="none"
                leftIcon={<BsLinkedin />}
                bg="#9bdaf3"
                variant="solid"
              >
                Linkedin
              </Button>
            </a>
            <Button
              _hover={{cursor:"pointer"}}
              onClick={() => alert("mdakhilkhan2014@gmail.com")}
              w="120px"
              h="45px"
              rounded={5}
              border="none"
              rightIcon={<AiOutlineMail />}
              bg={darkSecond}
              color="white"
              fontSize="17px"
            >
              Call us
            </Button>
          </Stack>
          <Input
            pl="10px"
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your full name"
          />
          <Input
            pl="10px"
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your email"
          />
          <Input
            pl="10px"
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your number"
          />
          <Textarea
            pl="10px"
            w="88%"
            h="100px"
            fontSize="13px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Message"
          />
          <Button
             _hover={{cursor:"pointer"}}
            w="90%"
            border="none"
            rounded={10}
            color="white"
            bg={orange}
            h="45px"
          >
            Send Message
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Contact;
