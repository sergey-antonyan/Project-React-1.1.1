import { Link } from "react-router-dom";
import products from "../Data";

export default function Shop(props) {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          
            <div className="products" key={product.id}>
             <Link to={`/products/${product.id}`} key={product.id}>
              <img className="photo" src={product.url} />
              </Link>
              <p>{product.name}</p>
              <del>£{product.oldprice}</del> <span>£{product.price}</span>
              <button onClick={props.lll}>Buy</button>
            </div>
          
        );
      })}
    </div>
  );
}
