// import { Box, Flex, textDecoration } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { Text } from "@chakra-ui/react";
// export const dark = "#0f1624";
// export const darkSecond = "#1a202c";
// export const orange = "#ff7b00";

// const Navbar = () => {
//   const [page, setPage] = useState(1);

//   const white = "white";
//   const handlePage = (id) => {
//     if (id === 1) {
//       setPage(id);
//     } else if (id === 2) {
//       setPage(id);
//     } else if (id === 3) {
//       setPage(id);
//     } else if (id === 4) {
//       setPage(id);
//     } else if (id === 5) {
//       setPage(id);
//     }
//   };
//   return (
//     <Flex
//       position="fixed"
//       h="62px"
//       bg={dark}
//       justifyContent="space-between"
//       w="100%"
//       color="white"
//       fontWeight="bold"
//       fontFamily="sans-serif"
//     >
//       <Flex
//         ml="10px"
//         w={[ "100%","100%","100%","10%","10%"]}
//         textAlign="center"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Text id="icon" fontSize="40px">
//           AK
//           <Text color={orange} as="span">
//             HIL
//           </Text>
//         </Text>
//       </Flex>
//       <Flex
//         display={["none" , "none" , "none", "flex " , "flex"]}
//         width="50%"
//         justifyContent="space-around"
//         alignItems="center"
//         textTransform="uppercase"
//         fontWeight="bold"
//         fontFamily="serif"
//       >
//         <Text
//           color={page === 1 ? orange : ""}
//           textDecoration={page === 1 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(1)} to="home" smooth={true}>
//             Home
//           </Link>
//         </Text>
//         <Text
//           color={page === 2 ? orange : ""}
//           textDecoration={page === 2 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(2)} to="about" smooth={true}>
//             About
//           </Link>
//         </Text>
//         <Text
//           color={page === 3 ? orange : ""}
//           textDecoration={page === 3 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(3)} to="work" smooth={true}>
//             Work
//           </Link>
//         </Text>
//         <Text
//           color={page === 4 ? orange : ""}
//           textDecoration={page === 4 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(4)} to="skills" smooth={true}>
//             Skills
//           </Link>
//         </Text>
//         <Text
//           color={page === 5 ? orange : ""}
//           textDecoration={page === 5 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(5)} to="github" smooth={true}>
//             Github
//           </Link>
//         </Text>
//         <Text
//           color={page === 6 ? orange : ""}
//           textDecoration={page === 6 ? "underline" : ""}
//           _hover={{
//             bg: orange,
//             p: "10px",
//             color: "white",
//             rounded: "10px",
//             transition: "all 0.2s",
//             cursor: "pointer",
//           }}
//           fontSize="20px"
//         >
//           <Link onClick={() => handlePage(6)} to="contact" smooth={true}>
//             Contact
//           </Link>
//         </Text>
//       </Flex>
//     </Flex>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Flex, Heading, Box, Text, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const dark = "#0f1624";
export const darkSecond = "#1a202c";
export const orange = "#ff7b00";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [page, setPage] = useState(1);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePage = (id) => {
    setPage(id);
    closeMenu();
  };


  const pdfPath = process.env.PUBLIC_URL + 'Aarif-Khan-Resume.pdf';
  const openDriveLink = (driveLink) => {
    window.open(driveLink, '_blank');
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
      alignItems="center"
      px="10px"
      zIndex="1000"
    >
      <Flex alignItems="center">
        <Heading color={orange} fontWeight="800" fontSize="24px">AK</Heading>
        <Heading fontWeight="800" fontSize="24px">HIL</Heading>
      </Flex>
      
      <Flex display={{ base: "none", md: "flex" }} alignItems="center">
        {['home', 'about', 'work', 'skills', 'github', 'contact'].map((item, index) => (
          <Text
            key={item}
            color={page === index + 1 ? orange : "white"}
            textDecoration={page === index + 1 ? "underline" : "none"}
            _hover={{
              bg: orange,
              p: "10px",
              color: "white",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            fontSize="20px"
            mx="10px"
          >
            <Link
              onClick={() => handlePage(index + 1)}
              to={item}
              smooth={true}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </Text>
        ))}
        {/* <Text
          as="a"
          onClick={() => {
            handlePage(7)
            openDriveLink('https://drive.google.com/file/d/19T2RfJ0SRDWPDT3sHdZsl0D9vq0zHnF9/view?usp=sharing');
          }}
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          download="Aarif-Khan-Resume.pdf"
          color="white"
          _hover={{
            bg: orange,
            p: "10px",
            color: "white",
            rounded: "10px",
            transition: "all 0.2s",
            cursor: "pointer",
          }}
          mx="10px"
        >
          Resume
        </Text> */}
      </Flex>
      
      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={navActive ? <CloseIcon fontSize={"25px"}/> : <HamburgerIcon fontSize={"35px"}/>}
        onClick={toggleNav}
        color="white"
        bg={dark}
        _hover={{ bg: orange }}
      />

      {navActive && (
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          position="absolute"
          top="62px"
          left="0"
          width="100%"
          bg={dark}
          zIndex="999"
        >
          {['home', 'about', 'work', 'skills', 'github', 'contact'].map((item, index) => (
            <Text
              key={item}
              color={page === index + 1 ? orange : "white"}
              textDecoration={page === index + 1 ? "underline" : "none"}
              _hover={{
                bg: orange,
                p: "10px",
                color: "white",
                rounded: "10px",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
              fontSize="20px"
              py="10px"
              textAlign="center"
              onClick={() => handlePage(index + 1)}
            >
              <Link to={item} smooth={true}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </Text>
          ))}
          {/* <Text
            as="a"
            onClick={() => {
              handlePage(7);
              openDriveLink('https://drive.google.com/file/d/19T2RfJ0SRDWPDT3sHdZsl0D9vq0zHnF9/view?usp=sharing');
            }}
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            download="Aarif-Khan-Resume.pdf"
            color="white"
            _hover={{
              bg: orange,
              p: "10px",
              color: "white",
              rounded: "10px",
              transition: "all 0.2s",
              cursor: "pointer",
            }}
            py="10px"
            textAlign="center"
          >
            Resume
          </Text> */}
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
