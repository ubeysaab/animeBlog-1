import { Link,useLocation } from "react-router-dom";
import "./singlePost.css";
import React, { useState } from "react"
import { useEffect } from "react";

import  axios  from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location=useLocation()
  console.log("this log is inside Single post 10 print location ,"+location);
   const path =(location.pathname.split("/")[2])


 const [post,setPost]=useState({})
 const [title,setTitle]=useState('')
const [desc,setDesc]=useState('')
const [updateMode,setUpdateMode]=useState(false)



 const publicFolder="http://localhost:3000/images/"


 const {user}=useContext(Context)


   useEffect(()=>{
const getPost =async ()=>{
  const res = await axios.get("/posts/"+path)
   setPost(res.data)
  setTitle(res.data.title)
  setDesc(res.data.desc)

}
    

getPost()
   },[path])





const handleDelete=async()=>{
  console.log(post.username==user.username)
  try{
    if(user.username=='admin'){
      await axios.delete('/posts/'+path,{data:{username:"admin"}})
      window.location.replace("/")
    } 
    else{
      await axios.delete('/posts/'+path,{data:{username:user.username}})  
 
      // !we can't post the  config directly inside the delete method so we'll use data 
      window.location.replace("/")
    }
  


}catch(e){}

}



const handleUpdate=async()=>{
  try{
    await axios.put('/posts/'+path,{username:user.username,
      title,
      desc})   
    // !we can't post the  config directly inside the delete method so we'll use data 
    window.location.reload()
  
  
  }catch(e){
    console.log(e)
  }

}




















  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={publicFolder+post.photo}
          alt=""
        />


        {updateMode?(<input type="text" value={title} className="singlePostTitleInput" onChange={(e)=>setTitle(e.target.value)}/>):
        (
         <h1 className="singlePostTitle">
          {title}

          {post.username===user.username&&
               // we put the question mark that's mean if there no user  the output would be undifined without throuwing a javaScript exception ERROR
         
            <div className="singlePostEdit">
              <i   className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)} ></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          
         }
        </h1>


        )}

          {user.username=='admin'&&(<h1>
              <div className="singlePostEdit">
                {/* <i   className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)} ></i> */}
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
          </h1>)}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link"  to={`/?username=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date (post.createdAt).toDateString()}</span>
        </div>
        {updateMode?(<textarea  className="singlePostDescInput"   value={desc} onChange={(e)=>setDesc(e.target.value)}/>):(

        <p className="singlePostDesc">
          {post.desc}
        </p>
        )}
        {updateMode&&<button className="singlePostButton" onClick={handleUpdate}>Update</button>}
        
      </div>
    </div>
  );
}
