import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from "./assets/NinjaCart.png"
import achievement1 from "./assets/G20-BW.png"
import achievement2 from "./assets/quantic.png"
import achievement3 from "./assets/Vccircle.png"
import introVideo from "./assets/Sec-2.mp4"
import group1 from "./assets/Group1.png"
import group2 from "./assets/Group2.png"
import group3 from "./assets/Group3.png"
import group4 from "./assets/Group4.png"
import farmer from "./assets/farmer.jpg"
import farmer2 from "./assets/farmer2.jpg"
import farmer3 from "./assets/farmer3.jpg"
import seller1 from "./assets/seller1.jpg"
import seller2 from "./assets/seller2.jpg"
import international from './assets/international.webp'
import domestic from './assets/demestic.webp'
import award1 from './assets/Award1.png'
import award2 from './assets/Award2.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import img7 from './assets/img7.png'
import img8 from './assets/img8.png'
import img9 from './assets/img9.png'
import au1 from './assets/au1.png'
import bannerVideo from './assets/sowing.mp4'
import { FaInstagram, FaChevronDown, FaLinkedin, FaYoutube, FaFacebook,FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa"
import { PiPhoneCallFill } from "react-icons/pi";



function App() {

  window.onload = function() {
    let slider = document.querySelector(' .slider .list');
    let items = document.querySelectorAll(' .slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
    let refreshInterval = setInterval(() => { next.click() }, 3000);

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';

        let last_active_dot = document.querySelector('.slider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => { next.click() }, 3000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        })
    })
    window.onresize = function(event) {
        reloadSlider();
    };
}


  return (
    <>
      <Router>
        <nav className='Navbar'>
          <img className="logo" src={logo} alt="NinjaCart" />
          <Link>About</Link>
          <div class="dropdown">
            <button class="dropbtn">Products <FaChevronDown /></button>
            <div class="dropdown-content">
              <Link to="/">NinjaCart</Link>
              <Link to="/">Ninja Mandi</Link>
              <Link to="/">Ninja Mandi</Link>
              <Link to="/">Ninja Kisna</Link>
              <Link to="/">Ninja Kirana</Link>
              <Link to="/">Ninja Global</Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Ninja Ventures <FaChevronDown /></button>
            <div class="dropdown-content">
              <Link >Domestic</Link>
              <Link >International</Link>
            </div>
          </div>
          <Link className='navlink'>Careers</Link>
          <Link className='navlink'>Media</Link>
          <Link className='navlink'>Blog</Link>
          <Link className='navlink'>Contact Us</Link>
          <div className="social">
            <Link to="https://www.linkedin.com/in/rishi-raj-singh-b424231b7/" className='navlink'><FaLinkedin /></Link>
            <Link to="https://www.instagram.com/rishisingh_._/" className='navlink'><FaInstagram /></Link>
            <Link to="https://www.instagram.com/rishisingh_._/" className='navlink'><FaYoutube /></Link>
            <Link to="https://www.linkedin.com/in/rishi-raj-singh-b424231b7/" className='navlink'><FaFacebook /></Link>
          </div>
        </nav>
        <div className="animation" style={{ display: "flex" }}>
          <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "13px" }}>‎ </div>
          <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "13px" }}>‎ </div>
          <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "13px" }}>‎ </div>
          <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "13px" }}>‎ </div>
        </div>



        <div className="banner">
          <video className='video' height="70%" width="100%" overflow=" hidden" autoplay="autoplay"  muted>
              <source src={bannerVideo} type="video/mp4" />
            </video>
          </div>



        <div className="achievements">
          <div>
            <img src={achievement1} alt="achievement1" />
            <h2>Proud Participant</h2>
          </div>
          <div>
            <img src={achievement2} alt="achievement2" />
            <h2>Best DevOps Team</h2>
          </div>
          <div>
            <img src={achievement3} alt="achievement3" />
            <h2>Agri Company of the Year</h2>
          </div>

        </div>
        <div className="intro">
          <div className="text">
            <h1>Building trusted paths of</h1>
            <h1>growth for every</h1>
            <h1 style={{ paddingBottom: "1%" }}>agri citizen</h1>
            <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <p style={{ paddingTop: "20px" }}>For almost a decade, we have</p>
            <p>been focused on transforming</p>
            <p>the agri ecosystem.</p>
            <br></br>
            <p>By harnessing technology and</p>
            <p>innovation, we create products</p>
            <p>and services that help small</p>
            <p>businesses grow, across the</p>
            <p style={{ paddingBottom: "2%" }}>value chain.</p>
            <button style={{ padding: "20px 40px", backgroundColor: "#FB9C24", borderRadius: "50px", color: "white", fontWeight: "bold", fontSize: "15px" }}>Learn More</button>

          </div >
          <div className="introVideo">
            <video width="700" height="600" autoplay="autoplay" loop muted>
              <source src={introVideo} type="video/mp4" />
            </video>
          </div>


        </div>
        <div className="stats">
          <img src={group1} alt="" />
          <img src={group2} alt="" />
          <img src={group3} alt="" />
          <img src={group4} alt="" />


        </div>



        <div className="intro">
          <div className="text">
            <h1>Empowering every</h1>
            <h1 style={{ paddingBottom: "1%" }}>link</h1>
            <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <p style={{ paddingTop: "20px" }}>At each stage of the pre and</p>
            <p>post harvest journey, our</p>
            <p>solutions are crafted to simplify</p>
            <p>business challenges.</p>
            <br></br>
            <p>We mitigate payment risks,</p>
            <p>maintain quality standards,</p>
            <p>smoothen the logistics</p>
            <p>experience, and distribute real-</p>
            <p>time information. Our products</p>
            <p>are accessible to all, helping</p>
            <p>businesses become</p>
            <p>dependable and trustworthy to</p>
            <br></br>
            <p>Our ultimate goal is to ensure</p>
            <p>seamless trade of fresh</p>
            <p>produce from point to point,</p>
            <p style={{ paddingBottom: "2%" }}>both locally and globally.</p>
          </div >
          <div className="Animator">
            <div className="profile-container">
              <div className="profile-box" style={{ backgroundImage: `url(${farmer})` }}>
                <div className="profile-box-content">
                  <h2>Input Retailer</h2>
                </div>
              </div>
              <div className="profile-box" style={{ backgroundImage: `url(${farmer2})` }}>
                <div class="profile-box-content">
                  <h2>Production Trader</h2>
                </div>
              </div>
              <div className="profile-box" style={{ backgroundImage: `url(${farmer3})` }}>
                <div className="profile-box-content">
                  <h2>Farmer</h2>
                </div>
              </div>
              <div className="profile-box" style={{ backgroundImage: `url(${seller1})` }}>
                <div className="profile-box-content">
                  <h2>Consumption Trader</h2>
                </div>
              </div>
              <div className="profile-box" style={{ backgroundImage: `url(${seller2})` }}>
                <div className="profile-box-content">
                  <h2>WholeSeller</h2>
                </div>
              </div>
             
            </div>
          </div>


        </div>


        <div className="future" >
          <h1 style={{paddingBottom:"2%"}}>Focusing on a future that’s better</h1>
          <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <p style={{paddingTop:"2%"}}>By fulfilling demand for farmers and retailers and building a marketplace for local and</p>
        <p>international traders, we are also opening access to lending, credit, commerce, and more.</p>
        <br />
        <p style={{paddingBottom:"2%"}}>Our products are crafted to help businesses flourish and make millions of lives better.</p>

        </div>

        <div className="Ventures">
          <div className="text">
            <h1>Ninja Ventures:</h1>
            <h1 style={{ paddingBottom: "1%" }}>Investing in ideas.</h1>
            <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="red" style={{ backgroundColor: "red", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <p style={{ paddingTop: "20px" }}>For almost a decade, we have</p>
            <p>been focused on transforming</p>
            <p>the agri ecosystem.</p>
            <br></br>
            <p>By harnessing technology and</p>
            <p>innovation, we create products</p>
            <p>and services that help small</p>
            <p>businesses grow, across the</p>
            <p style={{ paddingBottom: "2%" }}>value chain.</p>

          </div >
          <div className="images-di">
            <img src={domestic} alt="" />
            <img src={international} alt="" />
          </div>


        </div>
        <div className="media">
        <h1 style={{ paddingBottom: "1%" }}>Media and Awards</h1>
          <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
        </div>

        <div class="slider">
        <div class="list">
            <div class="item">
                <img src={award1} alt=""/>
            </div>
            <div className="item">
                <img src={award2} alt=""/>
            </div>
        </div>
        <div className="buttons">
            <button id="prev"><FaArrowAltCircleLeft /></button>
            <button id="next"><FaArrowAltCircleRight/></button>
        </div>
        <ul className="dots">
            <li class="active"></li>
            <li></li>
        </ul>
    </div>
    <div className="Investors">
        <h1 style={{ paddingBottom: "2%" }}>Investors who put their faith in us</h1>
          <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <div className="section1">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            </div>
            <div className="section1">
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            </div>
         
        </div>

        <div className="Views">
          <h1 style={{ paddingBottom: "2%" }}>Investors who put their faith in us</h1>
          <div className="small-animation" style={{ display: "flex" }}>
              <div className="green" style={{ backgroundColor: " rgb(1, 167, 1)", width: "25%", height: "3px" }}>‎ </div>
              <div className="orange" style={{ backgroundColor: "orange", width: "25%", height: "3px" }}>‎ </div>
              <div className="blue" style={{ backgroundColor: "blue", width: "25%", height: "3px" }}>‎ </div>
              <div className="pink" style={{ backgroundColor: "#910A67", width: "25%", height: "3px" }}>‎ </div>
            </div>
            <img src={au1} alt=""style={{width:"90vw",overflow:"hidden"}} />
            </div>

           <div className="footer">
            <div className="left">
              <img className='logo' src={logo} alt="" style={{paddingTop:"2%"}} />
              <p style={{paddingTop:"2%"}}>2nd floor Tower E, Helios Business Park,</p>
              <p>New Horizion College Bus stop, Service road,</p>
              <p>Chandana, Kadubeesanahalli, Bengaluru,</p>
              <p style={{paddingBottom:"2%"}}>560103</p>
              <h3 style={{paddingBottom:"2%"}}>
              <PiPhoneCallFill /> 080 69155666
              </h3>
            </div>
            <div className="right">
            <h3>
            Resources
              </h3>
              <div style={{display:"flex"}}>
              <p> Blog </p>|<p> Careers</p> |<p> Media </p>|<p>Contact us</p>
              </div>
            <h3 >
            Connect with us 
              </h3>
              <div className="social">
            <Link to="https://www.linkedin.com/in/rishi-raj-singh-b424231b7/" className='navlink'><FaLinkedin /></Link>
            <Link to="https://www.instagram.com/rishisingh_._/" className='navlink'><FaInstagram /></Link>
            <Link to="https://www.instagram.com/rishisingh_._/" className='navlink'><FaYoutube /></Link>
            <Link to="https://www.linkedin.com/in/rishi-raj-singh-b424231b7/" className='navlink'><FaFacebook /></Link>
          </div>
              
            </div>
           </div>
          
        

        
      </Router>
    </>
  )
}

export default App
