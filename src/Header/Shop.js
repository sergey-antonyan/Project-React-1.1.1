import { Link } from "react-router-dom";
import products from "../Data";
import { useState, useEffect } from "react";

export default function Shop(props) {

    const [suit, setSuit] = useState([])
    useEffect(() => {
      fetch(`http://localhost:3005/shop`)
      .then(res =>res.json())
      .then(data => setSuit(data))
    }, [])

  const [filter, setFilter] = useState('')

  const searchText = (event) => setFilter(event.target.value)    ;

  let dataSearch = suit.filter(item =>{
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
          
            <div className="products" key={product.product_id}>
              <Link to={`/shop/${product.product_id}`} key={product.product_id}>
              <img className="photo" src={product.image} />
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