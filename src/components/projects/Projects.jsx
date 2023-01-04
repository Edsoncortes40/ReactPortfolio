import React from 'react'
import './projects.css'
import lavi_image from '../../assets/lavi.jpg'
import rank_store_image from '../../assets/rank_my_store.png'
import question_mark_image from '../../assets/question_mark.jpg'
import mips_image from '../../assets/mips.jpg'

const data = [
  {
    id: 1,
    image: lavi_image,
    title: 'LAVI',
    description: "LAVI (Language Agnostic Vulnerability Identifier) is a tool for meant for developer \
                  and researcher utility. The goal of LAVI is to find and aid users in resolving critical \
                  vulnerabilities (CVEs) found within a user's program. LAVI will query our database in order \
                  to find the vulenrabilities in a package and its dependencies. Users are able to switch \
                  dependency versions and test for severerities in order to remediate CVE's in projects.",
    github: 'https://github.com/teamlavi/package',
    demo: 'https://github.com/teamlavi/package'
  },
  {
    id: 2,
    image: rank_store_image,
    title: 'Rank My Store',
    description: "Rank My Store is an android application that allows users to sign in, create an account, and find \
                  nearby grocery stores which they can rate based on healthy produce offered. The app will take the \
                  user's location in order to find nearby stores, and also has a photo feature which allows users to \
                  upload photos to the store's page.",
    github: 'https://github.com/gutama8787/Rank-My-Store',
    demo: 'https://drive.google.com/file/d/1-jf1LOlTyxdCw3GbCO-pBxpnnmHRFCJq/view'
  },
  {
    id: 3,
    image: mips_image,
    title: 'Mips Pipelining',
    description: "Project in C that simulates instruction pipelining in a MIPS system.",
    github: 'https://github.com/Edsoncortes40/411Pipeline',
    demo: 'https://github.com/Edsoncortes40/411Pipeline'
  },
  {
    id: 4,
    image: question_mark_image,
    title: 'More Coming Soon',
    description: "",
    github: 'https://github.com/edsoncortes40',
    demo: 'https://drive.google.com/edsoncortes40'
  }
]

const Projects = () => {
  return (
  <section id='projects' className='projects'>
    <div className='projects'>
      <h2>My Projects</h2>
      <h5>Portfolio</h5>

      <div className='container project_container'>
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article className='project_item'>
                <div className='project_image'>
                  <img src={image} alt='' />
                </div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className='project_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  </section>
  )

}

export default Projects