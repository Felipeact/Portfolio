import { useRef } from 'react'
import emailjs from 'emailjs-com'

import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'


import './styles.scss'

export function Contact() {
  const form = useRef<HTMLFormElement | any>()

  const sendEmail = (e: HTMLFormElement | any) => {
    e.preventDefault();

    emailjs.sendForm('service_18tsc8n', 'template_dlzrigv', form.current, 'user_ibhCZmizB1ufAHgob1u6E')
    e.target.reset()
  }


  return (
    <section id='contact'>
      <h5> Get in touch</h5>
      <h2> Contact me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4> Email</h4>
            <h5>Felipetiburcioviana@gmail.com</h5>
          </article>

          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon'/>
            <h4> Phone</h4>
            <h5>+1 778 512-8724</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" rows={7} placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}