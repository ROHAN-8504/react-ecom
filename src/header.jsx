
function Header({setsearchquery}) {


//function which will toggle dar/light mode

function togglemode(){
document.body.classList.toggle('dark')
}

  return (
    <>
   <header style={{display:"flex", justifyContent:"space-around"}}  >
    <img src="src/assets/vite.svg" alt="LOGO" />

    <input onChange={(e)=>{setsearchquery(e.target.value)}}   style={{borderRadius:"10px"}}     type="text" />

     
    <nav style={{display:"flex",gap:"10px" }} >
        <a href="">HOME</a>
        <a href="">PRODUCTS</a>
        <a href="">ABOUT</a>
        <a href="">SIGNUP</a>
        <a href="">SIGNIN</a>
    </nav>

 <button onClick={togglemode}  >dark/light</button>

   
   </header>
    </>
  )
}

export default Header