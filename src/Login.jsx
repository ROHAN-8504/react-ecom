import { useState } from "react"


function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  let senddetails = async (event) => {
    event.preventDefault()

  

    try {
      let token = localStorage.getItem("token")
      let response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ username, password })
      })
      let data = await response.json()
      alert(data.msg)
    } catch (error) {
      console.log(error)
      alert("something went wrong")
    }
  }
  return (
   <>
   <form onSubmit={senddetails}  >
   <h2>Login</h2>
   <p>Welcome back!</p>

  <div>
    <label>Username</label>  <br />
   <input    onChange={(e)=>{setusername(e.target.value)}}  type="text" placeholder="username" />
  </div>

  <div>
  <label>Password</label>  <br />
   <input    onChange={(e)=>{setpassword(e.target.value)}}   type="text" placeholder="password" />
  </div>

  <br />
   
   <button type="submit" >Login</button>

  
   </form>
   </>
  )
}

export default Login
