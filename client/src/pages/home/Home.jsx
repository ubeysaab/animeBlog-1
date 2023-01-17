import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";

import axios from "axios";
import { useLocation } from "react-router";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);// there we doesn't fetch any thing yet 
  const  {search} = useLocation();
  console.log(search)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);//!baslarda search yok
      // TODO: dersin sonucta sil yoksa
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);


// The current width of the viewport
const [width,setWidth]=useState(window.innerWidth)
  // The width below which the mobile view should be rendered
const breakpoint=768;
useEffect(()=>{
  window.addEventListener('resize',()=>setWidth(window.innerWidth))
  window.removeEventListener('resize',()=>setWidth(window.innerWidth))
},[])











  return (
    <>
      <Header />
      
        {width>breakpoint?(<div className="home"><Posts posts={posts} />
        <Sidebar /></div>):(<><div className='home'> <Posts posts={posts}/></div><Footer/></>)}
        
      
      

    </>
  );
}
