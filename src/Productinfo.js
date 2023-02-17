import React from 'react'
import products from './Data'
import { useParams } from 'react-router-dom'


export default function Productinfo() {

  const {productId} = useParams();
  const product = products.find((product) => product.id === productId);
  const {name, url, price } = product

  return (
    <div>
      <div >
        <h3>Suits</h3>
              <div>
                    <div>
                        <img src = {url}/>
                    </div>
                    <div>
                        <p>{name}</p>
                        <h6>{price}</h6>
                    </div> 
              </div>    
      </div>
    </div>
  )
}
