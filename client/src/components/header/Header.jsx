import "./header.css";
import React from "react";

export default function Header() {
  return (
    // TODO: this is the text is gonna be on the main image or a Slider i didn't take the decision yet  for now let it stay an image then i will do it slider 
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
