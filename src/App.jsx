import Header from './header'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import { Route, Routes, } from 'react-router-dom'
import Products from './Products'
import { useState } from 'react'
import './App.css'


function App() {
  const [searchquery, setsearchquery] = useState('')

  return (
    <>
      <Header setsearchquery={setsearchquery} />
      <Routes>
        <Route path="/about" element={<About />} />
      
        <Route
          path="/products"
          element={
          
              <Products searchquery={searchquery} />
           
          }
        />
        <Route path='/auth/register' element={<Signup/>}  />
        <Route path='/auth/login' element={<Login/>}  />
    
      </Routes>
    </>
  )
}

export default App
