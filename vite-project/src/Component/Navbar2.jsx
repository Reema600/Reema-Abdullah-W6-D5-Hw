
import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Image,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import { Link } from "react-router-dom";
//   import { Logo } from './Logo'
export default function Navbar2(props) {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <div>
        
       <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            {/* <Logo /> */}
            <Image   display="flex"
              alignItems="center"  width="100px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pa8T56Dc8QAI2gBz21kQlBwuglHpyGfSmg&usqp=CAU' ></Image>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                {/* <ButtonGroup variant="text" colorScheme="gray" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup> */}
                <HStack spacing="3">

                  <Button variant="tertiary">
                  <Link to='/log'>{props.Loginn}</Link>
                  </Button>
                  
                  <Link to='/reg'>
                  <Button variant="primary">Sign up</Button>
                  </Link>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="tertiary"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>  
    
    </div>
  )
}
