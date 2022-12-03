import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/heroFour.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Wali Temuri</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div>
          <img src={ME} alt="me" className='me'/>
        </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header