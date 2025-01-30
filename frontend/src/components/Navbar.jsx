import React from 'react'
import { Text, Link, Container, Flex, HStack, Button, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'
import { useResortList } from '../list/resort';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Container maxW={"1140px"} px={"4"}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={'space-between'}
      flexDir={{
        base: 'column',
        sm: 'row'
      }}
    >
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize={{ base: "22", sm: "28" }}
        fontWeight='extrabold'
        textAlign='center'
      >
        <Link to="/"> Ski Destinations List 🏔️ </Link>
      </Text>

      <HStack spacing={2} alignItems={"center"}>
        <Link to="/create">
          <Button>
            <PlusSquareIcon fontSize={20 } />
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Link>
      </HStack>

    </Flex>
  </Container>
}

export default Navbar