import React from 'react'
import './projects.css'
import lavi_image from '../../assets/lavi.jpg'
import rank_store_image from '../../assets/rank_my_store.png'
import question_mark_image from '../../assets/question_mark.jpg'
import s3_image from '../../assets/logo_s3.png'
import fragTracker from '../../assets/fragTrackerLogo.png'
import starry_night from '../../assets/starry_night.jpg'

const data = [
  {
    id: 1,
    image: fragTracker,
    title: 'Fragrance Tracker',
    description: "Next.JS web application that allows users to browse and track fragrances. Uses Firestore Functions to perform operations in the \
                  backend, and Typescript for the front end logic. Allows users with Admin status to add new fragrances to the site, which will be \
                  stored in the firestore database.",
    github: 'https://github.com/Edsoncortes40/ReactPortfolio',
    demo: 'https://frag-web-client-mcbqv2f2hq-ue.a.run.app'
  },
  {
    id: 2,
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
    id: 3,
    image: starry_night,
    title: 'Inverse AI Art Generator',
    description: "Website that allows users to enter a prompt. The website will then make a request to the backend API \
                  which inverts the prompt, and then generates an image using OpenAI's DALLE AI image generator, using that\
                  inverted prompt. The front-end websige was coded  using React, \
                  and the backend API coded using Python and FastAPI. ",
    github: 'https://github.com/Edsoncortes40/NegaArt-API/tree/main/python-backend',
    demo: 'https://negaart-website.pages.dev/'
  },
  {
    id: 4,
    image: s3_image,
    title: 'Student Sustainability Summit Website',
    description: "Volunteered as a  Software Developer for a UMD Student Organization, known as the Student Sustainability Summit (or S3 for short). \
                  Worked with a team of two other Computer Science students to develop and design the organization's main website, along with the mobile \
                  app.",
    github: 'https://github.com/studentsustainabilitysummit/studentsustainabilitysummit.github.io',
    demo: 'https://www.studentsustainabilitysummit.org/index.html'
  },
  {
    id: 5,
    image: rank_store_image,
    title: 'Rank My Store',
    description: "Rank My Store is an android application that allows users to sign in, create an account, and find \
                  nearby grocery stores which they can rate based on healthy produce offered. The app will take the \
                  user's location in order to find nearby stores, and also has a photo feature which allows users to \
                  upload photos to the store's page.",
    github: 'https://github.com/gutama8787/Rank-My-Store',
    demo: 'https://drive.google.com/file/d/1-jf1LOlTyxdCw3GbCO-pBxpnnmHRFCJq/view'
  },
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