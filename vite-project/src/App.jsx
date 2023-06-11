
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Card from './Component/Card'
import Navbar2 from './Component/Navbar2'
import Login2 from './Component/Login2'
import Registeration from './Component/Registeration'
import Footer from './Component/Footer.Jsx'
function App() {
 

  return (
    <>
    <Navbar2></Navbar2>
<div className='outer'>
  <div className='inner'> 
    <Registeration></Registeration>
  </div>
</div>
<Footer></Footer>


   
   


<Routes>
 
  <Route path='/log' element={<Login2/>}></Route>
  <Route path='/search' element={<Card/>}></Route>
  <Route path='/reg' element={<Registeration/>}></Route>
     </Routes>
   
    </>
  )
}

export default App
