import React from 'react'
import CV from 'assets/resume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download="EdsonResume.pdf" className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA