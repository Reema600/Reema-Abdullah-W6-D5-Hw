import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  
  import { GoogleLoginButton,GithubLoginButton,TwitterLoginButton } from "react-social-login-buttons";
  // import { Logo } from './Logo'
  // import { OAuthButtonGroup } from './OAuthButtonGroup'
  // import { PasswordField } from './PasswordField'
  
  // import { Link } from 'react-router-dom'
  import Footer from "./Footer.Jsx";
  import { CgProfile } from "react-icons/cg";

export default function signUp() {
  return (
    <div>
         {/* <NavBar></NavBar> */}
        {/* <Link to='/'>{props.home}</Link>  */}
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
    <Stack spacing="8">
      <Stack spacing="6">
        {/* <Logo /> */}
        <center>
        < CgProfile size='100px'/>
        </center>
        
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
          <HStack spacing="1" justify="center">
            <Text color="fg.muted"> Don't have an account?</Text>
            <Button variant="text" colorScheme="blue">
              Sign up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={{ base: 'transparent', sm: 'bg.surface' }}
        boxShadow={{ base: 'none', sm: 'md' }}
        borderRadius={{ base: 'none', sm: 'xl' }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            {/* <PasswordField /> */}
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Remember me</Checkbox>
            <Button variant="text" colorScheme="blue" size="sm">
              Forgot password?
            </Button>
          </HStack>
          <Stack spacing="6">
            <Button variant="primary">Sign in</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <GoogleLoginButton onClick={() => alert("Hello")}  />
            <GithubLoginButton onClick={() => alert("Hello")} />
            <TwitterLoginButton onClick={() => alert("Hello")} />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
        <Footer></Footer>
    </div>
  )
}
