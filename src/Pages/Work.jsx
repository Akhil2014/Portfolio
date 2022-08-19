import { Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../Components/Card'
import { dark } from './Navbar'

const Work = () => {
  return (
    <Flex h="1000px" bg={dark}>
        <Card />
    </Flex>
  )
}

export default Work