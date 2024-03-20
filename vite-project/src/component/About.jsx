
import React from "react";
import Header  from "./Header";
import '../style/about.css'
import icon1 from '../assets/handicon.png'
import icon2 from '../assets/goalicon.png'
import icon3 from '../assets/searchicon.png'
import icon4 from '../assets/save.png'
function About() {
 

  return (
    <>
     <Header/>
    
     <div className="about">
      <h1 className="head">About Us</h1>
      <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloremque animi facere distinctio dolorum iusto explicabo harum rem officiis delectus deserunt vitae laudantium cum incidunt voluptate repellendus, quas necessitatibus corporis.</p>
     </div>
     {/* --------------------------- */}

     <div className="comments">
        <img src={icon1} alt="" />
        <h1 className="headin-com">Lorem ipsum dolor sit.</h1>
      </div>
      <div className="comments-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit aperiam animi modi illum. Eaque rem consequuntur earum facilis tenetur ex odio, mollitia nostrum, facere cupiditate veritatis ut. Optio, aspernatur.</p>
        <button className="btn2">Check Pricing</button>
      </div>

      <div className="comments2">
        <img src={icon2} alt="" />
        <h1 className="headin-com2">Lorem ipsum dolor sit.</h1>
      </div>
      <div className="comments-para2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit aperiam animi modi illum. Eaque rem consequuntur earum facilis tenetur ex odio, mollitia nostrum, facere cupiditate veritatis ut. Optio, aspernatur.</p>
        <button className="btn3">Check Pricing</button>
      </div>

      <div className="comments3">
        <img src={icon3} alt="" />
        <h1 className="headin-com">Lorem ipsum dolor sit.</h1>
      </div>
      <div className="comments-para">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit aperiam animi modi illum. Eaque rem consequuntur earum facilis tenetur ex odio, mollitia nostrum, facere cupiditate veritatis ut. Optio, aspernatur.</p>
        <button className="btn1">Check Pricing</button>
      </div>

      <div className="comments2">
        <img src={icon4} alt="" style={{ width: '60px', height: '65px' }} />
        <h1 className="headin-com3">Lorem ipsum dolor sit.</h1>
      </div>
      <div className="comments-para2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sit aperiam animi modi illum. Eaque rem consequuntur earum facilis tenetur ex odio, mollitia nostrum, facere cupiditate veritatis ut. Optio, aspernatur.</p>
        <button className="btn3">Check Pricing</button>
      </div>
    </>
  )

}

export default About;
