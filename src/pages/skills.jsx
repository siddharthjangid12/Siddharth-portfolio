import React from 'react'
import "./skills.css"

const skills = () => {
  return (
    <header className="skills-section">
      <div>
      <h3>skills section</h3>
      </div>

      <div className="skills-section--">
        <div className="skills-section-data-1">
          <img src="./images/html.png" alt="" className='skills-image' />
          <h4>HTML</h4>
          <p>HTML-HyperText Markup Language is the most basic building block of the Web. It defines the meaning and structure of web content</p>
        </div>

        <div className="skills-section-data-2">
          <img src="./images/css.png" alt="" className='skills-image' />
          <h4>CSS</h4>
          <p>CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language</p>
        </div>

        <div className="skills-section-data-1">
          <img src="./images/javascript.png" alt="" className='skills-image' />
          <h4>Javascript</h4>
          <p>JavaScript is a programming language commonly used in web development,It was originally developed by Netscape as a means to add dynamic and interactive elements to websites</p>
        </div>

        <div className="skills-section-data-2">
          <img src="./images/bootstrap.png" alt="" className='skills-image' />
          <h4>Bootstrap</h4>
          <p>Bootstrap is a free and open-source web development framework,It is designed to ease the web development process of responsive mobile websites</p>
        </div>

        <div className="skills-section-data-1">
          <img src="./images/J-query.png" alt="" className='skills-image' />
          <h4>J-Query</h4>
          <p>J-Query is a fast, small, cross-platform and feature-rich JavaScript library. It is designed to simplify the client-side scripting of HTML</p>
        </div>

        <div className="skills-section-data-2">
          <img src="./images/react.png" alt="" className='skills-image' />
          <h4>React Js</h4>
          <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components,It is maintained by Meta</p>
        </div>
      </div>
    </header>
  )
}

export default skills