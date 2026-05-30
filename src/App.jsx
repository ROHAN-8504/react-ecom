import Header from './header';
import About from './About';
import {Route,Routes} from 'react-router-dom'
import Products from './Products';
import { useState } from 'react'; 
import './App.css'
function App() {

//state to manage searchquery
const [searchquery,setsearchquery]=useState('')
  return (
    <>
    
      <Header  setsearchquery={setsearchquery}    />
   <Routes>
    <Route path='/about'  element={<About/>}    />
    <Route path='/products' element={ <Products searchquery={searchquery}  />}/>
   </Routes>
 
 
  </>
  )
  
}

export default App
