import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="containerhome">
      <div className='starthome'>
        <Link to="/shop"><img className="homeshop" src="./prodimg/homeshop.svg"/></Link>
        <h3> BUILD YOUR LOOK & CONFIDENCE </h3>
        <h1>FOUNDATIONS FOR SUCCESS</h1>
      </div>
      <div className="homeall">
            <div>
              <img className="icc" src="prodimg/returns.png" />
              <p>FREE & EASY RETURNS</p>       
            </div>
            <div>
              <img className="icc" src="prodimg/secure.png" />
              <p>SECURE PAYMENT</p>
            </div>
            <div>
              <img className="icc" src="prodimg/delivery.png"/>
              <p>NEXT DAY DELIVERY</p>
            </div>
            <div>
              <img className="icc" src="prodimg/cust.png"/>
              <p>CUSTOMER SERVICE</p>
            </div>
      </div>
    </div>
  );
}