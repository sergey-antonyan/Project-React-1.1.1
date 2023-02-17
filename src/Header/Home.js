import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="containerhome">
      <div className='starthome'>
        <button><Link to="/shop">Shop</Link></button>
        <h3> BUILD YOUR LOOK & CONFIDENCE </h3>
        <h1>FOUNDATIONS FOR SUCCESS</h1>
      </div>
    </div>
  );
}