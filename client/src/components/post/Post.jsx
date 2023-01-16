import { Link } from "react-router-dom";
import "./post.css"
import React from "react"
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function Post({post}) {
  const {user }=useContext(Context)
  const publicFolder="http://localhost:3000/images/"
  return (
    <div className="post">
      {/* if post have imag3e so goster canim */}
      {post.photo&&(
        

      <img
        className="postImg"
        src={publicFolder+post.photo}//we put this as url 
        alt=""
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          {/* kucuk bir div yapip category icin */}
         
          {post.categories.map((c)=>(
             <span className="postCat">
                <Link className="link" to={c.name}>
                {c.name}
              </Link>
            </span>

          ))}
          
         
        </div>
        {/* in single post i can't use user?.user name so when no user that will give us an Error to prevent this Error I do this  */}
        {/* burada post yanina bisey koymamiz lazim id olarak dusun  */}
        <span className="postTitle">
          {user?( <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>):( <Link to="/login" className="link">
            {post.title}
          </Link>)}
         
        </span>
        <hr />
        {/* to make create time readable  */}
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}
