import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Spacer,
  } from "@chakra-ui/react";
  // import ReactDOM from "react-dom";
  import { Link } from "react-router-dom";

export default function NavBar(props) {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  return (
    <div>
<Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="6xl"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                >
                  hi hello
                </Button>
                <Link to="/" >{props.Register}</Link>
              <br/>
              <Button background={"#B93144"} colorScheme="brand" size="md" > <Link to="/about">My all Story</Link> </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <img
              width="100px"
              name="Dan Abrahmov"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pa8T56Dc8QAI2gBz21kQlBwuglHpyGfSmg&usqp=CAU"
            />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <img
              width="150px"
              name="Dan Abrahmov"
              src="https://i.pinimg.com/564x/57/7f/d2/577fd2712249fc7b9bcaa0677d94cf17.jpg"
            />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            {/* <chakra.h1 fontSize="xl">REEMA</chakra.h1> */}
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement pointerEvents="none">
            </InputLeftElement>
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
    </div>
  )
}
