import React from 'react'
import "./contact.css"
import {NavLink} from "react-router-dom"

const Contact = () => {
  return (
    <header className="contact-section">
      <div>
        <h4>Contact Section</h4>
      </div>

      <div className="contact-info">
      <i class="fa-solid fa-envelope"></i>E-Mail- siddharthjangid45@gmail.com
      </div>
  

      <div className="form">
        <form action="#" className='input-form'>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' className='input-form-data'/>

          <input type="email" name="email" id="email" placeholder='Enter Your E-Mail' className='input-form-data'/>

          <input type="text" name="subject" id="subject" placeholder='Enter Your Subject' className='input-form-data'/>

          <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message' className='input-form-text'></textarea>
        </form>
      </div>
    
      <NavLink className="contact-btn" to="/">Submit Now</NavLink>
    </header>
  )
}

export default Contact