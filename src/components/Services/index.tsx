
import { BiCheck } from 'react-icons/bi'
import './styles.scss'

export function Services() {
  return (
    <section id='services'>
      <h5>What do I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {/* End OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className="service__list">
              <li>
                <BiCheck className='service__list-ico'/>
                <p>1 -3 years experience developing typescript-based solutions using React JS and Next JS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Ability to understand bunisses requirement and translate
                  them into technical requirement to effectively prioritize and execute task
                </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Social Media APIs(Facebook, Twitter, Github, Firebase and Etc...)</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Familiarity with Restful API</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>knowledge of modern authorization mechanism such as JWT, oAuth0, Firebase Auth and Etc...</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Experience developing with CMS( Prismic and Wordpress)</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Proeficiency with HTML, CSS, Typescript and JavaScript</p>
              </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        
      </div>
    </section>
  )
}