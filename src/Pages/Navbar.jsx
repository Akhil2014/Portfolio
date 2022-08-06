import { Box, Flex, textDecoration } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
export const dark = "#0f1624";
export const darkSecond = "#1a202c";
export const orange = "#ff7b00";

const Navbar = () => {
  const [page, setPage] = useState(1);

  const white = "white";
  const handlePage = (id) => {
    if (id === 1) {
      setPage(id);
    } else if (id === 2) {
      setPage(id);
    } else if (id === 3) {
      setPage(id);
    } else if (id === 4) {
      setPage(id);
    } else if (id === 5) {
      setPage(id);
    }
  };
  return (
    <Flex
      position="fixed"
      h="62px"
      bg={dark}
      justifyContent="space-between"
      w="100%"
      color="white"
      fontWeight="bold"
      fontFamily="sans-serif"
    >
      <Flex
        ml="10px"
        w="10%"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="40px">
          AK
          <Text color={orange} as="span">
            HIL
          </Text>
        </Text>
      </Flex>
      <Flex
        width="50%"
        justifyContent="space-around"
        alignItems="center"
        textTransform="uppercase"
        fontWeight="bold"
        fontFamily="serif"
      >
        <Text
          color={page === 1 ? orange : ""}
          textDecoration={page === 1 ? "underline" : ""}
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(1)} to="home" smooth={true}>
            Home
          </Link>
        </Text>
        <Text
          color={page === 2 ? orange : ""}
          textDecoration={page === 2 ? "underline" : ""}
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(2)} to="about" smooth={true}>
            About
          </Link>
        </Text>
        <Text
          color={page === 3 ? orange : ""}
          textDecoration={page === 3 ? "underline" : ""}
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(3)} to="work" smooth={true}>
            Work
          </Link>
        </Text>
        <Text
          color={page === 4 ? orange : ""}
          textDecoration={page === 4 ? "underline" : ""}
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(4)} to="skills" smooth={true}>
            Skills
          </Link>
        </Text>
        <Text
          color={page === 5 ? orange : ""}
          textDecoration={page === 5 ? "underline" : ""}
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          <Link onClick={() => handlePage(5)} to="contact" smooth={true}>
            Contact
          </Link>
        </Text>
        <Text
          _hover={{
            bg: orange,
            p: "10px",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          fontSize="20px"
        >
          Resume
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
