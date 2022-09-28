import React from 'react'
import { Box, Button, ButtonGroup, Center, Flex, Heading, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Tripoto</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Inspirations</Button>
    <Button colorScheme='teal'>Forums</Button>
    <Button colorScheme='teal'>Packages</Button>
    <Button colorScheme='teal'>Publish Trip</Button>
    <Button colorScheme='teal'>Sign in</Button>
  </ButtonGroup>
</Flex>
<Flex  mx={400}>
<InputGroup display={["none","block"]} my={20} width={600}>
<Input placeholder='Search fro itineraries,destinations,hotels or activities'/>
<InputRightElement pointerEvents={"none"} fontSize={20} children={<SearchIcon/>}/>
</InputGroup>

</Flex>


    </Box>
  )
}
