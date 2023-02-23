import React from "react";
import products from "./Data";
import { Link, useParams } from "react-router-dom";

export default function Productinfo(props) {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const { name, url, price } = product;

  return (
    <>
      <Link to={"/shop"}>
        {" "}
        <p> Back to Shop</p>
      </Link>{" "}
      <h3 className="cname">Suit Jacket</h3>
      <div className="prodinfo">
        <div className="prodinfo1">
          <img src={"/" + url} />
        </div>
        <div className="prodinfo2">
          <p>{name}</p>
          <br />
          <br />
          <h4>£{price}</h4>
          <hr />
          <h3>Color</h3>
          <button className="btncolor one"></button>
          <button className="btncolor two"></button>
          <button className="btncolor three"></button>
          <button className="btncolor four"></button>
          <br />
          <h3>Jacet Size</h3>
          <div className="prodinfobtn">
            <button>36 (EU 46)</button>
            <button>38 (EU 48)</button>
            <button>40 (EU 50)</button>
            <button>42 (EU 52)</button>
            <button>44 (EU 54)</button>
            <button>46 (EU 56)</button>
            <button>48 (EU 58)</button>
          </div>
          <button onClick={props.ooo} className="buybtn"></button>
        </div>
      </div>
    </>
  );
}
