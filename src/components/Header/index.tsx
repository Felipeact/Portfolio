
import { CTA } from './CTA'
import { Socials } from './Socials'

import Felipe01 from '../../Images/Felipe01.jpeg'

import './styles.scss'

export function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello, I am</h5>
        <h1> Felipe Viana</h1>
        <h5 className="text-light">Frontend Develper</h5>

        <CTA />
        <Socials />

          <img className="me" src={Felipe01} alt="Felipe Viana" />

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}