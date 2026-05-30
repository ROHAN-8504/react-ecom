import Header from './header';
import Products from './Products';
import { useState } from 'react'; 
import './App.css'
function App() {

//state to manage searchquery
const [searchquery,setsearchquery]=useState('')
  return (
  <>
  <Header  setsearchquery={setsearchquery}    />
  <Products searchquery={searchquery}  />
 
  </>
  )
}

export default App
