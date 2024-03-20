import React from "react";
import '../style/contact.css'
import Header from "./Header";
function Contact() {
return(
    <>
    <Header/>
    <div className="contact">
        <div className="c-left">
            <h1>Contact Us </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore illo et aperiam, beatae distinctio aut placeat, in quo similique labore laborum? Accusantium voluptatem nam quibusdam perspiciatis amet aliquam culpa atque.</p>
        </div>
        <div className="c-right">
             <input type="text" placeholder=" Name" className="input-c"/><br />
             <input type="text" placeholder="Email" className="input-c"/><br />
             <input type="number" placeholder="Phone" className="input-c"/><br />
             
             <textarea name="" id="" cols="20" rows="5" className="input-c" placeholder="Message"></textarea>
             <button className="input-btn">Submit</button>
        </div>
    </div>
    </>
)

}

export default Contact;