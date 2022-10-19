import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className="navbar">
    <ul className="navbar-list">
      <li>
        <NavLink className="navbar-icons" to ="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="navbar-icons" to ="/project">Project</NavLink>
      </li>
      <li>
        <NavLink className="navbar-icons" to ="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink className="navbar-icons" to ="/about">About</NavLink>
      </li>
      <li>
        <NavLink className="navbar-icons" to ="/contact">Contact</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default Navbar