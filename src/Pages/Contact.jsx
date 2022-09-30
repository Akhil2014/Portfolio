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
import React, { useState } from "react";
import { dark, orange, darkSecond } from "./Navbar";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./responsive.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number:"",
    message: "",
  });

  let name, value;
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, number, message } = user;

    if (name &&email && number && message) {
      const res = await fetch(
        "https://queryform-9ff37-default-rtdb.firebaseio.com/queryform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "strict-origin-when-cross-origin":"*"
          },
          body: JSON.stringify({
            name,
            email,
            number,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          number:"",
          message: "",
        });

        alert("Thank you!");
      }
    } else {
      alert("Please Fill the Data");
    }
  };
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
        <Flex display={["none" , "none" , "none" ,"flex" ,"flex"]} w="40%" justifyContent="center" alignItems="center">
          <Image
            w="600px"
            src="https://portfolio-m-sehrawat.vercel.app/developerActivity.svg"
          />
        </Flex>
        <VStack w={["100%" , "100%" , "100%", "30%","30%"]} pt="150px" overflow="hidden">
          <Stack direction="row" spacing={25}>
            <a
              style={{ textDecoration: "none" }}
              target="#"
              href="https://github.com/Akhil2014"
            >
              <Button
                _hover={{ cursor: "pointer" }}
                color="black"
                fontSize="17px"
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
                _hover={{ cursor: "pointer" }}
                color="black"
                fontSize="17px"
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
              _hover={{ cursor: "pointer" }}
              onClick={() => alert("mdakhilkhan2014@gmail.com")}
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
            id="fname"
            name="name"
            value={user.name}
            onChange={getUserdata}
            pl="10px"
            w="88%"
            h="42px"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your full name"
          />
          <Input
            id="email"
            name="email"
            value={user.email}
            onChange={getUserdata}
            pl="10px"
            w="88%"
            h="42px"
            type="email"
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your email"
          />
          <Input
           type="number"
            pl="10px"
            w="88%"
            h="42px"
            name="number"
            value={user.number}
            onChange={getUserdata}
            fontSize="15px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Enter your number"
          />
          <Textarea
            pl="10px"
            w="88%"
            h="100px"
            id="subject"
            name="message"
            value={user.message}
            onChange={getUserdata}
            fontSize="13px"
            rounded={10}
            _active={{ border: "1px solid lightblue" }}
            placeholder="Message"
          />
          <Button
            onClick={sendData}
            _hover={{ cursor: "pointer" }}
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
