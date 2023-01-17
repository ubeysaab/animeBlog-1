import "./footer.css"

import React from 'react'

const Footer = () => {
  return (
   
    <div className="footer">
    {/* <form action="https://formsubmit.co/aboosh.sa262000@gmail.com" method="POST" >
        <input type="text" name="name" required={true} />
        <input type="text" name="email" required={true} />
        <button className="button" type="submit">Send</button>

    </form> */}
    <div className="footerItem">
        <span className="footerTitle">FOLLOW US</span>
        <div className="footerSocial">
        <a href="https://www.linkedin.com/in/ubeysaab/" target={"_blank"}>   <i className=" footerIcon fab fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/ubeysaab" target={"_blank"}><i className=" footerIcon fab fa-brands fa-github"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Footer
