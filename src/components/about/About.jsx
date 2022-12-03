import React from 'react'
import './about.css'
import {AiFillCode} from 'react-icons/ai'
import ME from '../../assets/hero.png'
import {FiUsers} from 'react-icons/fi'
import {IoLibrary} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="countainer about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">

          <article className="about__card">
            <AiFillCode className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Programming</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <IoLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>300+ Projects</small>
          </article>
        </div>
        <p>
          My skills and talent are unparalleled in the domain of Software Development. My name is Wali Temuri, the one who is favoured by god,
          Ruler of the Lost City of Atlantis.
        </p>
      </div>
    </div>
    </section>
  )
}

export default About