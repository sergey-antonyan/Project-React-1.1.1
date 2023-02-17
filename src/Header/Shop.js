import { Link } from "react-router-dom"
import products from "../Data"

export default  function Shop(){
    
  return(
    <div className="container">
      {
      products.map((product) => {
        return (<Link to={`/products/${product.id}`}>
        <div className="products" key={product.id}>
        <img className="photo" src={product.url}/>
        <p>{product.name}</p>
           <del>£{product.oldprice}</del>   <span>£{product.price}</span>
      </div>
      </Link>
        )
      })
      }
    </div>
  )
}