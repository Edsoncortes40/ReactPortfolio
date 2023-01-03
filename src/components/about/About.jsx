import React from 'react'
import './about.css'
import GroupPic from '../../assets/packageGroupPhoto.jpg'
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <p className='intro_paragraph'>
        Hello and welcome to my portfolio page! I'm a new graduate from the University of Maryland, 
        College Park. I graduated with my bachelors in Computer Science with a minor in General Business.
        I am currently searching for a job in Software Engineering, that will help me propel my skills into the 
        next level. 
      </p>

      <div className='container about_container'>
        <div className ='left_column'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src={GroupPic} className='image' alt='About Image'/>
            </div>
          </div>
          <a href='#contacts' className='about-btn'>Let's Talk!</a>
        </div>
        
        <div className='about_content'>

          <div className='about_cards'>
            <article className='about_card'>
              <HiOutlineWrenchScrewdriver className='about_icon'/>
              <h5>Skills and Experiences</h5>
  
                <div className='skills'>
                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>Java</h4>
                  </article>
                
                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>Python</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>React</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>C/C++</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>Kotlin (Android development)</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>SQL</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>GIT</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>SVN</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>Javascript</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>CSS</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>OCAML</h4>
                  </article>

                  <article className='skill'>
                    <RiCheckboxCircleFill/>
                    <h4>FASTAPI</h4>
                  </article>
                </div>
                
            </article>
          </div>

        </div>
      </div>
      
    </section>

  )
}

export default About