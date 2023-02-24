import { Link } from "react-router-dom";
import products from "../Data";
import { useState } from "react";

export default function Shop(props) {

  const [filter, setFilter] = useState('')

  const searchText = (event) => setFilter(event.target.value)    ;

  let dataSearch = products.filter(item =>{
      return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
  })

  return (
    <div className="container">

        <div className="srrch">
         
          <input  
          type="text"
          placeholder="                  Search"
          className="shopsearch"
          value={filter}
          onChange={searchText.bind(this)}
          />
        </div>

      
      {dataSearch.map((product) => {
        return (
          
            <div className="products" key={product.id}>
             <Link to={`/products/${product.id}`} key={product.id}>
              <img className="photo" src={product.url} />
              </Link>
              <p>{product.name}</p>
              <del>£{product.oldprice}</del> <span>£{product.price}</span>
              <button className="hhhkkk" onClick={props.lll}>Add</button>
            </div>
          
        );
      })}
    </div>
  );
}