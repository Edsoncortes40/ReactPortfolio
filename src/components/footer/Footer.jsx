import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Edson C.</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contacts'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com/edcortes.riv' target='_blank'><AiOutlineInstagram/></a>
        <a href='https://github.com/Edsoncortes40' target='_blank'><AiOutlineGithub/></a>
      </div>

      <div className='footer_copyright'>
        <small><AiOutlineCopyrightCircle/> Edson Cortes Rivera. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer