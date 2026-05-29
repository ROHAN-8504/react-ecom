import { useState } from "react"
function Header() {
 const [userinput, setuserinput] = useState('')

  return (
    <>
   <header style={{display:"flex", justifyContent:"space-around"}}  >
    <img src="src/assets/vite.svg" alt="LOGO" />

    <input onChange={(e)=>setuserinput(e.target.value)}   style={{borderRadius:"10px"}}     type="text" />

     
    <nav style={{display:"flex",gap:"10px" }} >
        <a href="">HOME</a>
        <a href="">PRODUCTS</a>
        <a href="">ABOUT</a>
        <a href="">SIGNUP</a>
        <a href="">SIGNIN</a>
    </nav>
    {userinput}
   </header>
    </>
  )
}

export default Header