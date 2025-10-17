import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Experiences from './Components/Experiences/Experiences'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyProjects from './Components/MyProjects/MyProjects'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App