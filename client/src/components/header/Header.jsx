import "./header.css";
import React from "react";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {category} from '../../data/data'

export default function Header() {
  
  const settings={
    dots:true,
    infinite:true,
    speed:400,
    slidesToShow:3,
    slidesToScroll:2,
    autoPlaySpeed:40,
    // variableWidth: true,

    responsive:[
        {
            breakpoint:770,
            settings:{

                slidesToShow:1,
                slidesToScroll:1,
            }

        }
    ]


}
  return (
    // TODO: this is the text is gonna be on the main image or a Slider i didn't take the decision yet  for now let it stay an image then i will do it slider 
    <div className="header">
     
      {/* <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      /> */}
       <div className="headerTitles">
                 <span className="headerTitleSm">My Anime</span>
                 <span className="headerTitleLg">BLOG</span>
               </div>
               <Slider{...settings} className='headerImg'>
{category.map((item)=>
    (
        <div className="boxs" key={item.id}>

            <div className="box">
                <img src={item.cover} alt="image"   />

                {/* <div className="overlay">
                    <h4>
                        {item.category}
                    </h4>
                    <p>{item.title}</p>
                </div> */}



               
            </div>
        </div>
    )
)}
</Slider>
   
                
                
    </div>
  );
}
