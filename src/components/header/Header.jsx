import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/DC_Strokes_photo.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Edson's Portfolio</h1>
        <h5 className="text-light">New Grad Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className='scroll_down'> Bottom of Page</a>
      </div>
    </header>
  )
}

export default Header