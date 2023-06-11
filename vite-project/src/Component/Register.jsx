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
 
  
  import { Link } from 'react-router-dom'
  import Footer from "./Footer.Jsx";
  import { CgProfile } from "react-icons/cg";
  import { useState, useEffect} from 'react'
//   import {Link} from 'react-router-dom'

export default function Register() {
    const [user, setUser] = useState({
        userName:'',
        password:'',
        email:''
      })

      useEffect(()=>{
     localStorage.setItem('user',JSON.stringify(user))
      },[user]);

      const logIn = (e)=>{
e.pr
        // if( user.userName == "" && user.password.length <=3){
        //   alert("Falls ")
        // }else{
        //   alert("you are log In ")
        // }
       
      }
      
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
              <Input id="name" type="name" value={user.userName}
               onChange={(e)=>setUser({...user,userName:e.target.value})}/>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" value={user.email} 
              onChange={(e)=>setUser({...user,email:e.target.value})} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password"  value={user.password}
               onChange={(e)=>setUser({...user,password:e.target.value})}/>
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
            <Link to='/login'>
            <Button onClick={logIn} >Create Account</Button>
          </Link>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="fg.muted">
              or sign up with
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
