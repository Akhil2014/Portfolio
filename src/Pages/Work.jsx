import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../Components/Card";
import { project } from "../Components/Data/Project";
import { dark, orange } from "./Navbar";
import './responsive.css';

const Work = () => {
  const arr = new Array(10).fill(0)
  return (
    <Box  pt="100px" mt="-20px" h="auto" bg={dark} pb="40px">
      <Box textAlign="center">
        <Heading fontSize="35px">
          My{" "}
          <Heading color={orange} as="span">
            Projects
          </Heading>
        </Heading>
      </Box>
      <Grid w="auto" p="10px" templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={10}>
        {
          project.map(({id,title , description, tech , img ,links }) => <Card key={id} title={title} description={description} tech={tech} img={img}  links={links}/> )
        
        }
      </Grid>
      
    </Box>
  );
};

export default Work;
