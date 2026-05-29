import {useState} from "react"
function Header() {
  const [count, setcount] = useState(0)

  function handlecount(){
    setcount(count+1)
  }
  return (
    <>
    <button onClick={handlecount} >count {count}</button>
    </>
  )
}

export default Header