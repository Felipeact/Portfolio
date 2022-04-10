
import './styles.scss'

export function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Felipe Viana</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_copyright">
        <small>&copy; Copyright Felipe Viana ❤️</small>
      </div>
    </footer>
  )
}