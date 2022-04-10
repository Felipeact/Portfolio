import './services/firebase'
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"
import { Portfolio } from "./components/Portfolio"
import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonials"

function App() {

  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
