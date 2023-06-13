
import { Route, Router, Routes} from 'react-router-dom'
import './App.css'
import Card from './Component/Card'
import Navbar2 from './Component/Navbar2'
import Login from './Component/Login'
import Registeration from './Component/Registeration'
import Footer from './Component/Footer.Jsx'
import Register from './Component/Register'
function App() {
 

  return (
    <>
    <Navbar2 Loginn="log in"></Navbar2>



   
   


<Routes>
 <Route path='/' element={<Register/>}></Route>
  <Route path='/log' element={<Login/>}></Route>
  <Route path='/search' element={<Card/>}></Route>
  <Route path='/reg' element={<Registeration/>}></Route>
     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
