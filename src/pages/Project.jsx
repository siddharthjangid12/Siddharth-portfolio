import React from 'react'
import "./project.css"

const Project = () => {
  return (
   <header className="project-section">
    <div>
      <h2>Project Section</h2>
    </div>
    <div className="project-list">
      <div className="project-list-data-1">
        <img src="./images/tech-hub.png" alt="" className='project-image'/>
        <h3>Tech-Hub Educational Website</h3>
        <div className="link">
        <span>
          <a href="https://techhubweb.netlify.app/">Visit Site</a>
        </span>
        <span>
          <a href="https://github.com/siddharthjangid12/Tech-Hub.git">Source File</a>
        </span>
        </div>
      </div>

      <div className="project-list-data-2">
        <img src="./images/fit-club.png" alt="" className='project-image'/>
        <h3>Fit-Club Gym Website</h3>
        
        <div className="link">
        <span>
          <a href="https://fitclubwebsite.netlify.app/">Visit Site</a>
        </span>
        <span>
          <a href="https://github.com/siddharthjangid12/fit-club.git">Source File</a>
        </span>
        </div>
      </div>

      <div className="project-list-data-1">
        <img src="./images/food-adda.png" alt="" className='project-image'/>
        <h3>Food-Adda Food Website</h3>
        <div className='link'>
        <span>
          <a href="https://foodaddaweb.netlify.app/">Visit Site</a>
        </span>
        <span>
          <a href="https://github.com/siddharthjangid12/Food-adda.git">Source File</a>
        </span>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Project