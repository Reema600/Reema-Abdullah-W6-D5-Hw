
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
// import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer.Jsx'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div>
 {/* <Route path='/about' element={<AboutMe/>}></Route> */}
        {/* <NavBar></NavBar> */}
        {/* <Link to="/"></Link> */}
        <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src="data:image/png;base64,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"
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              About Me
            </chakra.span>
            <Link
              display="block"
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
             My educational journey in developing websites in the Tuwaiq Javascript Bootcamp...
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
             I registered in this camp because of my passion for learning programming and developing websites. It was very difficult to get such an opportunity to join this camp or one of the Tuwaiq Academy camps. At the beginning of the camp, I thought that my programming skills would not improve in such a short period, but now I am proud of myself And my rapid development in my programming skills, with the presence of some difficulties that I have not overcome yet, but with practice and learning, I will overcome them and learn more, through the camp or through self-learning, and in the end, all thanks to all the teachers in this camp.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color="gray.700"
                  _dark={{ color: "gray.200" }}
                >
                  Reema Abdulla
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.300" }}
              >
                7 June 2023
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
<Footer></Footer>
    </div>
  )
}
