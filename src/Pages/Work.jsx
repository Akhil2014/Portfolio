import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../Components/Card";
import { dark, orange } from "./Navbar";
import './responsive.css';

const Work = () => {
  const arr = new Array(10).fill(0)
  return (
    <Box pt="100px" mt="-20px" h="auto" bg={dark} pb="40px">
      <Box textAlign="center">
        <Heading fontSize="35px">
          My{" "}
          <Heading color={orange} as="span">
            Projects
          </Heading>
        </Heading>
      </Box>
      <Grid w="80%" margin="auto" templateColumns="repeat(3, 1fr)" gap={100}>
        {
          arr.map((e) => <Card key={e} /> )
        
        }
      </Grid>
      
    </Box>
  );
};

export default Work;
