
function Card(props) {
  return (
    <div style={{border:"1px red solid" }}  >
       <img height={250} width={250}  src={props.image} alt="" />
        <h2>title:{props.title}</h2>
        <h3>price:{props.price}</h3>
    
    </div>
  )
}

export default Card