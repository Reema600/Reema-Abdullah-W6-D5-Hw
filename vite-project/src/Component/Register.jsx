import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
  
  // import { GoogleLoginButton,GithubLoginButton,TwitterLoginButton } from "react-social-login-buttons";
 
  import { Alert } from '@chakra-ui/react'
  // import {  Alert } from 'react-router-dom'
  // import Footer from "./Footer.Jsx";
  import { CgProfile } from "react-icons/cg";
  import { useState} from 'react'
//   import {Link} from 'react-router-dom'
import Login from '../Component/Login'
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password  ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
      
  return (
    <div>

<div>
{" "}
          {login ? ( 
           
          <>
         
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6">
            {/* <Logo /> */}
            <center>
            < CgProfile size='100px'/>
            </center>
            
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
              <Heading size={{ base: 'xs', md: 'sm' }}>Create an account</Heading>
              <HStack spacing="1" justify="center">
                <Text color="fg.muted"> Already have an account?
    
    </Text>
                <Button variant="text" colorScheme="blue">
                  Log in
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
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" type="name"  onChange={(event) => setName(event.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" onChange={(event) => setEmail(event.target.value)} />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" type="password"   onChange={(event) => setPassword(event.target.value)}/>
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
                
                <Button type="submit" onClick={handleClick}>Create Account</Button>
                <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  Every Field is important!
                </Alert>
              )}
              
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
            {/* // <Footer></Footer> */}
            </>
           ) : (
            <Login />
          )}
        </div>
    </div>
  )
}
