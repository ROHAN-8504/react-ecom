
import {useState,useEffect} from "react"
import Card from './Card'
function Products({searchquery}) {
    const [products, setproducts] = useState([])
//   //fetch the products from fakestore api
//   async function fetchproducts(){
//       let data= await fetch('https://fakestoreapi.com/products')
//     let finaldata=await data.json()
//          setproducts(finaldata)
//          return;
//   }
//   fetchproducts();

useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setproducts(data));
      
}, [])
//filter out th producrs bas3d on searchquery
  let filteredproducts=products.filter((p)=>{
   return p.title.toLowerCase().includes(searchquery.toLowerCase())
  })






  return (
    <>
    {
        filteredproducts.map((e)=>{
            return <Card image={e.image} title={e.title} price={e.price}    />
        })
    }
    </>
  )
}

export default Products