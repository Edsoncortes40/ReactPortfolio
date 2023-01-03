import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/edsoncortes40/" target= "_blank" className='social'><AiOutlineLinkedin/></a>
        <a href="https://github.com/edsoncortes40" target= "_blank" className='social'><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials