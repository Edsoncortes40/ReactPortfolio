import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCode} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
      className={activeNav == '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} 
        className={activeNav == '#about' ? 'active' : ''}><AiOutlineUser/></a>
        
      <a href="#projects" onClick={() => setActiveNav('#projects')}
      className={activeNav == '#projects' ? 'active' : ''}><AiOutlineCode/></a>
      
      <a href="#contacts" onClick={() => setActiveNav('#contacts')}
      className={activeNav == '#contacts' ? 'active' : ''}><AiOutlineMail/></a>
    </nav>
  )
}

export default Nav