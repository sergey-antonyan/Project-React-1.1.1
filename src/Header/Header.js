import React from "react";
import Nav from "./Nav";
import Searchpanel from "./Searchpanel";
import { Link } from "react-router-dom";
import accimg from "C:/Users/user/Desktop/test/REACT/file-two/src/Header/kkkacc.png";
import chat from "C:/Users/user/Desktop/test/REACT/file-two/src/Header/chat.svg";

export default function Header(props) {
  return (
    <div className="header">
      <Nav />
      <Link to="/">
        <img src={props.sec} className="logoimg2" />
      </Link>
      <Searchpanel />
      <div className="zamb">
        <img src={accimg} className="acc" />
       <Link to={'/products/card'} ><img src={props.icon} /> </Link>
        <h3>({props.ttt})</h3>
      </div>
      <img src={chat} className="yollo" />
    </div>
  );
}