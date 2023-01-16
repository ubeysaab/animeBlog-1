import { Link } from "react-router-dom";
import "./topbar.css";
import React from "react"
import { useContext } from "react";
import { Context } from "../../context/Context";


const publicFolder="http://localhost:3000/images/"

export default function Topbar() {
  //TODO: THIS IS ME TOP AND NAV BAR 
  const {user,dispatch}=useContext(Context)

const handleLogOut=()=>{
  dispatch({type:'LOGOUT'})

}











  return (
    <div className="top">
      <div className="topLeft">
        {/* for icons that we fetch from font awesom  */}
      <a href="https://www.linkedin.com/in/ubeysaab/" target={"_blank"}>   <i className=" topIcon fab fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ubeysaab" target={"_blank"}><i className=" topIcon fab fa-brands fa-github"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogOut}>LOGOUT</li>}
        </ul>
      </div>
      {/* for image and search  */}
      <div className="topRight">
        {/* user girmis ise resmini goster degilse login gosterecekmis  */}
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={publicFolder +user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
