  import { Button, Heading, Container, Input, VStack, Box, useColorModeValue, useToast } from '@chakra-ui/react'
  import React from 'react'
  import { useState } from 'react'
  import { useResortList } from '../list/resort'

  const CreatePage = () => {
    const [newResort, setNewResort] = useState({
      name: "",
      rating: "",
      image: "",
    })
    const toast = useToast

    const {createResort} = useResortList()
    const handleAddResort = async() => {
      if(!success){
        toast({
          title: "Error",
          description: message,
          status: "error"
        })
      }
    }
    
    return <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h2"} size={"xl"} textAlign={"center"} mt={4} mb={4}>
          Add New Destination
        </Heading>

        <Box
          w={"full"} bg={useColorModeValue("white", "blue.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Name'
              name='name'
              type='string'
              value={newResort.name}
              onChange={(e) => setNewResort({ ...newResort, name: e.target.value })}
            />
            <Input
              placeholder='Rating'
              name='rating'
              type='number'
              value={newResort.rating}
              onChange={(e) => setNewResort({ ...newResort, rating: e.target.value })}
            />
            <Input
              placeholder='Image URL'
              name='image'
              type='string'
              value={newResort.image}
              onChange={(e) => setNewResort({ ...newResort, image: e.target.value })}
            />

            <Button colorScheme='blue' onClick={handleAddResort} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  }

  export default CreatePage