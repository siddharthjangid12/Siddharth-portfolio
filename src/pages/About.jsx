import React from 'react'
import "./about.css"

const About = () => {
  return (
    <header className="about-section">
      <div>
        <h3>About Section</h3>
      </div>
    <div className="about-data">
      <img src="./images/sid.jpg" alt="" className='about-image' />
      <h2>Siddharth Jangid</h2>
      <p>hello,I am siddharth jangid, a frontend web developer. i have started my web development career from last 4 months. in the beginning i got web development certificate and by practicing slowly i became very dedicated and passionate for this career, I have changed my career from mechanical to web development and I am very passionate and dedicated for website development, so I have chosen this career.</p>
    </div>

    <div className="about-section-data">
      <h4>HTML</h4>
      <div className="about-progress-bar">
        <span>90%</span>
      </div>

      <h4>CSS</h4>
      <div className="about-progress-bar-2">
        <span>85%</span>
      </div>

      <h4>JAVASCRIPT</h4>
      <div className="about-progress-bar-3">
        <span>75%</span>
      </div>

      <h4>BOOTSTRAP</h4>
      <div className="about-progress-bar-4">
        <span>95%</span>
      </div>

      <h4>REACT JS</h4>
      <div className="about-progress-bar-5">
        <span>70%</span>
      </div>
    </div>
    </header>
  )
}

export default About