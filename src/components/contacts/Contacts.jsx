import React from 'react'
import './contacts.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oxgt31s', 'template_w1hcqdl', form.current, 'FOZpbKlUQqeBsI1Ti')
    
    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h2 className='title'>Get In Touch</h2>
      <h5 className='subtitle'>contact Me!</h5>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMarkEmailRead className='contact_icon'/>
            <h4>E-mail</h4>
            <h5>edcortes@terpmail.umd.edu</h5>
            <a href='mailto:edcortes@terpmail.umd.edu' target='_blank'>Send an E-mail</a>
          </article>

          <article className='contact_option'>
            <AiOutlinePhone className='contact_icon'/>
            <h4>Phone</h4>
            <h5>+1 (443) 766-6576</h5>
          </article>

          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_icon'/>
            <h4>LinkedIn</h4>
            <h5>edsoncortes40</h5>
            <a href='https://www.linkedin.com/in/edsoncortes40/' target='_blank'>Connect on LinkedIn</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Name Here' required />
          <input type="email" name='email' placeholder='Enter Email Here' required />
          <textarea name='message' rows='7' placeholder='Enter Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts