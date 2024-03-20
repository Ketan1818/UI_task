import React from 'react';
import img1 from '../assets/side-img.png'
import ximg1 from '../assets/img1.png'
import ximg2 from '../assets/img2.png'
import ximg3 from '../assets/img3.png'
import Header from './Header';
import '../style/home.css'
function Home() {
  return (
  <>
  <Header/>

  <div className="main-cont">
      <div className="left-cont">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero nobis nisi cum suscipit perferendis animi temporibus eum vero ipsa amet nostrum in ipsam tempore hic asperiores exercitationem quod, deserunt a provident vel earum qui numquam eveniet. Consequatur, nam ad.</p>
        <button className="btn1">Check Pricing</button>
      </div>
      <div className="right-cont">
        <img src={img1} alt="" />
      </div>
    </div>
    <div class="heading">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        {/* -------------------------------------- */}

        <div className="box-main">
      <div className="box">
        <h4 className="h4">Lorem ipsum dolor sit.</h4>
        <p className="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
      </div>
      <div className="box">
        <h4 className="h4">Lorem ipsum dolor sit.</h4>
        <p className="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
      </div>
      <div className="box">
        <h4 className="h4">Lorem ipsum dolor sit.</h4>
        <p className="para2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae recusandae eligendi similique aspernatur porro, ab praesentium illo, dolor dignissimos quae atque hic temporibus earum. In repellendus consequatur velit porro, sequi ducimus voluptatibus impedit repellat!</p>
      </div>
    </div>

    {/* ------------------------------------- */}
    <div class="heading">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>

    <div className="main-box2">
      <div className="img-box">
        <img src={ximg1} alt="" />
        <h3 className="h3">Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore nostrum rem, eos itaque quaerat voluptate dolores hic ex nam nobis id natus sit. Nulla eos sed tenetur tempora, distinctio, enim culpa unde rem perspiciatis eius neque. Nisi, sit eaque!</p>
      </div>
      <div className="img-box">
        <img src={ximg2} alt="" />
        <h3 className="h3">Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore nostrum rem, eos itaque quaerat voluptate dolores hic ex nam nobis id natus sit. Nulla eos sed tenetur tempora, distinctio, enim culpa unde rem perspiciatis eius neque. Nisi, sit eaque!</p>
      </div>
      <div className="img-box">
        <img src={ximg3} alt="" className="img3" />
        <h3 className="h3">Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempore nostrum rem, eos itaque quaerat voluptate dolores hic ex nam nobis id natus sit. Nulla eos sed tenetur tempora, distinctio, enim culpa unde rem perspiciatis eius neque. Nisi, sit eaque!</p>
      </div>
    </div>
{/* ----------------------------- */}

    <div className='footer'>
        <h1 className='foot'>@ketan</h1>
    </div>
  </>
   
   
  );
}

export default Home;
