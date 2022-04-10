import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import Felipe03 from '../../Images/Felipe03.jpeg'

import './styles.scss'


export interface PortifolioData {
  id: number;
  name: string; 
  html_url: string;
  language: string;
}


export function About() {
  const [ reposData, setReposData ] = useState<PortifolioData[]>([])

  useEffect( () => {
    async function getRepos(){
      const response = await axios.get('https://api.github.com/users/felipeact/repos')

      setReposData(response.data)
    }

    getRepos()
  }, [])

  
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Felipe03} alt="Felipe Viana" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>2 + clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>{reposData.length} + Projects</small>
            </article>
          </div>

          <p className='text'>
          Hi There, My Name is Felipe Viana. I'm a Junior FrontEnd Developer trying to 
          engage in some company to work and show some skills that I`ve been learning through 
          those years.
          </p>
          
          <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
      </div>
    </section>
  )
}