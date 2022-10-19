import React from 'react'
import "./home.css"
import {NavLink} from "react-router-dom"
import Project from "./Project"
import About from "./About"
import Skills from "./skills"
import Contact from "./Contact"

const Home = () => {
  return (
   <header className="home-section">
       <div className="home-section--">
          <div className="home-section-data">
             <h5>hi i am</h5>
             <h3>Siddharth jangid</h3>
             <p>a front-end web developer and i'm very passionate and dedicated for this career.</p>
               
               <div className="social">
               <span>
                <a href="https://github.com/siddharthjangid12/"><i class="fa-brands fa-github"></i></a>
                </span>
                <span>
                <a href="https://www.linkedin.com/in/siddharthjangid12/"><i class="fa-brands fa-linkedin"></i></a>
                </span>
                <span>
                <a href="https://www.instagram.com/siddharth_jangid_12/"><i class="fa-brands fa-instagram"></i></a>
                </span>
                </div>
             <div>
              <NavLink className="home-btn" to="/contact">Hire Me</NavLink>
             </div>
          </div>  

          <div className="home-section-image">
            <img src="./images/sid.jpg" alt="" className='home-image' />
          </div>
       </div>

       <Project />
       <About />
       <Skills />
       <Contact />
   </header>
  )
}

export default Home